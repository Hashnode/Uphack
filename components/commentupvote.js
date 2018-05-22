import React from 'react'
import makeRPC from '../utils/rpcUtils'
import encoding from '../utils/encoding'

class CommentUpvote extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    upvote = () => {
        const secret = encoding.hex2ab(localStorage.getItem('hashnewsKey'));
        const publicKey = nacl.util.encodeBase64(nacl.sign.keyPair.fromSecretKey(secret).publicKey);      

        let txBody = { 
            type: "upvoteComment",
            entity: {
                stamp: new Date().getTime(),
                commentId: this.props.comment._id,
                upvoter: this.props.user._id
            }
        }

        makeRPC(txBody, publicKey, secret);

        this.props.upvoteCallback(this.props.comment._id, !this.props.comment.upvotedByCurrentUser);
    }

    render() {
        return (
            <button className={"upvote-btn " + (this.props.comment.upvotedByCurrentUser ? 'active' : '')} onClick={this.upvote}>
                <i className="mdi-arrow-outline-up"></i>
            </button>
        )
    }
}

export default CommentUpvote