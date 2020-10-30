import React from 'react'
import GifList from '../components/GifList'
import GifSearch  from '../components/GifSearch'
 class GifListContainer extends React.Component{

    state={
        gifList: []
    }

   componentDidMount(){
         fetch(`https://api.giphy.com/v1/gifs/search?q=YOUR%20QUERY%20HERE&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(res=>res.json())
        .then(data=>{
                this.setState({     
                  gifList: data.data.slice(0,3)
                })

             }
          )
   }

submitHandler=(value)=>{
    const search =this.state.gifList.find(gif=> gif.title == value )

    if (search != undefined){
    this.setState({
        gifList: [search]
    })
    }
}

  render(){
     return(
                 <div> 
                       <GifSearch  search={this.submitHandler}/> 
                        <GifList  giflist={this.state.gifList} /> s
                 </div>
          )
  }

}

export default GifListContainer