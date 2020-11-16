import React, { Component } from 'react';

class GifList extends Component {

    gifGallery = () => {
        return this.props.gifs.map( gif => {
            return <li key={gif.id}>
                <img src={gif.images.original.url} alt={gif.title}/>
            </li>
        })
    }

    render() {
        return (
            <div>
            {this.gifGallery()}
            </div>
        );
    }
}

export default GifList;
