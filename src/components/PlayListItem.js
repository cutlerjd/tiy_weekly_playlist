import React, { Component } from 'react'

class PlayListItem extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
                <div className="card">
                    <ul className="list-group list-group-flush">
                        <h4 className="card-title">{this.props.song.songTitle}</h4>
                        <li className="list-group-item"><b>Title: </b> {this.props.song.songArtist}</li>
                        <li className="list-group-item"><b>Song Notes: </b> {this.props.song.songArtist}</li>
                        <li className="list-group-item"><b>User name: </b> {this.props.song.userName}</li>
                    </ul>
                </div>
        )
    }
}

export default PlayListItem