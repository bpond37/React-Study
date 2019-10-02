
import axios from 'axios'

export const fetchPage = (page) => {
    return (dispatch, getState) => {
        console.log("fetchPage: " + page)
        console.log(dispatch)
        axios.get("http://172.20.10.2:8080/todo/pages/" + page)
        .then(res => dispatch({type:'END_GET_PAGE', payload: res.data}))
    }
}

export default {}