import React, { Component } from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


export default class GifListContainer extends Component {

    state = {
        gifs: []
    }

    render() {
        return (
            <div>
                <GifList gifs={this.state.gifs} />
                <GifSearch fetchGIFs={this.fetchGIFs} />
            </div>
        )
    }

    fetchGIFs = (query = "dolphins") => {
        fetch('https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=8yAby4RPH4J0QYJxAJqvcskAimf7jSf2&rating=g&limit=3')
        .then(res => res.json())
        .then(({data}) => {
            this.setState({
                gifs: data.map(gif => ({ url: gif.images.original.url}) )
            })
        })
    }

    componentDidMount() {
        this.fetchGIFs()
    }


}