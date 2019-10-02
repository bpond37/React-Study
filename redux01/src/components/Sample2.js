import React from 'react'
import { connect } from 'react-redux'
import {fetchPage} from '../actions/sampleAction'

function Sample2(props) {

    const getPage = (page) => {
        console.log("page: " + page)
        props.dispatch(fetchPage(page))
    }


    // const getPage = (page) => {
    //     console.log("page: " + page)
    //     props.dispatch( ()=>{
    //         console.log("inner function: " + page)
    //         axios.get("http://192.168.41.80:8080/todo/pages/" + page)
    //         .then(res => console.log(res.data))
    //     }  )
    // }

    const list = props.content.map( ({tno,title}) => {
        return <li key={tno}>{title}</li>
    } )
    
    return(
        <div>
            <h1>Sample2</h1>
            <h2>CURRENT :  {props.totalPages}</h2>
            <ul>
                {list}
            </ul>
            <button onClick={() => {getPage(1)}}>CLICK</button>
        </div>
        
    )
}

const mapStateToProps = (state) => {
    
    const data = state.s2Reducer

    console.log(data)

    return data
}

export default connect(mapStateToProps)(Sample2)