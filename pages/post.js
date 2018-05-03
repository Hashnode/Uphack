import Link from 'next/link'
import Nav from '../components/nav'

export default () => (
  <div>
    <Nav />
    <div class="post-list">
        <div class="container">
            <div class="single-post">
                <div class="d-flex flex-row align-items-top">
                    <div class="upvote-wrap">
                        <button class="upvote-btn">
                            <i class="mdi-arrow-outline-up"></i>
                        </button>
                    </div>
                    <div class="content">
                        <div class="title d-flex flex-row align-items-end">
                            <h3>
                                <a href="#">Apple Sued an Independent iPhone Repair Shop Owner and Lost</a>
                            </h3>
                            <span class="domain">(
                                <a href="#">cnn.com</a>)</span>
                        </div>
                        <div class="meta">
                            <ul class="list-inline">
                                <li class="list-inline-item">
                                    <p>$786.98
                                        <span class="pipe">|</span> 34 points</p>
                                </li>
                                <li class="list-inline-item">
                                    <p>by
                                        <a href="#">fazlerocks</a>
                                    </p>
                                </li>
                                <li class="list-inline-item">
                                    <p>
                                        <a href="#">1 hour ago</a>
                                    </p>
                                </li>
                                <li class="list-inline-item">
                                    |
                                </li>
                                <li class="list-inline-item">
                                    <p>
                                        <a href="#">flag</a>
                                    </p>
                                </li>
                                <li class="list-inline-item">
                                    <p>
                                        <a href="#">save</a>
                                    </p>
                                </li>
                                <li class="list-inline-item">
                                    <p>
                                        <a href="#">35 comments</a>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="write-comment">
                <textarea placeholder="Write your comment…"></textarea>
                <button class="btn btn-sm btn-primary">Add comment</button>
            </div>
            <div class="comments-list">
                <div class="single-comment">
                    <div class="d-flex flex-row align-items-top">
                        <div class="upvote-wrap">
                            <button class="upvote-btn">
                                <i class="mdi-arrow-outline-up"></i>
                            </button>
                        </div>
                        <div class="comment-content">
                            <ul class="list-inline meta">
                                <li class="list-inline-item">
                                    <p><a href="#">fazlerocks</a></p>
                                </li>
                                <li class="list-inline-item">
                                    <p>$334 <span class="pipe">|</span> 15 points</p>
                                </li>
                                <li class="list-inline-item">
                                    <p><a href="#">[-]</a></p>
                                </li>
                            </ul>
                            <div class="comment-data">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque, risus auctor tempus lacinia, dolor leo pretium ligula, sit amet posuere eros odio vitae ipsum. Aliquam mattis sed justo et hendrerit. Morbi sollicitudin eget libero vel varius. Fusce dictum placerat semper. Aenean justo diam, viverra et accumsan vel, ornare id ipsum. Morbi luctus ex ut tortor tempor maximus. Aenean luctus sodales dui sed bibendum. Duis nulla nisl, auctor sed ipsum in, cursus sagittis magna. Nulla vitae luctus nisl, eu bibendum risus.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque, risus auctor tempus lacinia, dolor leo pretium ligula, sit amet posuere eros odio vitae ipsum. Aliquam mattis sed justo et hendrerit. Morbi sollicitudin eget libero vel varius. Fusce dictum placerat semper. Aenean justo diam, viverra et accumsan vel, ornare id ipsum. Morbi luctus ex ut tortor tempor maximus. Aenean luctus sodales dui sed bibendum. Duis nulla nisl, auctor sed ipsum in, cursus sagittis magna. Nulla vitae luctus nisl, eu bibendum risus.</p>
                            </div>
                            <div class="single-comment">
                                <div class="d-flex flex-row align-items-top">
                                    <div class="upvote-wrap">
                                        <button class="upvote-btn">
                                            <i class="mdi-arrow-outline-up"></i>
                                        </button>
                                    </div>
                                    <div class="comment-content">
                                        <ul class="list-inline meta">
                                            <li class="list-inline-item">
                                                <p><a href="#">fazlerocks</a></p>
                                            </li>
                                            <li class="list-inline-item">
                                                <p>$334 <span class="pipe">|</span> 15 points</p>
                                            </li>
                                            <li class="list-inline-item">
                                                <p><a href="#">[-]</a></p>
                                            </li>
                                        </ul>
                                        <div class="comment-data">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque, risus auctor tempus lacinia, dolor leo pretium ligula, sit amet posuere eros odio vitae ipsum. Aliquam mattis sed justo et hendrerit. Morbi sollicitudin eget libero vel varius. Fusce dictum placerat semper. Aenean justo diam, viverra et accumsan vel, ornare id ipsum. Morbi luctus ex ut tortor tempor maximus. Aenean luctus sodales dui sed bibendum. Duis nulla nisl, auctor sed ipsum in, cursus sagittis magna. Nulla vitae luctus nisl, eu bibendum risus.</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque, risus auctor tempus lacinia, dolor leo pretium ligula, sit amet posuere eros odio vitae ipsum. Aliquam mattis sed justo et hendrerit. Morbi sollicitudin eget libero vel varius. Fusce dictum placerat semper. Aenean justo diam, viverra et accumsan vel, ornare id ipsum. Morbi luctus ex ut tortor tempor maximus. Aenean luctus sodales dui sed bibendum. Duis nulla nisl, auctor sed ipsum in, cursus sagittis magna. Nulla vitae luctus nisl, eu bibendum risus.</p>
                                        </div>
                                        <div class="single-comment">
                                            <div class="d-flex flex-row align-items-top">
                                                <div class="upvote-wrap">
                                                    <button class="upvote-btn">
                                                        <i class="mdi-arrow-outline-up"></i>
                                                    </button>
                                                </div>
                                                <div class="comment-content">
                                                    <ul class="list-inline meta">
                                                        <li class="list-inline-item">
                                                            <p><a href="#">fazlerocks</a></p>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <p>$334 <span class="pipe">|</span> 15 points</p>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <p><a href="#">[-]</a></p>
                                                        </li>
                                                    </ul>
                                                    <div class="comment-data">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque, risus auctor tempus lacinia, dolor leo pretium ligula, sit amet posuere eros odio vitae ipsum. Aliquam mattis sed justo et hendrerit. Morbi sollicitudin eget libero vel varius. Fusce dictum placerat semper. Aenean justo diam, viverra et accumsan vel, ornare id ipsum. Morbi luctus ex ut tortor tempor maximus. Aenean luctus sodales dui sed bibendum. Duis nulla nisl, auctor sed ipsum in, cursus sagittis magna. Nulla vitae luctus nisl, eu bibendum risus.</p>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque, risus auctor tempus lacinia, dolor leo pretium ligula, sit amet posuere eros odio vitae ipsum. Aliquam mattis sed justo et hendrerit. Morbi sollicitudin eget libero vel varius. Fusce dictum placerat semper. Aenean justo diam, viverra et accumsan vel, ornare id ipsum. Morbi luctus ex ut tortor tempor maximus. Aenean luctus sodales dui sed bibendum. Duis nulla nisl, auctor sed ipsum in, cursus sagittis magna. Nulla vitae luctus nisl, eu bibendum risus.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="single-comment">
                                            <div class="d-flex flex-row align-items-top">
                                                <div class="upvote-wrap">
                                                    <button class="upvote-btn">
                                                        <i class="mdi-arrow-outline-up"></i>
                                                    </button>
                                                </div>
                                                <div class="comment-content">
                                                    <ul class="list-inline meta">
                                                        <li class="list-inline-item">
                                                            <p><a href="#">fazlerocks</a></p>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <p>$334 <span class="pipe">|</span> 15 points</p>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <p><a href="#">[-]</a></p>
                                                        </li>
                                                    </ul>
                                                    <div class="comment-data">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque, risus auctor tempus lacinia, dolor leo pretium ligula, sit amet posuere eros odio vitae ipsum. Aliquam mattis sed justo et hendrerit. Morbi sollicitudin eget libero vel varius. Fusce dictum placerat semper. Aenean justo diam, viverra et accumsan vel, ornare id ipsum. Morbi luctus ex ut tortor tempor maximus. Aenean luctus sodales dui sed bibendum. Duis nulla nisl, auctor sed ipsum in, cursus sagittis magna. Nulla vitae luctus nisl, eu bibendum risus.</p>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque, risus auctor tempus lacinia, dolor leo pretium ligula, sit amet posuere eros odio vitae ipsum. Aliquam mattis sed justo et hendrerit. Morbi sollicitudin eget libero vel varius. Fusce dictum placerat semper. Aenean justo diam, viverra et accumsan vel, ornare id ipsum. Morbi luctus ex ut tortor tempor maximus. Aenean luctus sodales dui sed bibendum. Duis nulla nisl, auctor sed ipsum in, cursus sagittis magna. Nulla vitae luctus nisl, eu bibendum risus.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="single-comment">
                    <div class="d-flex flex-row align-items-top">
                        <div class="upvote-wrap">
                            <button class="upvote-btn">
                                <i class="mdi-arrow-outline-up"></i>
                            </button>
                        </div>
                        <div class="comment-content">
                            <ul class="list-inline meta">
                                <li class="list-inline-item">
                                    <p><a href="#">fazlerocks</a></p>
                                </li>
                                <li class="list-inline-item">
                                    <p>$334 <span class="pipe">|</span> 15 points</p>
                                </li>
                                <li class="list-inline-item">
                                    <p><a href="#">[-]</a></p>
                                </li>
                            </ul>
                            <div class="comment-data">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque, risus auctor tempus lacinia, dolor leo pretium ligula, sit amet posuere eros odio vitae ipsum. Aliquam mattis sed justo et hendrerit. Morbi sollicitudin eget libero vel varius. Fusce dictum placerat semper. Aenean justo diam, viverra et accumsan vel, ornare id ipsum. Morbi luctus ex ut tortor tempor maximus. Aenean luctus sodales dui sed bibendum. Duis nulla nisl, auctor sed ipsum in, cursus sagittis magna. Nulla vitae luctus nisl, eu bibendum risus.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque, risus auctor tempus lacinia, dolor leo pretium ligula, sit amet posuere eros odio vitae ipsum. Aliquam mattis sed justo et hendrerit. Morbi sollicitudin eget libero vel varius. Fusce dictum placerat semper. Aenean justo diam, viverra et accumsan vel, ornare id ipsum. Morbi luctus ex ut tortor tempor maximus. Aenean luctus sodales dui sed bibendum. Duis nulla nisl, auctor sed ipsum in, cursus sagittis magna. Nulla vitae luctus nisl, eu bibendum risus.</p>
                            </div>
                            <div class="single-comment">
                                <div class="d-flex flex-row align-items-top">
                                    <div class="upvote-wrap">
                                        <button class="upvote-btn">
                                            <i class="mdi-arrow-outline-up"></i>
                                        </button>
                                    </div>
                                    <div class="comment-content">
                                        <ul class="list-inline meta">
                                            <li class="list-inline-item">
                                                <p><a href="#">fazlerocks</a></p>
                                            </li>
                                            <li class="list-inline-item">
                                                <p>$334 <span class="pipe">|</span> 15 points</p>
                                            </li>
                                            <li class="list-inline-item">
                                                <p><a href="#">[-]</a></p>
                                            </li>
                                        </ul>
                                        <div class="comment-data">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque, risus auctor tempus lacinia, dolor leo pretium ligula, sit amet posuere eros odio vitae ipsum. Aliquam mattis sed justo et hendrerit. Morbi sollicitudin eget libero vel varius. Fusce dictum placerat semper. Aenean justo diam, viverra et accumsan vel, ornare id ipsum. Morbi luctus ex ut tortor tempor maximus. Aenean luctus sodales dui sed bibendum. Duis nulla nisl, auctor sed ipsum in, cursus sagittis magna. Nulla vitae luctus nisl, eu bibendum risus.</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque, risus auctor tempus lacinia, dolor leo pretium ligula, sit amet posuere eros odio vitae ipsum. Aliquam mattis sed justo et hendrerit. Morbi sollicitudin eget libero vel varius. Fusce dictum placerat semper. Aenean justo diam, viverra et accumsan vel, ornare id ipsum. Morbi luctus ex ut tortor tempor maximus. Aenean luctus sodales dui sed bibendum. Duis nulla nisl, auctor sed ipsum in, cursus sagittis magna. Nulla vitae luctus nisl, eu bibendum risus.</p>
                                        </div>
                                        <div class="single-comment">
                                            <div class="d-flex flex-row align-items-top">
                                                <div class="upvote-wrap">
                                                    <button class="upvote-btn">
                                                        <i class="mdi-arrow-outline-up"></i>
                                                    </button>
                                                </div>
                                                <div class="comment-content">
                                                    <ul class="list-inline meta">
                                                        <li class="list-inline-item">
                                                            <p><a href="#">fazlerocks</a></p>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <p>$334 <span class="pipe">|</span> 15 points</p>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <p><a href="#">[-]</a></p>
                                                        </li>
                                                    </ul>
                                                    <div class="comment-data">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque, risus auctor tempus lacinia, dolor leo pretium ligula, sit amet posuere eros odio vitae ipsum. Aliquam mattis sed justo et hendrerit. Morbi sollicitudin eget libero vel varius. Fusce dictum placerat semper. Aenean justo diam, viverra et accumsan vel, ornare id ipsum. Morbi luctus ex ut tortor tempor maximus. Aenean luctus sodales dui sed bibendum. Duis nulla nisl, auctor sed ipsum in, cursus sagittis magna. Nulla vitae luctus nisl, eu bibendum risus.</p>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque, risus auctor tempus lacinia, dolor leo pretium ligula, sit amet posuere eros odio vitae ipsum. Aliquam mattis sed justo et hendrerit. Morbi sollicitudin eget libero vel varius. Fusce dictum placerat semper. Aenean justo diam, viverra et accumsan vel, ornare id ipsum. Morbi luctus ex ut tortor tempor maximus. Aenean luctus sodales dui sed bibendum. Duis nulla nisl, auctor sed ipsum in, cursus sagittis magna. Nulla vitae luctus nisl, eu bibendum risus.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="single-comment">
                                            <div class="d-flex flex-row align-items-top">
                                                <div class="upvote-wrap">
                                                    <button class="upvote-btn">
                                                        <i class="mdi-arrow-outline-up"></i>
                                                    </button>
                                                </div>
                                                <div class="comment-content">
                                                    <ul class="list-inline meta">
                                                        <li class="list-inline-item">
                                                            <p><a href="#">fazlerocks</a></p>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <p>$334 <span class="pipe">|</span> 15 points</p>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <p><a href="#">[-]</a></p>
                                                        </li>
                                                    </ul>
                                                    <div class="comment-data">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque, risus auctor tempus lacinia, dolor leo pretium ligula, sit amet posuere eros odio vitae ipsum. Aliquam mattis sed justo et hendrerit. Morbi sollicitudin eget libero vel varius. Fusce dictum placerat semper. Aenean justo diam, viverra et accumsan vel, ornare id ipsum. Morbi luctus ex ut tortor tempor maximus. Aenean luctus sodales dui sed bibendum. Duis nulla nisl, auctor sed ipsum in, cursus sagittis magna. Nulla vitae luctus nisl, eu bibendum risus.</p>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque, risus auctor tempus lacinia, dolor leo pretium ligula, sit amet posuere eros odio vitae ipsum. Aliquam mattis sed justo et hendrerit. Morbi sollicitudin eget libero vel varius. Fusce dictum placerat semper. Aenean justo diam, viverra et accumsan vel, ornare id ipsum. Morbi luctus ex ut tortor tempor maximus. Aenean luctus sodales dui sed bibendum. Duis nulla nisl, auctor sed ipsum in, cursus sagittis magna. Nulla vitae luctus nisl, eu bibendum risus.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
)
