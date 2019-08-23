import React from 'react'

    const TodoList = ({todos}) => {


        const list = todos.map( ({title,idx,tno}) => {
            return(
                <div>  <li key={idx}> {tno},{title} </li></div>

            )
        })
        console.log(list)


        return(

            <div>
                <h1>TodoList</h1>
                    <ul>
                    
                     {list}
                    </ul>
            </div>

            
            )

    }

    export default TodoList