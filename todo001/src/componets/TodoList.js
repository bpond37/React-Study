import React from 'react'

function TodoList ({todos}){
    
    console.log({todos})

    const list = todos.map( ({title,tno}) => <h2 key={tno}>{tno}{title}</h2>)
        // const style = complete? {textDecorationLine: 'line-through', textDecorationStyle: 'solid'}:{}


    return(
        <div>
            <h1>TodoList</h1>
            {list}
        </div>
    )
}

export default TodoList