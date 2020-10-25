import React, {Component} from 'react'

export default class GifSearch extends Component{

    state = {
        input: ""
      }

    handleChange = (e) =>{
        this.setState({
            input: e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        console.log(this.state.input)
        this.props.handleSubmit(this.state.input)
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <input type="text" id="query" value={this.state.input} onChange={this.handleChange}/>
                    <h1>{this.state.input}</h1>
                    <button>Submit</button>
                </form>
               
            </div>
        )
    }
}