

const initialState = {
    content:[],
    number:0,
    totalPages:0
}

function s2Reducer( state = initialState, action) {
    console.log("s2Reducer.......", action)

    const {type, payload} = action

    if(type === 'END_GET_PAGE'){
        return {
            content:payload.content,
            number: payload.number,
            totalPages: payload.totalPages
        } 
    }

    return state
}

export default s2Reducer