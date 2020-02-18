import { RECEIVE_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT} from "../actions/comment_actions";

const commentReducer = ( oldState = {}, action ) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState)    
    switch (action.type) {
        case RECEIVE_COMMENTS:
            return action.comments;
        case RECEIVE_COMMENT:
            nextState[action.comment.id] = action.comment
            return nextState;
        case REMOVE_COMMENT:
            nextState = Object.assign({}, oldState);
            delete nextState[action.commentId];
            return nextState;
        default:
            return oldState
    }
}

export default commentReducer;