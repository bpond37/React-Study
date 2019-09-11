import React from 'react'
import {connect} from 'react-redux'

const style = {
    color:"white",
    margin: "2em",
    backgroundColor: "gray"
}

const spanStyle = {
    padding:"2em"
}

function ControlPanel(props){

    const changePanel = (target) =>{
        console.log("target",target)
        props.dispatch({type:"CHANGE", payload:target})
    }

    return(
        <div style={style}>
            <span style={spanStyle} onClick={() => {changePanel('ALL')}} >ALL</span>
            <span style={spanStyle} onClick={() => {changePanel('A')}  }>Apage</span>
            <span style={spanStyle} onClick={() => {changePanel('B')}  }>Bpage</span>
            <span style={spanStyle} onClick={() => {changePanel('C')}  }>Cpage</span>
        </div>
    )
}

export default connect()(ControlPanel)