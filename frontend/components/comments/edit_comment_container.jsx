import { connect } from "react-redux";
import EditCommentForm from "./edit_comment_form";
import { withRouter } from "react-router-dom";
import { closeModal } from "../../actions/modal_actions"
import patchComment from "../../actions/comment_actions";

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    patchComment: comment => dispatch(patchComment(comment)),
    closeModal: () => dispatch(closeModal())
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EditCommentForm)
);
