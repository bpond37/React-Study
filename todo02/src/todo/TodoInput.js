import React, {useState} from 'react'
import useInput from './UseInput'

export default function TodoInput (props) {

    const title = useInput("")
    console.log(title.value)
    const sendData = () =>{
        props.add(title.value)
        title.setValue('')
    }
    
    return(
        <div>
            {/* <h3>TodoInput</h3> */}
            <input type='text' value={title.value} onChange={(e)=>title.setValue(e.target.value)}></input>
            {/* <button onClick={()=>{sendData()}}>+</button> */}
            <button onClick={()=>{sendData()}}>+</button>
        </div>
    )
    
    
}

