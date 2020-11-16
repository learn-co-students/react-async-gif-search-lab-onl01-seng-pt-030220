import React, { Component } from 'react';

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {

    state= {
        gifs: []
    }

    //for searching
    fetchGif = () => {
        fetch('https://api.giphy.com/v1/gifs/search?q=cats&api_key=jLGaFgz4KNyGfDQR9HdfQVKezU7xkWed')
        .then(res => res.json())
        .then(({data}) => {
            this.setState({ gifs: data.map(gif => ({ url: gif.images.original.url}))})
        })
    }

    componentDidMount() {
        this.fetchGif()
    }

    render() {
        return(
            <div>
                <GifSearch fetchGif={this.fetchGif}/>
                < GifList gifs={this.state.gifs} />
            </div>
        )
    }
}

export default GifListContainer