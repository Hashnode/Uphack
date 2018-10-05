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

    logout = e => {
        e.preventDefault();
        window.localStorage.removeItem('mintPK');
        window.location.reload();
    }

    render() {
        return (
            <header>
                <div className="container">
                    <div className="d-flex flex-row flex-wrap justify-content-between align-items-center">
                        <div className="d-flex flex-md-row flex-sm-column flex-wrap align-items-center header-left-side">
                            <h1 className="site-title">
                                <a href="/"><img src="/static/images/logo.png"/></a>
                            </h1>
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <a href="/" className={'d-flex align-items-center ' + (this.props.path === '/' ? 'active': '')}><i className="mdi mdi-fire"></i><span>Hot</span></a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="/newest" className={this.props.path === '/newest' ? 'active': ''}>New</a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="/show" className={this.props.path === '/show' ? 'active': ''}>Show</a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="/ask" className={this.props.path === '/ask' ? 'active': ''}>Ask</a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="/submit" className={this.props.path === '/submit' ? 'active': ''}>Submit</a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="/validators" className={this.props.path === '/validators' ? 'active': ''}>Validators</a>
                                </li>
                            </ul>
                        </div>
                        <div className="d-flex flex-row align-items-center header-right-side">
                            <ul className="list-inline">
                                {this.props.user && <li className="list-inline-item">
                                    <a href="#" onClick={this.logout} className="d-flex flex-row align-items-center"><i className="mdi mdi-logout"></i><span>Sign out</span></a>
                                </li>}
                                {!this.props.user && <li className="list-inline-item">
                                    <a href="/signup" className="d-flex flex-row align-items-center"><i className="mdi mdi-account-circle"></i><span>Login / Register</span></a>
                                </li>}
                                {this.props.user && <li className="list-inline-item">
                                    <a href="#" className="d-flex flex-row align-items-center">@{this.props.user.username}</a>
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
