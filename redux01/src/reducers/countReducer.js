

function countReducer(state = {count : 1}, action){
    console.log("-------------",state, action)

    let newState = state
    const {type} = action

    if(type==='INC'){
        newState = {count : state.count+1}
    }

    return newState

}

export default countReducer