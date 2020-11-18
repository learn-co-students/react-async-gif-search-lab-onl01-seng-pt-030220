import React, {Component} from 'react';
import GifSearch from '../components/GifSearch';
import GifList from '../components/GifList';

export default class GifListContainer extends Component {
    state = {
        gifs: [],
        query: ''
    }

    //FETCH from https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g
    handleSubmit = (event) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.query}&api_key=dc6zaTOxFJmzC&rating=g`)
            .then(resp => {return resp.json()})
            // .then(data => console.log(data))
            .then(json => {this.setState({gifs: json.data})})
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        return(
        <div>
            <GifSearch query={this.state.query} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
            <GifList gifs={this.state.gifs} />    
        </div>)
    }
}