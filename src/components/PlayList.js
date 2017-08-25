import React, {Component} from 'react'
import PlaylistItem from './PlayListItem'

class PlayList extends Component{
    render(){
        return(
            <div>
            <div>Hello from the List</div>
            {['one item','two item','three item ahahaha'].map( (item) => (
                <PlaylistItem itemName={item}/>
            ))}
            </div>
            
        )
    }
}

export default PlayList