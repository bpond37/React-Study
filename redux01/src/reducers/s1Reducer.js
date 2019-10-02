import axios from 'axios'

export const fetchFn = (dispatch) =>{
    console.log("test----1")
    dispatch({type:"START_LOADING"})
    axios.get('http://192.168.41.38:8080/sample/hello')
    .then(res=>{
        console.log(res.data)
        dispatch({type:"END_LOADING"})
    })
}



function s1Reducer( state = {text1:''}, action) {
    console.log("s1Reducer.......", action)

    const {type} = action

    let newState = state

    if(type === 'START_LOADING'){
        newState = {text1: "로딩 중 "}
    }else if (type === 'END_LOADING'){
        newState = {text1: '로딩 완료'}
    }
    return newState
}

export default s1Reducer