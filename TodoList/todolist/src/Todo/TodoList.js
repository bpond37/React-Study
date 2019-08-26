import React from 'react'

    const TodoList = ({todos, change}) => {


        const list = todos.map( ({title,tno,complete}) => {

            const style = complete? {textDecorationLine: 'line-through', textDecorationStyle: 'solid'}:{}

            return(
                <div>  <li key={tno} style={style}> 
                {title} 
                <input type='checkbox' checked = {complete ? 'checked':'' } onChange={()=>change(tno)}></input>
                    </li></div>

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