import React, {Component} from 'react'

export default class TodoInput extends Component{

    constructor(props){
        super(props)
        this.add = props.add
        this.state={
            text:""

        }
    }

    sendData = (e) =>{
        console.log("senddata : " + this.state.text)
        this.add(this.state.text)
        this.setState({text:""})

        
    }

    setText = (e) => {
        const value = e.target.value
        this.setState(
            {text:value}
        )
        console.log(this.state.text)

    }

    render(){
        return(
            <div>

                <input type='text' onChange={this.setText} value={this.state.text}></input>
                <button onClick={this.sendData}>add</button>
            </div>
        )
    }
}