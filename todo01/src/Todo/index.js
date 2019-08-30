import React, {Component} from 'react'
import TodoInput from './TodoInput';
import TodoList from './TodoList';

export default class Todo extends Component{

    static count = 4

    constructor(props){
        super(props)
        this.state = {

            todos : 
            [
                {pno:1, title:'aa'},
                {pno:2, title:'bb'},
                {pno:3, title:'cc'}
            ]
        }
    }
    
    addTodo=(title)=>{
        const arr = this.state.todos
        arr.push({pno:Todo.count++, title:title})
        
        console.log(arr)
        this.setState(
            {todos:arr}
        )
        console.log("addtodo",title)
    }

    changeComplete = (pno) =>{
        console.log("changeComplete....",pno)
        //targeting object
        const target = this.state.todos.filter(obj => obj.pno === pno)[0]
        console.log("target",target)
        
        const index = this.state.todos.indexOf(target)
        console.log("index",index)

        const tempArr = this.state.todos

        console.log(tempArr[index])
        tempArr[index]= Object.assign(target,{complete: !target.complete})
        console.log(tempArr[index])

        console.log(tempArr)
        this.setState({todos:tempArr})

    }

    render(){
        return(

        <div>
            <TodoInput add={this.addTodo} ></TodoInput>
            <TodoList todos={this.state.todos} change={this.changeComplete}></TodoList>
        </div>
        )
    }
}