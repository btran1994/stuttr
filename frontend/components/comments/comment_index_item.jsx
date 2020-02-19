import React from "react";

const CommentIndexItem = props => {
    // console.log(props, 'index item props')
    const {
        comment,
        username,
        currentUserId,
        destroyComment, 
        openModal
    } = props;
    // console.log(currentUserId, "comment stuff")

    const deleteComment = (currentUserId === comment.userId) ? (
        <strong className="delete-comment" onClick={() => destroyComment(comment.id)}>
            <div className="fa">
                <i className="far fa-times-circle"></i>
            </div>
        </strong>
    ) : null;

    const editComment = (currentUserId === comment.userId) ? (
        <strong className="edit-comment" onClick={() => openModal({ type: "editComment", comment: comment })}>
            <div className="fa">
                <i className="fas fa-edit"></i>
            </div>
        </strong>
    ) : null;

    return (
      <li className="comment-list-item">
        <div className="comment-title">
          <h1>{username}</h1>
          <div className="comment-buttons">
            <div className="edit-button">{editComment}</div>
            <div className="delete-button">{deleteComment}</div>
          </div>
        </div>
        <p className="comment-body">{comment.body}</p>
      </li>
    );
}

export default CommentIndexItem;