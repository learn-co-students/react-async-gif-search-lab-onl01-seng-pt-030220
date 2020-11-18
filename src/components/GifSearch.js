import React, {Component} from 'react';

export default class GifSearch extends Component {

    render(){
        return(
        <div>
            <form onSubmit={this.props.handleSubmit}>
                <input type="text" name="query" onChange={this.props.handleChange} value={this.props.query} placeholder="Search all the GIFs and Stickers" size="30"/>
                <button type="submit"><span role="img" aria-labelledby="search">🔎</span></button>
            </form>
        </div>)
    }

}