// https://api.giphy.com/v1/gifs/search?q=dogs&api_key=COI788NHznUTLid1ciKLW2cPSQ4voDn1
//my api key: COI788NHznUTLid1ciKLW2cPSQ4voDn1

// images.original.url

import React, { Component } from 'react'

export default class GifSearch extends Component {

  constructor(){
    super()
    this.state = {
      query: ''
    }
  }
  
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.handleSubmit(this.state.query)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Enter Search Term:
            <input id="gifs" name="query" type="text" onChange={this.handleChange} value={this.state.query}/>
          </label>
        </div>
        <div>
          <button type="submit">Find Gifs</button>
        </div>
      </form>
    )
  }
}
