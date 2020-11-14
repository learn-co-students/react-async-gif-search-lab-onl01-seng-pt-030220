import React, {Component} from 'react' 

export default class GifSearch extends Component{

    constructor(){
        super() 
        this.state = {
            query: ""
        }
    }

    handleSubmit = (event) => {
    event.preventDefault()
    this.props.handleSubmit(this.state.query)
    }

    handleChange = event => {
    this.setState({
        [event.target.name]: event.target.value
    })
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