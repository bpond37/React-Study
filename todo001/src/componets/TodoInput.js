import React, {Component} from 'react'

class TodoInput extends Component {
    constructor(props){
        super(props)
        this.state ={
            text: ""
        }
        console.log(props)
        this.add = props.add
    }

    setText = (e) =>{
        console.log(e.target.value)
        this.setState({text:e.target.value})
    }
    
    sendData = ()=>{
        // console.log(a)
        this.add(this.state.text)
    }
    

    render(){
        return(
            <div>
                <h1>TodoInput</h1>
                <input type='text' value={this.state.text} onChange={(e)=>this.setText(e)}></input>
                <button onClick={this.sendData}>+</button>
            </div>
        )

    }

}

export default TodoInput