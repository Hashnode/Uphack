import React from 'react'
import makeRPC from '../utils/rpcUtils'
import encoding from '../utils/encoding'

class Upvote extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    upvote = () => {
        if (!this.props.user) {
            window.location.href = '/signup';
            return;
        }

        const secret = encoding.hex2ab(localStorage.getItem('hashnewsKey'));
        const publicKey = nacl.util.encodeBase64(nacl.sign.keyPair.fromSecretKey(secret).publicKey);      

        let txBody = { 
            type: "upvotePost",
            entity: {
                stamp: new Date().getTime(),
                postId: this.props.post._id
            }
        }

        makeRPC(txBody, publicKey, secret);

        this.props.upvoteCallback(this.props.post._id, !this.props.post.upvotedByCurrentUser);
    }

    render() {
        return (
            <button className={"upvote-btn " + (this.props.post.upvotedByCurrentUser ? 'active' : '')} onClick={this.upvote}><i className={"mdi " + (this.props.post.upvotedByCurrentUser ? 'mdi-arrow-up-drop-circle' : 'mdi-arrow-up-drop-circle-outline')}></i></button>
        )
    }
}

export default Upvote