import React from 'react'
import makeRPC from '../utils/rpcUtils'
import encoding from '../utils/encoding'
import CommentUpvote from '../components/commentupvote'

class Comment extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    renderCommentRecursively = (comment, user) => {
        return (
            <div className="single-comment" key={comment._id}>
                <div className="d-flex flex-row align-items-top">
                    <div className="upvote-wrap">
                        <CommentUpvote comment={comment} user={user} upvoteCallback={this.props.upvoteCallback} />
                    </div>
                    <div className="comment-content">
                        <ul className="list-inline meta">
                            <li className="list-inline-item">
                                <p><a href="#">{comment.author.username}</a></p>
                            </li>
                            {comment.upvotes > 0 && <li className="list-inline-item">
                                <p>{comment.upvotes} point{comment.upvotes > 1 ? 's' : ''}</p>
                            </li>}
                            {/* <li className="list-inline-item">
                                <p><a href="#">[-]</a></p>
                            </li> */}
                        </ul>
                        <div className="comment-data">
                            <p>{comment.content}</p>
                            <p><a href={"/comment-reply?comment=" + comment._id}>reply</a></p>
                        </div>
                        {comment.comments && comment.comments.map((subComment) => { return this.renderCommentRecursively(subComment, user) })}
                    </div>
                </div>
            </div>
        )
    }

    render() {
        const comment = this.props.comment;
        const user = this.props.user;
        return (
            <div>
                {this.renderCommentRecursively(comment, user)}
            </div>
        )
    }
}

export default Comment