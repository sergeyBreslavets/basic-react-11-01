import React, { Component } from 'react';
import Comment from './Comment';
class CommentsList extends Component {

    render() {
        const { comments } = this.props;
        const comentElements = comments.map((comment, index) => <li key={comment.id}> <Comment comment = {comment} /> </li>);

        return (
            <ol>
                {comentElements}
            </ol>
        )
    }
}

export default CommentsList;