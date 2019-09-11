import React from './node_modules/react'


export default function CountButton(props){

    console.log(props)
    return(
          <button onClick={()=>{props.increase()}}>+</button>  
    )
}