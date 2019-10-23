import React, {useState, useEffect} from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'




export default function Todo(){
    const initialTodos = [
        {tno :3 , title : 'cc'},
        {tno :2 , title : 'bb'},
        {tno :1 , title : 'aa'},
    ]
    const [todos, setTodos] = useState(initialTodos)
    
    const addTodo = (title) => {
        const arr = todos.slice()
        arr.splice(0,0,{tno: arr[0].tno+1, title: title})
        console.log(arr)
        setTodos(arr)
    }

    const checkTodo = (tno) =>{
        const arr = todos.slice()
        const target = arr.filter(obj => obj.tno === tno)[0]
        const index = arr.indexOf(target)
        arr[index] = Object.assign(target, {complete : !target.complete})
        setTodos(arr)
    }

    const updateTodo = (tno,title) =>{
        const arr = todos.slice()
        const target = arr.filter(obj => obj.tno === tno)[0]
        const index = arr.indexOf(target)
        console.log(target)
        console.log("title",title)
        arr[index] = Object.assign(target, {isEditing : !target.isEditing})
        if(target.isEditing){
            console.log("1",target.isEditing)
        } else{
            console.log("2",target.isEditing)
            arr.splice(index,1,{tno:tno,title:title})
            console.log(arr)
        }
            
        
        setTodos(arr)
        
    }

    const deleteTodo = (tno) =>{
        const arr = todos.slice()
        const target = arr.filter(obj => obj.tno === tno)[0]
        const index = arr.indexOf(target)
        arr.splice(index,1)
        setTodos(arr)
    }


    return(
        <div>
            <h1>Todo List</h1>
            <TodoInput add = {addTodo}></TodoInput>
            <TodoList todos ={todos} check={checkTodo} update={updateTodo} remove={deleteTodo}></TodoList>
        </div>
    )

    

}