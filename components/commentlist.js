import React from 'react'
import makeRPC from '../utils/rpcUtils'
import encoding from '../utils/encoding'
import bson from 'bson'
import Comment from './comment'

class CommentList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    render() {
        const comments = this.props.post.comments.map((comment) => {
            return (
                <Comment comment={comment} key={comment._id} />
            )
        });

        return (
            <div className="comments-list">
                {comments}
            </div>
        )
    }
}

export default CommentList