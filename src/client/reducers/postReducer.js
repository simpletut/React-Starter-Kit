export default function(state = null, action){
    switch(action.type){
        case 'FETCH_POST': 
            return action.payload.data.Blog || false;
        case 'CLEAR_POST_DATA':
            return null
        default:
            return state;
    }
}