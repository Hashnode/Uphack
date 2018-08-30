import Link from 'next/link'
import React from 'react'
import Nav from '../components/nav'
import encoding from '../utils/encoding'
import makeRPC from '../utils/rpcUtils'
import bson from 'bson'
import Helmet from 'react-helmet'
import ajaxUtils from '../utils/ajaxUtils';
import ValidatorUpvote from "../components/validatorupvote";

class Validators extends React.Component {
    static async getInitialProps({ req }) {
      const validators = await ajaxUtils.getValidators();
      return { validators };
    }

    constructor(props, context) {
        super(props, context);
        this.state = { validators: props.validators };
    }

    async componentDidMount() {
      const key = localStorage.getItem('mintPK');

        if (!key) {
            window.location.href = '/signup';
            return;
        }

        const secret = encoding.hex2ab(key);
        const publicKey = encoding.toHexString(nacl.sign.keyPair.fromSecretKey(secret).publicKey).toUpperCase();
        const user = await ajaxUtils.loadUser(publicKey);

        if (!user) {
            window.location.href = '/signup';
            return;
        }

        this.setState({ user });
    }

    upvoteValidator = (vid) => {
      const secret = encoding.hex2ab(localStorage.getItem('mintPK')),
          publicKey = nacl.util.encodeBase64(nacl.sign.keyPair.fromSecretKey(secret).publicKey);
      const txBody = {
        type: "upvoteValidator",
        entity: {
          validatorID: vid,
          stamp: new Date().getTime(),
        }
      };
      makeRPC(txBody, publicKey, secret, async () => {
        const validators = await ajaxUtils.getValidators();
        this.setState({ validators: validators });
      });
    }

    render() {
        return (
            <div>
                <Nav user={this.state.user} />
                <Helmet title="Validators" />
                <div className="post-list">
                  <div className="container">
                      {this.state.validators.map(v =>
                        <div className="single-post" key={v._id}>
                          <div className="d-flex flex-row align-items-top">
                            <div className="upvote-wrap">
                              <ValidatorUpvote upvote={() => this.upvoteValidator(v._id)} />
                            </div>
                            <div>
                              <p>Public Key: {v.pubKey}</p>
                              <p>Power: {v.power}</p>
                            </div>
                          </div>
                        </div>
                      )}
                  </div>
                </div>
            </div>
        )
    }
}

export default Validators;
