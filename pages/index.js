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
      const hashnewsKey = localStorage.getItem('hashnewsKey');
      
      if (!hashnewsKey) {
        return;
      }

      const keyPair = nacl.sign.keyPair.fromSecretKey(encoding.hex2ab(hashnewsKey));
      const publicKey = encoding.toHexString(keyPair.publicKey).toUpperCase();

      const user = await ajaxUtils.loadUser(publicKey);
      this.setState({ user }, () => {
        this.getUpvoteStatus();
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
              <div className="col-9">
                {posts}
              </div>
              <div className="col-3">
                <div className="widget">
                    <p><a href="/">Uphack</a> is a news sharing application which is running on the Mint Blockchain</p>
                    <ul className="list-unstyled">
                      <li><a href="#">How Uphack works?</a></li>
                      <li><a href="#">Mint Blockchan (Github <i className="mdi mdi-github-circle"></i>)</a></li>
                    </ul>
                    <h3>Active validators</h3>
                    <ul className="list-unstyled validators">
                      <li><a href="#" className="d-flex align-items-center"><img src="/static/images/countries/us.png"/>12.23.44.11</a></li>
                      <li><a href="#" className="d-flex align-items-center"><img src="/static/images/countries/cn.png"/>34.22.09.23</a></li>
                      <li><a href="#" className="d-flex align-items-center"><img src="/static/images/countries/fr.png"/>12.23.44.11</a></li>
                      <li><a href="#" className="d-flex align-items-center"><img src="/static/images/countries/na.png"/>34.22.09.23</a></li>
                      <li><a href="#" className="d-flex align-items-center"><img src="/static/images/countries/nu.png"/>12.23.44.11</a></li>
                      <li><a href="#" className="d-flex align-items-center"><img src="/static/images/countries/rw.png"/>34.22.09.23</a></li>
                    </ul>
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
