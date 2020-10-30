import  React from 'react'


class GifList extends React.Component{


render(){
    console.log(`propppp`,this.props)
 return (
            <div>  
            { 
               this.props.giflist.map(el=>{
              return  <ul >
                          <li>
                             <img src={`${el.images.original.url}`} />
                           </li>
                      </ul>
                      
                       })
            }
            </div>
        )
}

}
      

export default GifList 