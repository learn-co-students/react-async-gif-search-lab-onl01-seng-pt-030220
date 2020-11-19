import React, {Component} from 'react'

export default class GifList extends Component {

    render(){
        
        return(<div>
            <ul className="list-unstyled">
                {this.props.gifs.map((gif, key) => <li key={gif.id}><img className="center-block" src={gif.images.original.url} alt="Gif"/></li>)}
            </ul>
        </div>)
    }

}