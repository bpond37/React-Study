import React,{Component} from 'react'
import {BrowserRouter as Router, Route, Link,} from 'react-router-dom'
import Axios from 'axios';

export default class TodoList extends Component{

    constructor(props){
        super(props)

        console.log("constructor.........")
    this.state = {
        content : [],
        totalPages:0
        }
    }

    componentDidMount(){
        const page = this.props.match.params.page
        this.getData(page)
    }

    getData = (page) => {
        Axios.get("http://localhost:8080/todo/pages/"+page)
        .then(res =>{
            console.log(res.data)
            this.setState(res.data)
        })
    }
    render(){
        console.log("render.....")
        const page = this.props.match.params.page

        const {content,totalPages} = this.state
        const list = content.map(({ tno,title }) =>{
        return (<li key={tno}>{title}</li>)
        })

        const linkArr = []
        for(let i = 1 ; i <= totalPages; i++){
            linkArr.push(<Link to = {`/todoList/${i}`}
            key={i} onClick={()=>this.getData(i)}>{i}</Link>)
        }

        return(
    
            <div>
                <h1>TodoList Page</h1>
                <ul>
                    {list}
                </ul>
                <div>
                    {linkArr}
                </div>
            </div>
        )
    }
}