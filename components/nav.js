import Head from './head'
import Link from 'next/link'

const links = [
  { href: 'https://github.com/segmentio/create-next-app', label: 'Github' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <header>
        <div class="container">
            <div class="d-flex flex-row justify-content-between align-items-center">
                <div class="d-flex flex-row align-items-center">
                    <h1 class="site-title">
                        <a href="/">Hashnews</a>
                    </h1>
                    <ul class="list-inline">
                        <li class="list-inline-item">
                            <a href="/" class="active">Popular</a>
                        </li>
                        <li class="list-inline-item">
                            <a href="/">New</a>
                        </li>
                        <li class="list-inline-item">
                            <a href="/">Comments</a>
                        </li>
                        <li class="list-inline-item">
                            <a href="/">Show</a>
                        </li>
                        <li class="list-inline-item">
                            <a href="/">Ask</a>
                        </li>
                        <li class="list-inline-item">
                            <a href="/">Saved</a>
                        </li>
                        <li class="list-inline-item">
                            <a href="/">Jobs</a>
                        </li>
                        <li class="list-inline-item">
                            |
                        </li>
                        <li class="list-inline-item">
                            <a href="/submit">Submit</a>
                        </li>
                    </ul>
                </div>
                <div class="d-flex flex-row align-items-center">
                    <ul class="list-inline">
                        <li class="list-inline-item">
                            <a href="/" class="d-flex flex-row align-items-center"><i class="mdi-search"></i><span>Search</span></a>
                        </li>
                        <li class="list-inline-item">
                            <a href="/" class="d-flex flex-row align-items-center"><i class="mdi-user-solid-circle"></i><span>Login / Register</span></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
)

export default Nav
