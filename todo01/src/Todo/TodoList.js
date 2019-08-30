import React from 'react'

export default function TodoList({todos, change}){

    //const [pno, title] = {todos}

    // console.log(todos)


    const list = todos.map(({pno,title,complete})=>
        <li key={pno}>{title}<input type='checkbox' onChange={()=>change(pno)}></input></li>
    )

    return(
        <div>
            <h1>TodoList</h1>
            <ul>
                {list}
            </ul>
        </div>
    )
}