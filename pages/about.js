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
        const hashnewsKey = localStorage.getItem('hashnewsKey');
        
        if (!hashnewsKey) {
          return;
        }
  
        const keyPair = nacl.sign.keyPair.fromSecretKey(encoding.hex2ab(hashnewsKey));
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
                        <div className="col-7">
                            <div className="page-content">
                                <h1>What is Uphack?</h1>
                                <img className="feat-img" src="/static/images/mint/mint-banner.jpg"/>
                                <p>Uphack is a front-end client that interacts with <a href="https://github.com/Hashnode/mint">Mint blockchain</a>. If you wish to roll out your own front-end and interact with the underlying blockchain, check out <a href="https://github.com/Hashnode/mint">Mint</a>.</p>
                                <h2>TLDR</h2>
                                <p>We are experimenting with a content-storage blockchain called Mint. It was created out of a need for JSON storage on blockchain. Uphack is the first client that interacts with Mint.</p>
                                <blockquote>
                                    <p>Uphack is Hackernews on Blockchain.</p>
                                </blockquote>
                                <p>We created this demo to show how to build blockchain powered social apps easily. This is super early and experimental. The primary reason behind open sourcing the repo is to get early feedback and improve the codebase.</p>
                                <h2>Become a validator</h2>
                                <p>We are running the network with 4 validators of our own. If you wish to play around and become a validator, please check out <a href="">Mint</a> repo.</p>
                                <h2>Code Contributions</h2>
                                <p>Feedback and contributions are always welcome. Feel free to send PRs to both <a href="https://github.com/Hashnode/Uphack">Uphack</a> and <a href="https://github.com/Hashnode/mint">Mint</a> repos. We can't wait to see your contributions. :)</p>
                                <h2>Who are we?</h2>
                                <div className="d-flex flex-row flex-wrap profiles-wrap">
                                    <div className="profile-card">
                                        <a href="#" className="profile-photo">
                                            <img src="/static/images/sandeep-panda.jpg"/>
                                        </a>
                                        <h3><a href="#">Sandeep Panda</a></h3>
                                        <p>Sandeep is the co-founder of Hashnode and author of the book <a href="https://leanpub.com/smart-contracts">Mastering Smart Contracts</a>.</p>
                                        <ul className="list-unstyled">
                                            <li>
                                                <a href="https://hashnode.com/@sandeep">hashnode/sandeep</a>
                                            </li>
                                            <li>
                                                <a href="https://twitter.com/Sandeepg33k">twitter/sandeepg33k</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="profile-card">
                                        <a href="#" className="profile-photo">
                                            <img src="/static/images/syed-fazle-rahman.jpg"/>
                                        </a>
                                        <h3><a href="#">Syed Fazle Rahman</a></h3>
                                        <p>Syed is the co-founder of Hashnode and a blockchain enthusiast.</p>
                                        <ul className="list-unstyled">
                                            <li>
                                                <a href="https://hashnode.com/@fazlerocks">hashnode/fazlerocks</a>
                                            </li>
                                            <li>
                                                <a href="https://twitter.com/fazlerocks">twitter/fazlerocks</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About
