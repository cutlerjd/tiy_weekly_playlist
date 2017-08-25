import React, {Component} from 'react'

class PlayListItem extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>Hello from an item {this.props.itemName}</div>
        )
    }
}

export default PlayListItem