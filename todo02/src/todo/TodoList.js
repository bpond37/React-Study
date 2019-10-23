import React from 'react'
import useInput from './UseInput'

export default function TodoList ({todos,check,update,remove}) {
    
    console.log(todos)
    const tempTitle = useInput('')
    console.log(tempTitle.value)

    const clickEditBtn = (tno, title)=>{
        update(tno)
        tempTitle.setValue(title)

    }

    const list = todos.map(
        ({tno,title,complete,isEditing})=>{
            const style = complete ? {textDecorationLine: 'line-through', textDecorationStyle: 'solid'} : {}
            if(isEditing){
                // const arr = title
                // tempTitle.setValue(arr)
            return(
                
                <div className="todo-item" key = {tno} style={style} list-style={''}>
                <input type='checkbox' onChange={()=>check(tno)} checked={complete}/>
                {/* {title}  */}
                <input type='text' value={tempTitle.value} onChange={(e)=>{tempTitle.setValue(e.target.value)}}></input>

                <button onClick={()=>update(tno,tempTitle.value)}>change</button>
                <div className="remove" onClick={(e)=>{
                    e.stopPropagation()
                    remove(tno)
                }
                    
                    }>
                    &times;

                </div>
                </div>
            )
        }

        return(
                <div className="todo-item" key = {tno} style={style} list-style={''}>
                <input type='checkbox' onChange={()=>check(tno)} checked={complete}/>
                {title} 
                {/* <button onClick={()=>update(tno)}>update</button> */}
                <button onClick={()=>clickEditBtn(tno, title)}>edit</button>
                <div className="remove" onClick={(e)=>{
                    e.stopPropagation()
                    remove(tno)
                }
                    
                    }>
                    &times;

                </div>
                </div>
            )
        })
    return(
        <div>
            {/* <h3>TodoList</h3> */}
            <ul>
            {list}
            </ul>
        </div>
    )
}