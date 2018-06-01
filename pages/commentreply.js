import React from 'react'
import makeRPC from '../utils/rpcUtils'
import encoding from '../utils/encoding'
import bson from 'bson'
import Nav from '../components/nav'
import ajaxUtils from '../utils/ajaxUtils'
import WriteComment from '../components/writecomment'
import moment from 'moment'

class CommentReply extends React.Component {

    static async getInitialProps({ req }) {
        const commentId = req.query.comment;
        const comment = await ajaxUtils.getComment(commentId);
        return { comment };
    }

    constructor(props, context) {
        super(props, context);
        this.state = { comment: props.comment };
    }

    async componentDidMount() {

        const key = localStorage.getItem('mintPK');
      
        if (!key) {
            return;
        }
        
        const secret = encoding.hex2ab(key);
        const publicKey = encoding.toHexString(nacl.sign.keyPair.fromSecretKey(secret).publicKey).toUpperCase();
        const user = await ajaxUtils.loadUser(publicKey);
        this.setState({ user });
    }

    render() {
        const comment = this.state.comment;
        return (
            <div>
                <Nav user={this.state.user} />
                <div className="post-list">
                    <div className="container">
                        <div className="single-post">
                            <div className="d-flex flex-row align-items-top">
                                <div className="upvote-wrap">
                                    {/* <Upvote post={post} user={this.state.user} upvoteCallback={this.upvoteCallback} /> */}
                                </div>
                                <div className="content">
                                    <div className="title d-flex flex-row align-items-end">
                                        <h3>
                                            <a href="#">{comment.content}</a>
                                        </h3>
                                    </div>
                                    <div className="meta">
                                        <ul className="list-inline">
                                            <li className="list-inline-item">
                                                <p>{comment.upvotes} points</p>
                                            </li>
                                            <li className="list-inline-item">
                                                <p>by <a href="#">{comment.author.username}</a>
                                                </p>
                                            </li>
                                            <li className="list-inline-item">
                                                <p>
                                                    <a href="#">{moment(comment.date).fromNow()}</a>
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
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <WriteComment comment={this.state.comment} />
                    </div>
                </div>
            </div>
        )
    }
}

export default CommentReply