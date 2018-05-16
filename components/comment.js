import React from 'react'
import makeRPC from '../utils/rpcUtils'
import encoding from '../utils/encoding'

class Comment extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    renderCommentRecursively = (comment) => {
        return (
            <div className="single-comment" key={comment._id}>
                <div className="d-flex flex-row align-items-top">
                    <div className="upvote-wrap">
                        <button className="upvote-btn">
                            <i className="mdi-arrow-outline-up"></i>
                        </button>
                    </div>
                    <div className="comment-content">
                        <ul className="list-inline meta">
                            <li className="list-inline-item">
                                <p><a href="#">fazlerocks</a></p>
                            </li>
                            <li className="list-inline-item">
                                <p>15 points</p>
                            </li>
                            <li className="list-inline-item">
                                <p><a href="#">[-]</a></p>
                            </li>
                        </ul>
                        <div className="comment-data">
                            <p>{comment.content}</p>
                            <p><a href={"/comment-reply?comment=" + comment._id}>reply</a></p>
                        </div>
                        {comment.comments && comment.comments.map((subComment) => { return this.renderCommentRecursively(subComment) })}
                    </div>
                </div>
            </div>
        )
    }

    render() {
        const comment = this.props.comment;
        return (
            <div>
                {this.renderCommentRecursively(comment)}
            </div>
        )
    }
}

export default Comment