import React,{Component} from 'react'
import TodoInput from './TodoInput';
import TodoList from './TodoList';

class Todo extends Component{
    
    static tno = 3;

    constructor(){
        super()
        this.state = {
            todos :[
                {title: "aa", tno: 1},
                {title: "bb", tno: 2},
                {title: "cc", tno: 3},
                
            ]
        }
    }

    addTodo = (title)=>{
        const arr = this.state.todos
        arr.push({title:title, tno: ++Todo.tno})
        console.log(arr)
        this.setState({todos:arr})
    }

render(){
    return(
        <div>
           <TodoInput add = {this.addTodo}></TodoInput>
           <TodoList todos ={this.state.todos}></TodoList>
        </div>
    )

}
}

export default Todo