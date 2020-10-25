import React, {Component} from 'react'
import GifSearch from './GifSearch'

export default class GifListContainer extends Component{

    renderGif = () =>{
        console.log(this.props.gifs, "this is gifs")
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