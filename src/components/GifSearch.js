import React, { Component } from 'react';

class GifSearch extends Component {
    submitHandler = (event) => {
        event.preventDefault()
        this.props.submitHandler(event.target.search.value)
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input type="text" id="search"></input>
                <input type="submit"></input>
            </form>
        );
    }
}

export default GifSearch;