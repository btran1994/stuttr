import { connect } from "react-redux";
import CommentForm from "./comment_form";
import { withRouter } from "react-router";
import { createComment } from "../../actions/comment_actions";

const mapState = (state, ownProps) => {
    return {
        commentState: {
            body: ""
        },
        photo: ownProps.photo,
        currentUserId: state.session.id,
        errors: state.errors.comment
    };
};

const mapDispatch = dispatch => {
    return {
        createComment: comment => dispatch(createComment(comment))
    };
};

export default withRouter(connect(mapState, mapDispatch)(CommentForm));