import React, {Component} from 'react'
import { connect } from 'react-redux';
import { fetchLogin } from '../reducers/memberReducer';


class LoginInput extends Component {

    state = {userid:'user11', userpw:'user11'}


    render() {
        return(
            <div>
                USERID <input type='text' onChange = {(e) => { this.setState({userid:e.target.value}) } } ></input><br></br>
                USERPW <input type='text' onChange = {(e) => { this.setState({userpw:e.target.value}) } }></input><br></br>
                <button onClick={() => this.props.doLogin(this.state)}>LOGIN</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {doLogin: (userObj) => dispatch(fetchLogin(userObj))}
}

export default connect(null, mapDispatchToProps)(LoginInput)