import React from 'react'
import makeRPC from '../utils/rpcUtils'
import encoding from '../utils/encoding'
import bson from 'bson'

class WriteComment extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    submitComment = () => {
        const secret = encoding.hex2ab(localStorage.getItem('hashnewsKey'));
        const publicKey = nacl.util.encodeBase64(nacl.sign.keyPair.fromSecretKey(secret).publicKey);
        const id = new bson.ObjectID().toString();

        let txBody = { 
            type: "createComment",
            entity: {
                id: id,
                postId: this.props.post._id,
                content: this.content.value
            }
        }

        makeRPC(txBody, publicKey, secret);

        this.content.value = '';
    }

    submitSubComment = () => {
        const secret = encoding.hex2ab(localStorage.getItem('hashnewsKey'));
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