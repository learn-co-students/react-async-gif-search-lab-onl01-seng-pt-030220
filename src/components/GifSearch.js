import React from 'react'

export default class GifSearch extends React.Component{


handle=(e)=>{
     e.preventDefault();
     console.log(`query`,e.target.name.value)
    this.props.search(e.target.name.value)
}
render(){

  return(
      <form  onSubmit={ this.handle }  >
                <label for="name">Enter search term:</label>
                <input type="text" name="name" id="name"/>
                <button  >find Gifs</button>
      </form>
       )
}

}