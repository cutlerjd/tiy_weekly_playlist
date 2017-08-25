import React, { Component } from 'react'

class PlayListForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userName: '',
            songArtist: '',
            songTitle: '',
            songNotes: ''
        };
    }
    handleuserNameChange = (event) => (
        this.setState({ userName: event.target.value })
    )
    handlesongArtistChange = (event) => (
        this.setState({ songArtist: event.target.value })
    )
    handlesongTitleChange = (event) => (
        this.setState({ songTitle: event.target.value })
    )
    handlesongNotesChange = (event) => (
        this.setState({ songNotes: event.target.value })
    )

    addToList = (e) => {
        e.preventDefault();
        this.setState({ userName: e.target.value, songTitle: e.target.value, songArtist: e.target.value, songNotes: e.target.value });
        let listItem = JSON.stringify(this.state);

        fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
            method: "POST",
            body: listItem,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        ).then(response => {
            console.log(response, "yay");

        }).catch(err => {
            console.log(err, "boo!");
        });
        this.setState({ userName: '', songNotes: '', songArtist: '', songTitle: '' });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addToList}>
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon3">Name or User Name:</span>
                        <input type="text" className="form-control" id="userName" aria-describedby="basic-addon3" value={this.state.userName} onChange={this.handleuserNameChange}/>
                    </div>
                    <br />
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon3">Artist/Band:</span>
                        <input type="text" className="form-control" id="songArtist" aria-describedby="basic-addon3" value={this.state.songArtist} onChange={this.handlesongArtistChange}/>
                    </div>
                    <br />
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon3">Song Title:</span>
                        <input type="text" className="form-control" id="songTitle" aria-describedby="basic-addon3" value={this.state.songTitle} onChange={this.handlesongTitleChange}/>
                    </div>
                    <br />
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon3">Notes about the Song:</span>
                        <input type="text" className="form-control" id="songNotes" aria-describedby="basic-addon3" value={this.state.songNotes} onChange={this.handlesongNotesChange}/>
                    </div>
                    <br />
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <br />
                </form>
            </div>
        )
    }
}

export default PlayListForm