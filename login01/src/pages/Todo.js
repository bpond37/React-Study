import React,{Component} from 'react'
import {BrowserRouter as Router, Route,Link,Redirect } from 'react-router-dom'
import TodoList from '../components/TodoList';

export default class Todo extends Component {
    constructor(){
        super()
    }
    render() {
        return(
            <Router>
            <div>
                <h1>Todo</h1>
            </div>

            <Route path="/todo/list/:page" component ={TodoList}></Route>    

            </Router>
        )
    }
}