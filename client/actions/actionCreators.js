// increment
export function increment(index) {
    return {
        type: 'INCREMENT_LIKES',
        index
    }
}

// add comment
export function addComment(postId, author, comment) {
    console.log( 'Dispatching Reducer' );
    return {
        type: 'ADD_COMMENT',
        postId,
        author,
        comment
    }
}

// remove comment
export function removeComment(postId, idx) {
    return {
        type: 'REMOVE_COMMENT',
        idx,
        postId
    }
}