import React,{Component} from 'react'

export default class TodoInput extends Component{

    constructor(props){
        super(props)
        this.add = props.add
        // console.log(props)
        this.state={
            text:""
        }
    }

    sendData = ()=>{
        
        console.log("clicked+send"+this.state.text)
        this.add(this.state.text)
        this.setState({text:""})
    }

    changeText = (e) => {
        console.log("changeText")
        console.log(e.target.value)
        const value = e.target.value
        this.setState(
            {text:value}
        )
        
        console.log(this.state.text)

    }
    // onChange={(e)=>{this.state.text.setState(e.target.value)}}
    render(){
        return(
            <div>
                <h1>TodoInput</h1>
                <input type='text' value={this.state.text} onChange={this.changeText}></input>
                
                <button onClick={this.sendData}>+</button>
            </div>
        )

    }
}