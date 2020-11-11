import React, { Component } from 'react';
import GifSearch from '../components/GifSearch';
import GifList from '../components/GifList'

class GifListContainer extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            gifs: []
        }
        
    }
    
    componentDidMount() {
        this.getData()        
    }
    
    
    submitHandler = (event) => {
        event.preventDefault()
        
        this.setState({
            ...this.state,
            search: event.target.search.value
        })
    }

    //fetching the data from the Giphy API
    getData = (query) => {
        fetch("https://api.giphy.com/v1/gifs/search?q="+ query +"&api_key=EolrOatDfVv9nXDXTtBocOP4CcAnLpUO")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        gifs: result.data.slice(0,3)
                    })
                    //console.log(result.data[0])
                }
            )
    }

    render() {
        return (
            <div>
                <GifSearch submitHandler={this.getData}/>
                <GifList gifs={this.state.gifs}/>
            </div>
        );
    }
}

export default GifListContainer;


/*

<GifListContainer /> should be a container that does
 data fetching and then renders its corresponding 
 sub-component. That’s it.

In our app, the <GifListContainer /> will be responsible for
fetching the data from the Giphy API, 
storing the first 3 gifs from the response in its component state, 
and passing that data down to its child, 
the <GifList> component, as a prop.

It will also render a <GifSearch /> component that renders the form. <GifListContainer /> should pass down a submit handler function to <GifSearch /> as a prop.


*/