import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            gifs: []
        }
    }

    renderGif = () => {
        return this.state.gifs.map((gif) => {
            return(
                <li key={gif.title}>
                    <GifList gif={gif} />
                </li>
            )
        })
    }

    submitHandler = (event) => {
        event.preventDefault()
        const BASE_URL = 'https://api.giphy.com/v1/gifs/search'
        let query = event.target.search.value
        const key = "&api_key=6QzbPR4J4hXXNwIxEJxTAeUj5CFtSCj6&rating=g"
        query = "?q=" + query
        console.log(query)
        fetch(`${BASE_URL + query + key}`)
        .then(response => response.json())
        .then(data => {
            let myData = data.data.slice(0,3)
            console.log(this)
            this.setState({
            gifs: myData
            })
        })
    }

    render() {
        return(
            <div className='GifListContaienr'>
                <GifSearch submitHandler={this.submitHandler} />
                <ul>
                    {this.renderGif()}
                </ul>
            </div>
        )
    }


}

export default GifListContainer