import { React } from "react"

export default function PostDetail() {
    return (
        <>
      <div className="wrapper-content">
  {/* Component Header */}
  <header id="header">
    <div className="tcl-container">
      <div className="tcl-row tcl-no-gutters header">
        <div className="tcl-col-2">
          {/* Logo */}
          <div className="header-logo">
            <a href="/">
              {/* <img src="assets/images/logo.png" alt="Go to homepage" /> */}
            </a>
          </div>
        </div>
        <div className="tcl-col-4">
          {/* Header Search */}
          <form action="/search.html" method="get">
            <div className="header-search">
              <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{flexShrink: 0}}>
                <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z">
                </path>
              </svg>
              <input className="header-search__input" type="text" placeholder="Search articles here ..." aria-label="Search" name="query" />
            </div>
          </form>
        </div>
        <div className="tcl-col-6">
          {/* Nav */}
          <div className="header-nav">
            <ul className="header-nav__lists">
              <li><a href="#">Home</a></li>
              <li>
                <a href="#">Our Team</a>
                <ul>
                  <li><a href="#">Our Team 1</a></li>
                  <li><a href="#">Our Team 2</a></li>
                  <li><a href="#">Our Team 3</a></li>
                </ul>
              </li>
              <li>
                <a href="#">Contact</a>
                <ul>
                  <li><a href="#">Contact 1</a></li>
                  <li><a href="#">Contact 2</a></li>
                  <li>
                    <a href="#">Contact 3</a>
                    <ul>
                      <li><a href="#">Contact 11</a></li>
                      <li><a href="#">Contact 12</a></li>
                      <li><a href="#">Contact 13</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="header-nav__lists">
              <li className="user"><a href="login.html"><i className="icons ion-person" /> Tài khoản</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
  <main className="post-detail">
    <div className="spacing" />
    {/* Post Detail Head */}
    <div className="post-detail__head">
      <div className="tcl-container">
        <h1 className="post-detail__title">Lorem Ipsum is simply dummy text of the printing and typesetting industry</h1>
        <ul className="post-detail__info">
          <li className="item author">
            By <a href="#"><strong>John Smith</strong></a>
          </li>
          <li className="item date">
            May 15, 2021
          </li>
          <li className="item views">
            2 <i className="icons ion-ios-eye" />
          </li>
          <li className="item comments">
            20 <i className="icons ion-ios-chatbubble" />
          </li>
        </ul>
      </div>
    </div>
    {/* End Post Detail Head */}
    <div className="spacing" />
    {/* Post Detail Wrapper Content */}
    <div className="post-detail__fluid">
      <div className="tcl-container">
        <div className="post-detail__wrapper">
          {/* Post Detail Content */}
          <div className="post-detail__content">
            <div className="thumbnail">
              <img src="/assets/images/blog-detail.jpg" alt="blog-title" />
            </div>
            <div className="content-padding">
              {/* Post Detail rich text editor */}
              <div className="rte">
                <p>Markdown is a lightweight markup language with plain-text-formatting syntax. Its design allows it to be converted to many output formats, but the original tool by the same name only supports HTML. Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.</p>
                <h2>Emphasis</h2>
                <p>Emphasis, aka <i>italics</i>, with asterisks or <u>underscores</u>.</p>
                <p>Strong emphasis, aka bold, with <strong>asterisks</strong> or <strong>underscores</strong>.</p>
                <p>Strikethrough uses two tildes. <del>Scratch this</del>.</p>
                <h2>Code and Syntax Highlighting</h2>
                <p>Inline <code>code</code> has <code>back-ticks around</code> it.</p>
                <p>Blocks of code are either fenced by lines with three back-ticks ```, or are indented with four spaces. I recommend only using the fenced code blocks — they’re easier and only they support syntax highlighting.</p>
                <pre><code className="language-javascript">var args = []; // Empty array, at first.{"\n"}for (var i = 0; i &lt; arguments.length; i++) {"{"}{"\n"}{"  "}args.push(arguments[i]){"\n"}{"}"} // Now 'args' is an array that holds your arguments.{"\n"}console.log(args);</code></pre>
                <h2>Blockquote</h2>
                <blockquote>
                  Blockquotes are very handy in email to emulate reply text.
                  This line is part of the same quote.
                </blockquote>
                <h2>List</h2>
                <ol>
                  <li>First ordered list item</li>
                  <li>Another list item
                    <ul>
                      <li>Unordered sub-list.</li>
                    </ul>
                  </li>
                  <li>Actual numbers don’t matter, just that it’s a number
                    <ol>
                      <li>Ordered sub-list</li>
                    </ol>
                  </li>
                </ol>
              </div> 
              {/* End Post Detail rich text editor */}
              {/* Post Detail Tags */}
              <div className="post-detail__tags">
                <h2>Tags</h2>
                <ul>
                  <li className="item"><a href="#" className="btn btn-default">HTML</a></li>
                  <li className="item"><a href="#" className="btn btn-default">CSS3</a></li>
                  <li className="item"><a href="#" className="btn btn-default">React</a></li>
                  <li className="item"><a href="#" className="btn btn-default">Vue</a></li>
                </ul>
              </div>
              {/* End Post Detail Tags */}
              {/* Post Detail Comments */}
              <div className="post-detail__comments">
                <div className="comments__form">
                  <div className="comments__form--control">
                    <div className="comments__section--avatar">
                      <a href="#">
                        <img src="./assets/images/avatar1.jpg" alt="" />
                      </a>
                    </div>
                    <textarea name defaultValue={""} />
                  </div>
                  <div className="text-right">
                    <button className="btn btn-default">Submit</button>
                  </div>
                </div>
                <p>20 Comments</p>
                <ul className="comments">
                  {/* Comment 1 */}
                  <li className="item">
                    <div className="comments__section">
                      <div className="comments__section--avatar">
                        <a href="#">
                          <img src="./assets/images/avatar1.jpg" alt="" />
                        </a>
                      </div>
                      <div className="comments__section--content">
                        <a href="#" className="comments__section--user">John Smith</a>
                        <p className="comments__section--time">2 minutes ago</p>
                        <p className="comments__section--text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt sequi odit exercitationem maiores, iusto unde quibusdam! Ullam nisi iste reprehenderit, expedita nam ad. Nisi hic at voluptate sint incidunt aut?</p>
                        {/* <i class="ion-reply comments__section--reply"></i> */}
                      </div>
                    </div>
                    {/* Reply Comments */}
                    <ul className="comments">
                      <li className="item">
                        <div className="comments__section">
                          <div className="comments__section--avatar">
                            <a href="#">
                              <img src="./assets/images/avatar3.jpg" alt="" />
                            </a>
                          </div>
                          <div className="comments__section--content">
                            <a href="#" className="comments__section--user">John Smith</a>
                            <p className="comments__section--time">2 minutes ago</p>
                            <p className="comments__section--text">Lorem ipsum dolor sit, amet consectetur adipisicing elit?</p>
                            {/* <i class="ion-reply comments__section--reply"></i> */}
                          </div>
                        </div>
                      </li>
                      <li className="item">
                        <div className="comments__section">
                          <div className="comments__section--avatar">
                            <a href="#">
                              <img src="./assets/images/avatar4.jpg" alt="" />
                            </a>
                          </div>
                          <div className="comments__section--content">
                            <a href="#" className="comments__section--user">John Smith</a>
                            <p className="comments__section--time">2 minutes ago</p>
                            <p className="comments__section--text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt sequi odit exercitationem ma?</p>
                            {/* <i class="ion-reply comments__section--reply"></i> */}
                          </div>
                        </div>
                      </li>
                    </ul>
                    {/* Reply form */}
                    <div className="comments__form">
                      <div className="comments__form--control">
                        <div className="comments__section--avatar">
                          <a href="#">
                            <img src="./assets/images/avatar1.jpg" alt="" />
                          </a>
                        </div>
                        <textarea name defaultValue={""} />
                      </div>
                      <div className="text-right">
                        <button className="btn btn-default">Submit</button>
                      </div>
                    </div>
                  </li>
                  {/* Comment 2 */}
                  <li className="item">
                    <div className="comments__section">
                      <div className="comments__section--avatar">
                        <a href="#">
                          <img src="./assets/images/avatar2.jpg" alt="" />
                        </a>
                      </div>
                      <div className="comments__section--content">
                        <a href="#" className="comments__section--user">John Smith</a>
                        <p className="comments__section--time">2 minutes ago</p>
                        <p className="comments__section--text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt sequi odit exercitationem maiores?</p>
                        {/* <i class="ion-reply comments__section--reply"></i> */}
                      </div>
                    </div>
                    <div className="comments__hidden">
                      <a href="#"><i className="icons ion-ios-undo" /> Xem thêm 2 câu trả lời</a>
                    </div>
                  </li>
                  {/* Comment 3 */}
                  <li className="item">
                    <div className="comments__section">
                      <div className="comments__section--avatar">
                        <a href="#">
                          <img src="./assets/images/avatar3.jpg" alt="" />
                        </a>
                      </div>
                      <div className="comments__section--content">
                        <a href="#" className="comments__section--user">John Smith</a>
                        <p className="comments__section--time">2 minutes ago</p>
                        <p className="comments__section--text">Lorem ipsum dolor sit, amet?</p>
                        {/* <i class="ion-reply comments__section--reply"></i> */}
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              {/* End Post Detail Comments */}
            </div>
          </div>
          {/* End Post Detail Content */}
          {/* Post Detail Sidebar */}
          <div className="post-detail__side">
            <div className="post-author">
              <div className="post-author__bg-avatar">
                <a href="#" className="post-author__avatar">
                  <img src="./assets/images/blog-detail.jpg" alt="" />
                </a>
              </div>
              <div className="post-author__nickname">
                <a href="#">John Smith</a>
              </div>
              <p className="post-author__desc">Lorem ipsum, dolor sit amet conse ctetur adipi sicing elit. Necessitatibus, vel vero vel vero vel vero vel vero!</p>
            </div>
            <div className="spacing" />
            <div className="related-post">
              <h2 className="related-post__head">Related Posts</h2>
              <article className="related-post__card">
                <a href="#" className="related-post__title">5 BBQ Recipes to Get Your Summer Started</a>
                <div className="related-post__info">
                  <a className="related-post__author" href="#">John Smith</a>
                  <p className="related-post__date">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" className="css-uk6cul" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z">
                      </path>
                    </svg>
                    1 min ago</p>
                </div>
              </article>
              <article className="related-post__card">
                <a href="#" className="related-post__title">5 BBQ Recipes to Get Your Summer Started</a>
                <div className="related-post__info">
                  <a className="related-post__author" href="#">John Smith</a>
                  <p className="related-post__date">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" className="css-uk6cul" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z">
                      </path>
                    </svg>
                    1 min ago</p>
                </div>
              </article>
              <article className="related-post__card">
                <a href="#" className="related-post__title">5 BBQ Recipes to Get Your Summer Started</a>
                <div className="related-post__info">
                  <a className="related-post__author" href="#">John Smith</a>
                  <p className="related-post__date">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" className="css-uk6cul" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z">
                      </path>
                    </svg>
                    1 min ago</p>
                </div>
              </article>
            </div>
          </div>
          {/* End Post Detail Sidebar */}
        </div>
      </div>
    </div>
    {/* End Post Detail Wrapper Content */}
  </main>
  <div className="spacing" />
  <footer id="footer" className="bg-white">
    <div className="tcl-container">
      <div className="footer">
        <div className="tcl-row">
          {/* Footer Column */}
          <div className="tcl-col-12 tcl-col-sm-6 tcl-col-md-4 tcl-col-lg-3">
            <div className="footer-logo">
              <img src="assets/images/logo.png" alt="NuxtBlog Logo" />
            </div>
            <p>© 2020, All Rights Reserved.</p>
            <p>Created by <a href="https://www.facebook.com/congluc1902" target="_blank">Luctc</a></p>
          </div>
          {/* Footer Column */}
          <div className="tcl-col-12 tcl-col-sm-6 tcl-col-md-4 tcl-col-lg-2">
            <div className="footer-title">
              <p>Categories</p>
            </div>
            <ul className="footer-content__list">
              <li><a href="#">ReactJs</a></li>
              <li><a href="#">Javascript</a></li>
              <li><a href="#">Angular</a></li>
              <li><a href="#">HTML, HTML5</a></li>
            </ul>
          </div>
          {/* Footer Column */}
          <div className="tcl-col-12 tcl-col-sm-6 tcl-col-md-4 tcl-col-lg-3">
            <div className="footer-title">
              <p>Liên hệ</p>
            </div>
            <ul className="footer-content__list">
              <li>219/78 Trần Văn Đang - Quận 10 - Thành phố Hồ chí Minh</li>
              <li>0343 261 825</li>
            </ul>
          </div>
          {/* Footer Column */}
          <div className="tcl-col-12 tcl-col-sm-6 tcl-col-md-4 tcl-col-lg-4">
            <div className="footer-title">
              <p>Fanpage</p>
            </div>
            <div className="footer-facebook">
              <div className="fb-page" data-href="https://www.facebook.com/HocLapTrinhWebTrenProjectsThucTe/" data-tabs data-width data-height data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
                <blockquote cite="https://www.facebook.com/HocLapTrinhWebTrenProjectsThucTe/" className="fb-xfbml-parse-ignore">
                  <a href="https://www.facebook.com/HocLapTrinhWebTrenProjectsThucTe/">Học Lập Trình Web Thông Qua
                    Projects Thực Tế</a>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</div>

        </>
            )
}