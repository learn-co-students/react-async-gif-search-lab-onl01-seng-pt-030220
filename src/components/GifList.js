import React from 'react'

class GifList extends React.Component {
    constructor(props) {
        super()
        this.state = {
            url: props.gif.images.original.url
        }
    }

    render() {
        return(
                <img src={this.state.url} alt={this.props.gif.title} />
        )
    }

}

export default GifList