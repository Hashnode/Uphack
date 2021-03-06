import React from 'react'
import makeRPC from '../utils/rpcUtils'
import encoding from '../utils/encoding'
import bson from 'bson'

class WriteComment extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    submitComment = () => {

        if (!this.props.user) {
            window.location.href = '/signup';
            return;
        }

        const secret = encoding.hex2ab(localStorage.getItem('mintPK'));
        const publicKey = nacl.util.encodeBase64(nacl.sign.keyPair.fromSecretKey(secret).publicKey);
        const id = new bson.ObjectID().toString();
        const content = this.content.value;

        if (!content || content.trim() === '') {
            return;
        }

        let txBody = { 
            type: "createComment",
            entity: {
                id: id,
                postId: this.props.post._id,
                content: content
            }
        }

        makeRPC(txBody, publicKey, secret, () => {
            this.props.newCommentCallback({
                _id: id,
                postID: this.props.post._id,
                content: content,
                date: new Date(),
                author: this.props.user,
                upvotes: 1,
                upvotedByCurrentUser: true
            });
        });

        this.content.value = '';
    }

    submitSubComment = () => {
        const secret = encoding.hex2ab(localStorage.getItem('mintPK'));
        const publicKey = nacl.util.encodeBase64(nacl.sign.keyPair.fromSecretKey(secret).publicKey);
        const id = new bson.ObjectID().toString();

        let txBody = { 
            type: "createComment",
            entity: {
                id: id,
                parentCommentId: this.props.comment._id,
                postId: this.props.comment.postID,
                content: this.content.value
            }
        }

        makeRPC(txBody, publicKey, secret, () => {
            window.location.href = '/post?id=' + this.props.comment.postID;
        });
    }

    render() {
        return (
            <div className="write-comment">
                <textarea ref={(c) => { this.content = c }} placeholder="Write your comment…"></textarea>
                <button className="btn btn-sm btn-primary" onClick={this.props.post ? this.submitComment: this.submitSubComment}>Add comment</button>
            </div>
        )
    }
}

export default WriteComment