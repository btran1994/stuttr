import React from "react";

class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleEditComment = this.handleEditComment.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      user_id: this.props.currentUserId,
      photo_id: this.props.photo.id,
      body: this.props.comment.body,
      id: this.props.comment.id
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.comment.body !== prevProps.comment.body) {
      this.setState({body: this.props.comment.body})
    }
  }

  updateComment() {
    return e =>
      this.setState({
        body: e.currentTarget.value
      });
  }

  handleEditComment(e) {
    const commentEdit = document.getElementsByClassName("edit-form")[
      this.props.idx
    ];
    const commentSubmit = document.getElementsByClassName(
      "comment-edit-submit"
    )[this.props.idx];
    // able
    if (commentEdit.disabled) {
      commentEdit.disabled = false;
      commentEdit.style.backgroundColor = "lightgrey";
      commentSubmit.style.display = "block";
    }
    // disable
    else {
      commentEdit.disabled = true;
      commentEdit.style.backgroundColor = "transparent";
      commentSubmit.style.display = "none";
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let comment = Object.assign(this.state, { body: this.state.body });
    this.props.patchComment(comment);
    const commentEdit = document.getElementsByClassName("comment-edit-form")[
      this.props.idx
    ];
    const commentSubmit = document.getElementsByClassName(
      "comment-edit-submit"
    )[this.props.idx];
    commentEdit.disabled = true;
    commentEdit.style.backgroundColor = "transparent";
    commentSubmit.style.display = "none";
  }

  editTitleForm() {
    return (
      <form className="comment-edit-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          className="edit-form"
          value={this.state.body}
          onChange={this.updateComment()}
          disabled
          style={{outline: "none", border: "none"}}
        />
        <input
          type="submit"
          name="comment-body"
          value="SAVE COMMENT"
          className="comment-edit-submit"
          style={{display: "none"}}
        />
      </form>
    );
  }

  render() {
    const deleteComment =
      this.props.currentUserId === this.props.comment.userId ? (
        <strong
          className="delete-comment"
          onClick={() => this.props.destroyComment(this.props.comment.id)}
        >
          <div className="fa">
            <i className="far fa-times-circle"></i>
          </div>
        </strong>
      ) : null;

    const editComment =
      this.props.currentUserId === this.props.comment.userId ? (
        <strong
          className="edit-comment"
          onClick={e => this.handleEditComment(e)}
        >
          <div className="fa">
            <i className="fas fa-edit"></i>
          </div>
        </strong>
      ) : null;
    return (
      <li className="comment-list-item">
        <div className="comment-title">
          <h1>{this.props.username}</h1>
          <div className="comment-buttons">
            <div className="edit-button">{editComment}</div>
            <div className="delete-button">{deleteComment}</div>
          </div>
        </div>
        <div className="comment-body">{this.editTitleForm()}</div>
      </li>
    );
  }
}

export default CommentIndexItem;