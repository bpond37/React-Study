import React,{Component} from 'react'
import {BrowserRouter as Router, Route, Link,} from 'react-router-dom'
import Axios from 'axios';

export default class TodoList extends Component{

    static page = 0

    constructor(props){
        super(props)

        console.log("constructor.........")
        this.state = {
            content : [],
            totalPages:0,
            loaded:false
            }
    }

    componentDidMount(){
        console.log("componentDidMount")
        const page = this.props.match.params.page
        this.getData(page)
    }

    componentDidUpdate(prevProps){
        if (prevProps.location.key !== this.props.location.key){
            const page = this.props.match.params.page
            
            console.log("componentDidUpdate: "+ page)
            this.getData(page)
        }
        
    }
    getData = (page) => {
        this.setState({loaded:false})
        Axios.get("http://localhost:8080/todo/pages/"+page)
        .then(res =>{
            console.log(res.data)
            this.setState( Object.assign( {},res.data,{loaded:true}) ) 
            TodoList.page = page
        })
    }
    render(){
        console.log("render.....")
        const page = this.props.match.params.page

        const {content,totalPages,loaded} = this.state

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
                <h1>TodoList {page}{loaded?"":"Loading"}</h1>
                {loaded == true?
                
            <div>

                <ul>
                    {list}
                </ul>
                <div>
                    {linkArr}
                </div>
            </div>
            :<h1> wait</h1>
            }
            </div>
        )
    }
}