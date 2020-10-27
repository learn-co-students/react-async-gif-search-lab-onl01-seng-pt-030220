import React, { Component } from 'react'

export default class GifSearch extends Component {
  
  state = {
    search: ""
  }

  handleChange = (event) => {
    this.setState({search: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    event.stopPropagation()
    this.props.handleSubmit(this.state.search)
  }

  render(){
    return ( 
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange}></input>
          <button>Submit</button>
        </form>
      </div>
    )
  }

}