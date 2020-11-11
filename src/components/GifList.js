import React, { Component } from 'react';

class GifList extends Component {
    render() {
        return (
            <ul>
                {this.props.gifs.map(gif => <li key={gif.url}><img key={gif.id} src={gif.images.original.url} alt="Oups, something went wrong"></img></li>)}
            </ul>
        );
    }
}

export default GifList;