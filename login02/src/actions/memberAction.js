import axios from 'axios'
import {push } from 'connected-react-router'

export const fetchLogin = (userObj) => {
    return (dispatch) => {
        axios.post("http://192.168.41.38:8080/member/getUser", userObj)
        .then(res => {
            console.log("fetchLogin")
            console.log(res.data)
            dispatch({type:'SUCCESS_LOGIN', payload:res.data})
            dispatch(push("/"))
        })
    }
}


export default {}