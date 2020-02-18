import React from "react";
import CommentIndexItem from "./comment_index_item";

class CommentIndex extends React.Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        console.log(this.props, "props")
        console.log(this.state, "state")
        // this.props.fetchComments();
    };

    render() {
        return (
            <h1>hello</h1>
        );
    };
};

export default CommentIndex;
