import Link from 'next/link'
import React from 'react'
import Nav from '../components/nav'
import WriteComment from '../components/writecomment'
import Upvote from '../components/upvote'
import ajaxUtils from '../utils/ajaxUtils'
import encoding from '../utils/encoding'
import CommentList from '../components/commentlist'
import moment from 'moment'
import Helmet from 'react-helmet'

class Post extends React.Component {

    static async getInitialProps({ req }) {
        const id = req.query.id;
        const post = await ajaxUtils.getPost(id);
        return { post };
    }

    constructor(props, context) {
        super(props, context);
        this.state = { post: props.post };
    }

    async componentDidMount() {
        const hashnewsKey = localStorage.getItem('hashnewsKey');
      
        if (!hashnewsKey) {
            return;
        }

        const secret = encoding.hex2ab(hashnewsKey);
        const publicKey = encoding.toHexString(nacl.sign.keyPair.fromSecretKey(secret).publicKey).toUpperCase();
        const user = await ajaxUtils.loadUser(publicKey);
        this.setState({ user }, () => {
            if (user) {
                this.getPostUpvoteStatus();
                this.getCommentUpvoteStatus();
            }
        });
    }

    extractHostname(url) {

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

    upvoteCallback = (postId, status) => {
        const post = Object.assign({}, this.state.post);
        post.upvotedByCurrentUser = status;
        post.upvotes += (status ? 1 : -1);
        this.setState({ post: post });
    }

    commentUpvoteCallback = (commentId, status) => {
        const post = Object.assign({}, this.state.post);

        function setUpvoteStatus(comments) {
            for (let i=0;i<comments.length;i++) {
                if (comments[i]._id === commentId) {
                    comments[i].upvotedByCurrentUser = status;
                    comments[i].upvotes += (status ? 1 : -1);
                    break;
                }
                
                if (Array.isArray(comments[i].comments)) {
                    setUpvoteStatus(comments[i].comments);
                }
            }
        }

        setUpvoteStatus(post.comments);
        this.setState({ post: post });
    }

    getPostUpvoteStatus = async () => {
        const status = await ajaxUtils.getUpvoteStatus(this.state.user.publicKey, this.state.post._id);
        const post = Object.assign({}, this.state.post);
        
        if (status[post._id]) {
            post.upvotedByCurrentUser = true;
        }
        
        this.setState({ post: post });
    }

    getCommentUpvoteStatus = async () => {
        const status = await ajaxUtils.getCommentUpvoteStatus(this.state.user.publicKey, this.flattenComments(this.state.post.comments).map((comment) => { return comment._id }).join(','));
        const post = Object.assign({}, this.state.post);

        function setUpvoteStatus(comments) {
            comments.forEach((comment) => {
                if (status[comment._id]) {
                    comment.upvotedByCurrentUser = true;
                }
                if (Array.isArray(comment.comments)) {
                    setUpvoteStatus(comment.comments);
                }
            });
        }

        setUpvoteStatus(post.comments);
        this.setState({ post: post });
    }

    flattenComments = (comments) => {
        let result = [];
        comments.forEach((comment) => {
            result.push(comment);
            if (Array.isArray(comment.comments)) {
                result = result.concat(this.flattenComments(comment.comments));
            }
        });
        return result;
    }

    newCommentCallback = (comment) => {
        this.state.post.comments.unshift(comment);
        this.setState({ post: this.state.post });
    }

    render() {
        const post = this.state.post;
        return (
            <div>
                <Nav user={this.state.user} />
                <Helmet title={`${post.title} | Uphack`} />
                <div className="post-list">
                    <div className="container">
                        <div className="single-post">
                            <div className="d-flex flex-row align-items-top">
                                <div className="upvote-wrap">
                                    <Upvote post={post} user={this.state.user} upvoteCallback={this.upvoteCallback} />
                                </div>
                                <div className="content">
                                    <div className="title d-flex flex-row align-items-end">
                                        <h3>
                                            <a href={post.url || '/post?id=' + post._id}>{post.title}</a>
                                        </h3>
                                        {post.url && <span className="domain">(<a href={post.url}>{this.extractHostname(post.url)}</a>)</span>}
                                    </div>
                                    <div className="meta">
                                        <ul className="list-inline">
                                            <li className="list-inline-item">
                                                <p>{post.upvotes} point{post.upvotes > 1 ? 's' : ''}</p>
                                            </li>
                                            <li className="list-inline-item">
                                                <p>by <a href="#">{post.author.username}</a></p>
                                            </li>
                                            <li className="list-inline-item">
                                                <p>
                                                    <a href={'/post?id=' + post._id}>{moment(post.date).fromNow()}</a>
                                                </p>
                                            </li>
                                            {/* <li className="list-inline-item">
                                                |
                                            </li>
                                            <li className="list-inline-item">
                                                <p>
                                                    <a href="#">flag</a>
                                                </p>
                                            </li>
                                            <li className="list-inline-item">
                                                <p>
                                                    <a href="#">save</a>
                                                </p>
                                            </li> */}
                                            {post.numComments > 0 &&
                                                <li className="list-inline-item">
                                                    |
                                                </li>
                                            }
                                            {post.numComments > 0 &&
                                                <li className="list-inline-item">
                                                    <p> 
                                                        <a href={"/post?id=" + post._id} className="action">{post.numComments} comment{post.numComments > 1 ? 's' : ''}</a>       
                                                    </p>
                                                </li>
                                            }
                                        </ul>
                                    </div>
                                    {post.text && <p>{post.text}</p>}
                                </div>
                            </div>
                        </div>
                        <WriteComment post={this.state.post} user={this.state.user} newCommentCallback={this.newCommentCallback} />
                        <CommentList post={this.state.post} user={this.state.user} upvoteCallback={this.commentUpvoteCallback} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Post
