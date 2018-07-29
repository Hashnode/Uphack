import Link from 'next/link'
import React from 'react'
import Nav from '../components/nav'
import encoding from '../utils/encoding'
import makeRPC from '../utils/rpcUtils'
import ajaxUtils from '../utils/ajaxUtils'
import UpvoteValidator from '../components/upvotevalidator'
import bson from 'bson'
import Helmet from 'react-helmet'

class Validators extends React.Component {

  static async getInitialProps({ req }) {
      const id = req.query.id;
      const data = await ajaxUtils.getValidators();
      return {
        active: data.active,
        standby: data.standby
      };
  }

  constructor(props, context) {
      super(props, context);
      this.state = {
        active: props.active,
        standby: props.standby
     };
  }

    async componentDidMount() {
      const key = localStorage.getItem('mintPK');

      if (!key) {
        return;
      }

      const keyPair = nacl.sign.keyPair.fromSecretKey(encoding.hex2ab(key));
      const publicKey = encoding.toHexString(keyPair.publicKey).toUpperCase();

      const user = await ajaxUtils.loadUser(publicKey);
      this.setState({ user });
    }

    upvoteCallback = (validatorId) => {
        // const post = Object.assign({}, this.state.post);
        // post.upvotedByCurrentUser = status;
        // post.upvotes += (status ? 1 : -1);
        // this.setState({ post: post });
    }

    showLoginPrompt = e => {
        e.preventDefault();
        const pk = prompt("Please enter your private key");
        if (!pk) {
            return;
        }
        window.localStorage.setItem("mintPK", pk);
        window.location.href = "/";
    }

    render() {
    //   var createSquareFuncWithAdjustment = function(adjustment) {
    // return function(x) { return (x * x) + adjustment; };
    //   };

      const active = this.state.active.map((validator, index) => {
        return (
          // <PostPreview post={post} user={this.state.user} key={post._id} upvoteCallback={this.upvoteCallback} />
          <tr>
            <td>
              <div className="upvote-wrap">
                <UpvoteValidator validator={validator} user={this.state.user} upvoteCallback={this.upvoteCallback} />
              </div>
            </td>
            <td align="center">{validator.rank}</td>
            <td align="center">{validator._id}</td>
            <td><strong>{validator.name}</strong></td>
            <td>{validator.votes}</td>
          </tr>
        )
      });
      // const rank = active.length
      const standby = this.state.standby.map((validator, index) => {
        return (
          // rank += 1
          // <PostPreview post={post} user={this.state.user} key={post._id} upvoteCallback={this.upvoteCallback} />
          <tr>
            <td>
              <div className="upvote-wrap">
                <UpvoteValidator validator={validator} user={this.state.user} upvoteCallback={this.upvoteCallback} />
              </div>
            </td>
            <td align="center">{validator.rank}</td>
            <td align="center">{validator._id}</td>
            <td><strong>{validator.name}</strong></td>
            <td>{validator.votes}</td>
          </tr>
        )
      });
        return (
          <div>
              <Nav user={this.state.user} />
              <Helmet title="Share a news or start a discussion" />
              <div className="post-list">
                  <div className="container">
                    <h3>Active validators:</h3>
                      <div className="ask-wrapper">
                        <table>
                          <thead>
                            <tr>
                              <th></th>
                              <th>Rank</th>
                              <th>Address</th>
                              <th>Witness</th>
                              <th>Votes</th>
                            </tr>
                          </thead>
                            <tbody>
                              {active}
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>

                <div className="post-list">
                    <div className="container">
                      <h3>Standby validators:</h3>
                        <div className="ask-wrapper">
                          <table>
                            <thead>
                              <tr>
                                <th></th>
                                <th>Rank</th>
                                <th>Address</th>
                                <th>Witness</th>
                                <th>Votes</th>
                              </tr>
                            </thead>
                              <tbody>
                                {standby}
                              </tbody>
                          </table>
                          </div>
                      </div>
                  </div>
        </div>

        )
    }
}

export default Validators;
