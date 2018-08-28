import React from 'react'
import makeRPC from '../utils/rpcUtils'
import encoding from '../utils/encoding'

class ValidatorUpvote extends React.Component {
    render() {
        return (
            <button className="upvote-btn" onClick={this.props.upvote}>
                <i className={"mdi mdi-arrow-up-drop-circle-outline"}></i>
            </button>
        )
    }
}

export default ValidatorUpvote