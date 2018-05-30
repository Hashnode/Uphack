import React from 'react'
import Upvote from './upvote'
import moment from 'moment'

class PostPreview extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
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
        const post = this.props.post;
        return (
            <div className="single-post">
                <div className="d-flex flex-row align-items-top">
                    <div className="upvote-wrap">
                        <Upvote post={post} user={this.props.user} upvoteCallback={this.props.upvoteCallback} />
                    </div>
                    <div className="content">
                        <div className="title d-flex flex-row align-items-end">
                            <h3><a href={post.url} target="_blank">{post.title}</a></h3>
                            {post.url && <span className="domain">(<a href={post.url} target="_blank">{this.extractHostname(post.url)}</a>)</span>}
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
                                    <p><a href={"/post?id=" + post._id}>{moment(post.date).fromNow()}</a></p>
                                </li>
                                <li className="list-inline-item">
                                    |
                                    </li>
                                {/* <li className="list-inline-item">
                                    <p><a href="#">flag</a></p>
                                </li>
                                <li className="list-inline-item">
                                    <p><a href="#">save</a></p>
                                </li> */}
                                <li className="list-inline-item">
                                    <p>
                                        <a href={"/post?id=" + post._id} className="action">discuss</a>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostPreview