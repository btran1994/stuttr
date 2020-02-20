import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CommentIndex from "./comment_index";
import { fetchComments, destroyComment, patchComment } from "../../actions/comment_actions";
import { openModal } from "../../actions/modal_actions"

const mapState = ( state, ownProps ) => {
    console.log(state, 'com con state')
    console.log(ownProps, 'com con props')
    return {
        comments: Object.values(state.entities.comments),
        photo: ownProps.photo,
        currentUserId: state.session.id,
        username: state.entities.users[state.session.id].username,
        pfp: state.entities.users[state.session.id].imageUrl

    }
}

const mapDispatch = dispatch => {
    return {
        fetchComments: () => dispatch(fetchComments()),
        destroyComment: commentId => dispatch(destroyComment(commentId)),
        openModal: modal => dispatch(openModal(modal)),
        patchComment: comment => dispatch(patchComment(comment))
    }
}

export default withRouter(connect(mapState, mapDispatch)(CommentIndex));