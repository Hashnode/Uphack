import Head from './head'
import React from 'react'
import Link from 'next/link'

const links = [
  { href: 'https://github.com/segmentio/create-next-app', label: 'Github' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

class Nav extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    render() {
        return (
            <header>
                <div className="container">
                    <div className="d-flex flex-row justify-content-between align-items-center">
                        <div className="d-flex flex-row align-items-center">
                            <h1 className="site-title">
                                <a href="/">Hashnews</a>
                            </h1>
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <a href="/" className="active">Popular</a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="/">New</a>
                                </li>
                                {/* <li className="list-inline-item">
                                    <a href="/">Comments</a>
                                </li> */}
                                <li className="list-inline-item">
                                    <a href="/">Show</a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="/">Ask</a>
                                </li>
                                {/* <li className="list-inline-item">
                                    <a href="/">Saved</a>
                                </li> */}
                                {/* <li className="list-inline-item">
                                    <a href="/">Jobs</a>
                                </li> */}
                                <li className="list-inline-item">
                                    |
                                </li>
                                <li className="list-inline-item">
                                    <a href="/submit">Submit</a>
                                </li>
                            </ul>
                        </div>
                        <div className="d-flex flex-row align-items-center">
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <a href="/" className="d-flex flex-row align-items-center"><i className="mdi-search"></i><span>Search</span></a>
                                </li>
                                {!this.props.user && <li className="list-inline-item">
                                    <a href="/signup" className="d-flex flex-row align-items-center"><i className="mdi-user-solid-circle"></i><span>Login / Register</span></a>
                                </li>}
                                {this.props.user && <li className="list-inline-item">
                                    <a href="/" className="d-flex flex-row align-items-center">{this.props.user.username}</a>
                                </li>}
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Nav
