import React, {Component} from 'react'

export default class Login extends Component{
    constructor(props){
        super(props)
        this.doLogin = props.doLogin
        this.state = 
        {userid:"", userpw:""}
    }

    setUserId = (e) =>{
        console.log(e.target.value)
        this.setState(
            {userid:e.target.value}
        )
    }
    setUserPw = (e) =>{
        console.log(e.target.value)
        this.setState(
            {userpw:e.target.value}
        )
    }

    render(){
        console.log("id",this.state.userid)
        console.log("pw",this.state.userpw)
        return(
            <div>
                <h1>LoginPage</h1>
                <ul>
                    <li> userid <input type='text' onChange={(e)=>this.setUserId(e)}></input></li>
                    <li> userpw <input type='text' onChange={(e)=>this.setUserPw(e)}></input></li>
                    <button onClick={()=>{this.doLogin(this.state)}}>login</button>
                </ul>
            </div>
        )
    }
}