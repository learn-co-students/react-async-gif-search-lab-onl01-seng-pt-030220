import React, {Component} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component{

    state = {
        gifs: []
      }

    // componentDidMount(query){
    //     console.log(this.props)
    //     fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g"`)
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data)
    //         this.setState({
    //             gifs: data
    //         })
    //     })
    // }

    getAllGifs = (query) => {
        fetch( `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=[API-KEY]`)
        .then(resp => resp.json())
        .then(({data}) => this.setState({gifs: data}))
      }
    

    render(){
        return(
            <div>
                <GifSearch handleSubmit={this.getAllGifs} />
                <GifList gifs={this.state.gifs}/>
            </div>
        )
    }
}