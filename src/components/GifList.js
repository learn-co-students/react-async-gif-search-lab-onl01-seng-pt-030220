import React, { Component } from 'react'


export default class GifList extends Component {


  renderGif = () =>{
   return this.props.gifs.map((gif) => {
    return <li key={gif.id}><img src={gif.images.original.url}/></li>
   });
  }

  render(){
    return (
      <ul>
        {this.renderGif()}
      </ul>
    )
  }
}