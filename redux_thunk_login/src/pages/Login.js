import React from 'react'
import LoginInput from '../components/LoginInput';
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

const Login = (props) => {

    if(props.user){
        return(
            <div>
                <Redirect to="/"></Redirect>
            </div>
        )
    }

    return(
    <div>
      <h1>Login Page</h1>
    
      <LoginInput></LoginInput>

    </div>
    )
}

const mapStateToProps = ({memberReducer}) => {

    return {user: memberReducer.user }
}
  

export default connect(mapStateToProps)(Login)
  
