import React, { Component } from 'react'

import GifList from '../components/GifList'

import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {
    
    state = {
      gifs: []
    }

  submitHandler = (query) => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=m1CccXXQVxOsaafVVrrVRqCzPXJ72`)
      .then(res => res.json())
      .then(({data}) => this.setState({gifs: data.slice(0, 3)}))
  }

  render() {
    return (
      <div>
        <GifList gifs = {this.state.gifs} />
        <GifSearch handleSubmit = {this.submitHandler} />
      </div>
    )
  }
}