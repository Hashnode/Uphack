import React from 'react'
import Nav from '../components/nav'
import ajaxUtils from '../utils/ajaxUtils'
import encoding from '../utils/encoding'
import Helmet from 'react-helmet'

class About extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {}
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

    render() {
        return (
            <div>
                <Nav user={this.state.user} />
                <Helmet title="About Uphack" />
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-md-7">
                            <div className="page-content">
                                <h1>What is Uphack?</h1>
                                <img className="feat-img" src="/static/images/mint/mint-banner-white.jpg"/>
                                <p>Uphack is a blockchain powered social news sharing app similar to <strong>Hacker News but decentralized</strong>. It's an experimental project to showcase the application of <a href="https://github.com/Hashnode/mint" target="_blank">Mint blockchain</a>. Since the blockchain is public, you can create your version of Uphack. <a href="https://github.com/Hashnode/Uphack" target="_blank">Here's</a> how to build your front-end and that interacts with the underlying blockchain.</p>
                                <h2>What is Mint blockchain?</h2>
                                <p><a href="https://github.com/Hashnode/mint" target="_blank">Mint</a> is a Tendermint based blockchain protocol that lets anyone build social apps easily. We created it out of a need for efficient data storage on the blockchain. It provides you with simple boilerplate code for building social communities and gets out of your way quickly.</p>
                                <h2>Why are we building Uphack?</h2>
                                <p>We created Uphack to show how to build a blockchain powered social apps easily. It is super early and experimental. It doesn't have all the features that Hacker News has. Hence, we are open sourcing Uphack and Mint to get early feedback and improve the codebase.</p>
                                <h2>How to become a Uphack validator?</h2>
                                <p>We are running the network with 4 validators of our own. If you wish to play around and become a validator, please check out Mint documentation.</p>
                                <h2>How can I contribute?</h2>
                                <p>Both Uphack and Mint are open source projects. Fork and play around with the tools. If you find any bug or want to add new features, please send PRs to Uphack and Mint repos. We can't wait to see your contributions. :)</p>
                                <h2>Btw, Who's building these?</h2>
                                <p>We are the creators of <a href="https://hashnode.com" target="_blank">Hashnode</a>, the friendly and inclusive dev community. We are currently playing around with the blockchain technology, and are passionate about building and supporting mint blockchain.</p>
                                <p>
                                    <a className="hashnode-logo" href="https://hashnode.com"><img src="/static/images/hashnode-logo-full.jpg"/></a>
                                </p>
                                <h2>Contact us</h2>
                                <p>Email: <a href="mailto:sandeep@hashnode.com">sandeep@hashnode.com</a> / <a href="mailto:mint@hashnode.com">mint@hashnode.com</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About
