import React from 'react'
import Nav from '../components/nav'

class About extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                <Nav />
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-7">
                            <div className="page-content">
                                <h1>What is Uphack?</h1>
                                <img className="feat-img" src="/static/images/mint/mint-banner.jpg"/>
                                <p>Uphack is a front-end client that interacts with <a href="#">Mint blockchain</a>. If you wish to roll out your own front-end and interact with the underlying blockchain check out <a href="#">Mint</a>.</p>
                                <h2>Details</h2>
                                <p>We are experimenting with a content storage blockchain called Mint. It was created out of a need for JSON storage on blockchain. Uphack is the first client that interacts with Mint.</p>
                                <blockquote>
                                    <p>Uphack is Hackernews on Blockchain.</p>
                                </blockquote>
                                <p>We created this demo to show how to build blockchain powered social apps easily. This is super early and experimental. The primary reason behind open sourcing the code is to get early feedback and improve the codebase.</p>
                                <h2>Code contributions</h2>
                                <p>Feel free to send PRs to both Uphack and Mint. We are thrilled to see your contributions. :)</p>
                                <h2>Who are we?</h2>
                                <div className="d-flex flex-row flex-wrap profiles-wrap">
                                    <div className="profile-card">
                                        <a href="#" className="profile-photo">
                                            <img src="/static/images/sandeep-panda.jpg"/>
                                        </a>
                                        <h3><a href="#">Sandeep Panda</a></h3>
                                        <p>Sandeep ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque, risus auctor tempus lacinia, dolor leo pretium ligula, sit amet posuere eros odio vitae ipsum.</p>
                                        <ul className="list-unstyled">
                                            <li>
                                                <a href="#">hashnode/sandeep</a>
                                            </li>
                                            <li>
                                                <a href="#">twitter/sandeepg33k</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="profile-card">
                                        <a href="#" className="profile-photo">
                                            <img src="/static/images/syed-fazle-rahman.jpg"/>
                                        </a>
                                        <h3><a href="#">Syed Fazle Rahman</a></h3>
                                        <p>Sandeep ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque, risus auctor tempus lacinia, dolor leo pretium ligula, sit amet posuere eros odio vitae ipsum.</p>
                                        <ul className="list-unstyled">
                                            <li>
                                                <a href="#">hashnode/sandeep</a>
                                            </li>
                                            <li>
                                                <a href="#">twitter/sandeepg33k</a>
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
