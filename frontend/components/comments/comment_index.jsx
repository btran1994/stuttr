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
        // console.log(this.props, 'index props')
        // console.log(this.state, 'index state')
        const {
            photo,
            comments,
            openModal,
            currentUserId,
            username,
            destroyComment,
            patchComment,
            pfp
        } = this.props;

        const didFetch = comments.length !== 0; //did it fetch comments, use for ternary
        const selected = photoComments( comments, photo.id )
        const form = currentUserId ? <CommentFormContainer photo={photo} /> : null;

        return (
            didFetch ? (
                <div className="comments-container" id="comments-container-id">
                    <h3 className='comments-list-title'>Comments</h3>
                    <ul className="comments-ul">
                        {
                            selected.map((comment, idx) => {
                                return (
                                    <CommentIndexItem
                                        key={comment.id}
                                        comment={comment}
                                        openModal={openModal}
                                        currentUserId={currentUserId}
                                        username={username}
                                        destroyComment={destroyComment}
                                        idx={idx}
                                        photo={photo}
                                        patchComment={patchComment}
                                        pfp={pfp} />
                                );
                            })
                        }
                    </ul>
                    {form}
                </div>
            ) : <div className="comments-container" id="comments-container-id">
                    <h1 className='comments-list-title'>Comments</h1>
                    {form}
                </div>
        );
    };
};

export default CommentIndex;
