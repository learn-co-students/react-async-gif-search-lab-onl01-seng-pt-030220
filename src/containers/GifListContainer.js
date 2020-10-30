import React from 'react'
import GifList from '../components/GifList'
import GifSearch  from '../components/GifSearch'
 class GifListContainer extends React.Component{

    state={
        gifList: []
    }


   fetchGifs=(value="dolphins")=>{

     return fetch(`https://api.giphy.com/v1/gifs/search?q=${value}&api_key=e2wqYH65f6GAFJjCW0a2QbOmSxOpz24e`)
        .then(res=>res.json())
        .then(data=>{
                  this.setState({     
                  gifList: data.data.slice(0,3)
                })

             }
          )
        
   }

   componentDidMount(){
        this.fetchGifs()
   }

//submitHandler=(value)=>{
  //  this.fetchGifs()
   // .then(data=>{
     //           const search =data.data.find(gif=> gif.title == value)
       //         if (search != undefined){
        //        this.setState({     
                  // gifList: [search]
         //       })
         //       }

         //    }
       //   )
//}

  render(){
     return(
                 <div> 
                        <GifSearch  search={this.fetchGifs}/> 
                        <GifList  giflist={this.state.gifList} /> 
                 </div>
          )
  }

}

export default GifListContainer