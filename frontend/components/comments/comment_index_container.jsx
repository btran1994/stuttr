import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CommentIndex from "./comment_index";
import { fetchComments, destroyComment } from "../../actions/comment_actions";

const mapState = ( state, ownProps ) => {
    // console.log(state, 'container state')
    return {
        comments: Object.values(state.entities.comments),
        currentUserId: state.session.id,
        username: state.entities.users[state.session.id].username
    }
}

const mapDispatch = dispatch => {
    return {
        fetchComments: () => dispatch(fetchComments()),
        destroyComment: commentId => dispatch(destroyComment(commentId))
    }
}

export default withRouter(connect(mapState, mapDispatch)(CommentIndex));