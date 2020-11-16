import React, { Component } from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


export default class GifListContainer extends Component {
    state = {
        gifs: []
    }

    fetchQuery = (query) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=2Kn8AkarJbz0ZWJuW8HriollOr4p7HPx&limit=3`)
        .then(res => res.json())
        .then(({data}) => this.setState({gifs: data}))
        // .then( ({data}) => console.log(this))

        
    }

    componentDidMount(){
        this.fetchQuery()
    }

    render() {
        return (
            <div>
                <GifList gifs={this.state.gifs} />
              <GifSearch fetchQuery={this.fetchQuery} />   
            </div>
        );
    }
}

