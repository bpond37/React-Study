import React, {Component} from 'react'

export default class Counter extends Component{

    constructor(){
        super()
        this.state = {
            count:0,
            text:0
        }

    }

    increase = () => {
        // console.log("increase")
        // console.log(this.state.count+1)
        this.setState(
            {count: this.state.count+1}
        )
    }

    sendData = (e) =>{
        const value = this.state.text
        this.setState({count:this.state.count + this.state.text})
        console.log(value)
    }

    setText = (e) =>{
        const value = e.target.value
        this.setState({text:value})
        console.log(this.state.text)

    }

    render(){
        return(
        <div>
            <h1>value : {this.state.count
            }</h1>
            <button onClick={this.increase}>+</button>
            <input type='int' onChange ={this.setText}></input>
            <button onClick={this.sendData}> 만큼 증가</button>
        </div>
        )
    }
        
    

}