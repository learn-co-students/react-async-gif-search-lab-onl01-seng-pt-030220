import React from 'react'

class GifSearch extends React.Component {
    constructor() {
        super()
        this.state = {
            search: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        let myEvent = event
        this.props.submitHandler(myEvent)
    }


    render() {
        return(
            <form onSubmit={event => this.handleSubmit(event)}>
                <input onChange={this.handleChange} type='text' name='search' value={this.state.search}></input>
                <input type='submit' />
            </form>
        )
    }
}

export default GifSearch