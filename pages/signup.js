import Link from 'next/link'
import React from 'react'
import Nav from '../components/nav'
import encoding from '../utils/encoding'
import makeRPC from '../utils/rpcUtils'
import bson from 'bson'

class Signup extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    componentDidMount() {
        let keys = nacl.sign.keyPair();
        let publicKey = encoding.toHexString(keys.publicKey).toUpperCase();
        let secretKey = encoding.toHexString(keys.secretKey).toUpperCase();
        this.publicKey.value = publicKey;
        this.secretKey.value = secretKey;
        window.localStorage.setItem('hashnewsKey', secretKey);
    }

    signup = e => {
        let username = this.username.value,
            name = this.name.value,
            secret = encoding.hex2ab(localStorage.getItem('hashnewsKey')),
            publicKey = nacl.util.encodeBase64(encoding.hex2ab(this.publicKey.value)),
            id = new bson.ObjectID().toString();
        
        let txBody = { 
            type: "createUser",
            entity: {
                id: id,
                username: username,
                name: name,
                publicKey: this.publicKey.value
            } 
        }

        makeRPC(txBody, publicKey, secret, function(){
            window.location.href = '/';
        });
    }

    render() {
        return (
            <div>
                <Nav />
                <div className="post-list">
                    <div className="container">
                        <div className="ask-wrapper">
                            <div className="single-field d-flex flex-row align-items-center">
                                <div className="label">
                                    user name
                                </div>
                                <div className="input-wrapper">
                                    <input type="text" ref={ c => { this.username = c }} />
                                </div>
                            </div>
                            <div className="single-field d-flex flex-row align-items-center">
                                <div className="label">
                                    name
                                </div>
                                <div className="input-wrapper">
                                    <input type="text" ref={ c => { this.name = c }} />
                                </div>
                            </div>
                            <div className="single-field d-flex flex-row align-items-center">
                                <div className="label">
                                    Public Key
                                </div>
                                <div className="input-wrapper">
                                    <input type="text" readOnly defaultValue={this.state.publicKey} ref={ c => { this.publicKey = c }} />
                                </div>
                            </div>
                            <div className="single-field d-flex flex-row align-items-center">
                                <div className="label">
                                    Private Key
                                </div>
                                <div className="input-wrapper">
                                    <input type="text" readOnly defaultValue={this.state.secretKey} ref={ c => { this.secretKey = c }}  />
                                </div>
                            </div>
                            <div className="submit-wrapper">
                                <button className="btn btn-primary" onClick={this.signup}>Sign up</button>
                            </div>
                            <div className="side-note">
                                <p>Please copy your private key and keep it safe. If you lose this, you can't recover your account</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signup;
