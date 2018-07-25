import React from 'react'
import makeRPC from '../utils/rpcUtils'
import encoding from '../utils/encoding'

class UpvoteValidator extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    upvote = (validatorId) => {
      if (!this.props.user) {
          window.location.href = '/signup';
          return;
      }

      const secret = encoding.hex2ab(localStorage.getItem('mintPK'));
      const publicKey = nacl.util.encodeBase64(nacl.sign.keyPair.fromSecretKey(secret).publicKey);

      let txBody = {
          type: "upvoteValidator",
          entity: {
              stamp: new Date().getTime(),
              // validator: validatorId,
              user: this.props.user._id,
          }
      }

      console.log("validator "+ validatorId)
      console.log("txBody "+ txBody)
      console.log("txBody "+ JSON.stringify(txBody))
      console.log("publicKey "+ publicKey)
      console.log("secret "+ secret)
      makeRPC(txBody, publicKey, secret);

      // this.props.upvoteCallback(this.props.validator._id, !this.props.validator.upvotedByCurrentUser);
      this.props.upvoteCallback(validatorId);
    }

    render() {
        return (
            // <button className={"upvote-btn " + (this.props.validator.upvotedByCurrentUser ? 'active' : '')} onClick={this.upvote}><i className={"mdi " + (this.props.validator.upvotedByCurrentUser ? 'mdi-arrow-up-drop-circle' : 'mdi-arrow-up-drop-circle-outline')}></i></button>
            <button className={"upvote-btn " + '' } onClick={this.upvote}><i className={"mdi " + (false ? 'mdi-arrow-up-drop-circle' : 'mdi-arrow-up-drop-circle-outline')}></i></button>
        )
    }
}

export default UpvoteValidator
