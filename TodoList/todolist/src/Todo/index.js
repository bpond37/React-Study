import React, {Component} from 'react'
import TodoList from './TodoList';
import TodoInput from './TodoInput';

export default class Todo extends Component {

    static count = 3

    constructor(){
        super()
        this.state = {
            todos: [   
                {title : "aa", tno : 1},
                {title : "bb", tno : 2},
                {title : "cc", tno : 3}
            ],
            
        } 
        console.log(this.state.todos)
    }

    // changeComplete = (tno) => {
        
    //     const target = this.state.todos.filter(obj => obj.tno === tno)[0]
    //     const index = this.state.todos.indexOf(target)

    //     const tempArr = this.state.todos

    //     tempArr[index] = Object.assign(target, {complete: !target.complete})

    //     console.log(tempArr)

    //     this.setState({todos:tempArr})

    // }
    
    addTodo = (title)=>{
        const arr = this.state.todos
        arr.push({title:title ,tno:Todo.count++})
        this.setState(
            {todos:arr}
        )
        console.log(this.state.todos)
    }

    render(){
        return(
            
            <div>
                
            <TodoList todos={this.state.todos}></TodoList>
            <TodoInput add={this.addTodo}></TodoInput>

            </div>

        )
        
    }
}