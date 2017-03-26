// Using Reducer Composition creating a sub-reducer

function postComments(state = [], action) {
    switch (action.type){
        case 'ADD_COMMENT':
            // return the new state with the new comment
            return [...state, {
                user: action.author,
                text: action.comment
            }];

        case 'REMOVE_COMMENT':
            // we need to return the new state without the deleted comment
            console.log( action );
            return [
                ...state.slice(0, action.idx), // from the start, to the one we want to delete
                ...state.slice(action.idx + 1) // after the deleted one, to the end
            ];

        default:
            return state;
    }
}

function comments(state = [], action) {
    if( typeof action.postId !== 'undefined'){
        return {
            // take the current state
            ...state,
            // overwrite this post with a new one
            [action.postId]: postComments(state[action.postId], action)
        }
    }
    return state;
}

export default comments