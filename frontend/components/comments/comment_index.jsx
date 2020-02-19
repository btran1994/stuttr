import React from "react";
import CommentIndexItem from "./comment_index_item";
import { photoComments } from "../../reducers/selectors";
import CommentFormContainer from "./comment_form_container"

class CommentIndex extends React.Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        this.props.fetchComments();
    };

    render() {
        const {
            photo,
            comments,
            openModal,
            currentUserId,
            username,
            destroyComment
        } = this.props;

        const didFetch = comments.length !== 0; //did it fetch comments, use for ternary
        const selected = photoComments( comments, photo.id )
        const form = currentUserId ? <CommentFormContainer photo={photo} /> : null;

        return (
            didFetch ? (
                <div className="comments-container" id="comments-container-id">
                    <h1>Comments <strong>{selected.length}</strong> </h1>
                    {form}
                    <ul className="comments-ul">
                        {
                            selected.map(comment => {
                                return (
                                    <CommentIndexItem
                                        key={comment.id}
                                        comment={comment}
                                        openModal={openModal}
                                        currentUserId={currentUserId}
                                        username={username}
                                        destroyComment={destroyComment} />
                                );
                            })
                        }
                    </ul>
                </div>
            ) : null
        );
    };
};

export default CommentIndex;
