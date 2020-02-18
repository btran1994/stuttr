import React from "react";

const CommentIndexItem = props => {
    const {
        comment,
        currentUserId,
        destroyComment, 
        openModal
    } = props;

    return (
        <li className="comment-list-item">
            <h1>{comment.user.username}</h1>
            <p>{comment.body}</p>
        </li>
    )
}

export default CommentIndexItem;