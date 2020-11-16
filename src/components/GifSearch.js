import React, { Component } from 'react';

export default class GifSearch extends Component {

    // constructor(){
    //     super()
    //     this.state = {
    //         query: ''
    //     }
    // }

    state = {
        query: ''
    }

     handleQuery = (e) => {
        this.setState({
            [e.target.name]: e.target.value
          })
     }

     handleSubmit = (event) => {
        event.preventDefault()
        // console.log(this.state.query)
        this.props.fetchQuery(this.state.query)
        
      }
    
    render() {
        return (
            
            <form onSubmit={this.handleSubmit}>
            <div>
                <label>
                   Search Here: 
                   <input id="gifs" name="query" type="text" onChange={this.handleQuery} value={this.state.query}/>
                </label>
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
        );

        
    }
}

