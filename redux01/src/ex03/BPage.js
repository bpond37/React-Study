import React from 'react'

import {connect} from 'react-redux'


const style = {
    height:"30vh",
    backgroundColor:"lightGray",
    color:'white'
}

function BPage (props){
    console.log("display, props",props)
    const pageStyle = Object.assign({}, style, {display: props.display })

    return(
        <div style={pageStyle}>
            <h1> Bpage: {props.display}</h1>
        </div>
    )
}

const mapStateToProps = (state) =>{
    const value = state.current
    let result = "none"
    if(value === 'ALL' || value === 'B'){
        result = "block"
    }
    return {display:result}
}

export default connect(mapStateToProps)(BPage)