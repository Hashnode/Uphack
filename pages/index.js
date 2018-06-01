import Link from 'next/link'
import React from 'react'
import Nav from '../components/nav'
import fetch from 'isomorphic-fetch'
import ajaxUtils from '../utils/ajaxUtils'
import encoding from '../utils/encoding'
import PostPreview from '../components/postpreview'
import Helmet from 'react-helmet'

class Index extends React.Component {

  static async getInitialProps({ req }) {
    const posts = await ajaxUtils.loadPosts(req.path);
    return { posts: posts, path: req.path };
  }
  
  constructor(props, context) {
      super(props, context);
      this.state = { posts: props.posts };
  }

  async componentDidMount() {
      const key = localStorage.getItem('mintPK');
      
      if (!key) {
        return;
      }

      const keyPair = nacl.sign.keyPair.fromSecretKey(encoding.hex2ab(key));
      const publicKey = encoding.toHexString(keyPair.publicKey).toUpperCase();

      const user = await ajaxUtils.loadUser(publicKey);
      this.setState({ user }, () => {
        user && this.getUpvoteStatus();
      });
  }

  getUpvoteStatus = async () => {
      const status = await ajaxUtils.getUpvoteStatus(this.state.user.publicKey, this.state.posts.map((post) => { return post._id }).join(','));
      const posts = this.state.posts.slice(0);
      
      posts.forEach((post) => {
        if (status[post._id]) {
          post.upvotedByCurrentUser = true;
        }
      });
      
      this.setState({ posts: posts });
  }

  upvoteCallback = (postId, status) => {
    const posts = this.state.posts.slice(0);
    for (let i=0; i < posts.length;i++) {
      if (posts[i]._id === postId) {
        posts[i].upvotedByCurrentUser = status;
        posts[i].upvotes += (status ? 1 : -1);
        break;
      }
    }
    this.setState({ posts: posts });
  }

  render() {

    const posts = this.state.posts.map((post) => {
      return (
        <PostPreview post={post} user={this.state.user} key={post._id} upvoteCallback={this.upvoteCallback} />
      )
    });

    return (
      <div>
        <Nav user={this.state.user} path={this.props.path} />
        <Helmet title="Uphack: Decentralized Hackernews" />
        <div className="post-list">
          <div className="container">
            <div className="row">
              <div className="col-md-9">
                <div className="post-list-wrapper">
                  {posts}
                </div>
              </div>
              <div className="col-md-3">
                <div className="widget">
                    <p>Uphack is an experimental news sharing application powered by Mint Blockchain.</p>
                    <ul className="list-unstyled">
                      <li><a href="/about"><i className="mdi mdi-airballoon"></i> About Uphack and Mint</a></li>
                      <li><a href="https://github.com/Hashnode/mint"><i className="mdi mdi-github-circle"></i> hashnode/mint</a></li>
                      <li><a href="https://github.com/Hashnode/Uphack"><i className="mdi mdi-github-circle"></i> hashnode/uphack</a></li>
                    </ul>

                    <ul className="list-unstyled">
                      <li><a href="http://uphack.co:46657/status" target="_blank"><i className="mdi mdi-server"></i> Blockchain Status</a></li>
                    </ul>

                    <h3>Active validators</h3>
                    <ul className="list-unstyled validators">
                      <li><a href="http://46.101.177.19:46657/status" target="_blank" className="d-flex align-items-center"><img src="/static/images/countries/de.png"/>46.101.177.19</a></li>
                      <li><a href="http://206.189.125.145:46657/status" target="_blank" className="d-flex align-items-center"><img src="/static/images/countries/gb.png"/>206.189.125.145</a></li>
                      <li><a href="http://192.241.232.63:46657/status" target="_blank" className="d-flex align-items-center"><img src="/static/images/countries/us.png"/>192.241.232.63</a></li>
                      <li><a href="http://159.203.31.67:46657/status" target="_blank" className="d-flex align-items-center"><img src="/static/images/countries/ca.png"/>159.203.31.67</a></li>
                    </ul>
                </div>
                <div className="widget mint-widget">
                  <a href="https://github.com/Hashnode/mint" target="_blank" className="mint-logo"><img src="/static/images/mint/logo.png"/></a>
                  <p>This app is powered by <a href="https://github.com/Hashnode/mint" target="_blank">mint blockchain</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Index
