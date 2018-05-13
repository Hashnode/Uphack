import Link from 'next/link'
import React from 'react'
import Nav from '../components/nav'
import fetch from 'isomorphic-fetch'
import ajaxUtils from '../utils/ajaxUtils'
import encoding from '../utils/encoding'

class Index extends React.Component {

  static async getInitialProps() {
    const posts = await ajaxUtils.loadPosts();
    return { posts: posts };
  }
  
  constructor(props, context) {
      super(props, context);
      this.state = { posts: props.posts };
  }

  async componentDidMount() {
      const keyPair = nacl.sign.keyPair.fromSecretKey(encoding.hex2ab(localStorage.getItem('hashnewsKey')));
      const publicKey = encoding.toHexString(keyPair.publicKey).toUpperCase();

      const user = await ajaxUtils.loadUser(publicKey);
      this.setState({ user });
  }

  extractHostname(url) {

    if (!url) {
      return "hashnode.com";
    }

    var hostname;
    //find & remove protocol (http, ftp, etc.) and get hostname

    if (url.indexOf("://") > -1) {
        hostname = url.split('/')[2];
    }
    else {
        hostname = url.split('/')[0];
    }

    //find & remove port number
    hostname = hostname.split(':')[0];
    //find & remove "?"
    hostname = hostname.split('?')[0];

    return hostname;
  }

  render() {

    const posts = this.state.posts.map((post) => {
      return (
        <div className="single-post" key={post._id}>
            <div className="d-flex flex-row align-items-top">
              <div className="upvote-wrap">
                <button className="upvote-btn"><i className="mdi-arrow-outline-up"></i></button>
              </div>
              <div className="content">
                <div className="title d-flex flex-row align-items-end">
                  <h3><a href={post.url} target="_blank">{post.title}</a></h3>
                  <span className="domain">(<a href={post.url} target="_blank">{this.extractHostname(post.url)}</a>)</span>
                </div>
                <div className="meta">
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <p>$22.3 <span className="pipe">|</span> 28 points</p>
                    </li>
                    <li className="list-inline-item">
                      <p>by <a href="#">{post.author || 'Bot'}</a></p>
                    </li>
                    <li className="list-inline-item">
                      <p><a href="#">1 hour ago</a></p>
                    </li>
                    <li className="list-inline-item">
                      |
                                  </li>
                    <li className="list-inline-item">
                      <p><a href="#">flag</a></p>
                    </li>
                    <li className="list-inline-item">
                      <p><a href="#">save</a></p>
                    </li>
                    <li className="list-inline-item">
                      <p><a href="#">discuss</a></p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
      )
    });

    return (
      <div>
        <Nav user={this.state.user} />
        <div className="post-list">
          <div className="container">
            {posts}
          </div>
        </div>
      </div>
    )
  }

}

export default Index
