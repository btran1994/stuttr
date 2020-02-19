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

    return (
        <li className="comment-list-item">
            <h1>{username}</h1>
            <p>{comment.body}</p>
        </li>
    )
}

export default CommentIndexItem;