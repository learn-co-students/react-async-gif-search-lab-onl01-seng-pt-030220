import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


export default class GifListContainer extends Component {
  
  state = {
    gifs: []
  }

  getGifs = (query) => {
    fetch( `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=[API-KEY]`)
    .then(resp => resp.json())
    .then(({data}) => this.setState({gifs: data.slice(0, 3)}))
  }

  render(){
    return ( 
      <div>
      <GifSearch handleSubmit={this.getGifs} />
      <GifList gifs={this.state.gifs}/>
      </div>
    )
  }

}
