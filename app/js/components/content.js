import React from 'react'
import Markdown2HTML from 'react-markdown-to-html'
import { Link } from 'react-router'

const MD_DIR = "/public/articles/";

export default class Content extends React.Component {

  render() {
    const path = ""+window.location.origin+MD_DIR + this.props.path + ".md";
    let markdown = () => {
      if (this.props.path) {
        return (
            <Markdown2HTML src={path} />
          )
      }
    };

    return (
      <div className="section">
        <div className="container post">
          <header className="post-header">
            <span className="post-meta">
              <span className="posted-on">
                <a href="" rel="bookmark">
                  {this.props.published_at}
                </a>
              </span>
              <span className="byline"> by <span className="author vcard">
                <a className="url fn n" href="">{this.props.author}</a></span></span>&nbsp;|&nbsp;
                <a href="" rel="category tag">{this.props.categories}</a>
            </span>
            <h4 className="title">{this.props.title}</h4>
          </header>
          <section className="post-content">
            { markdown() }
          </section>
          <Link className="button button-primary"
                to='home'>
            back
          </Link>

        </div>
      </div>
    );
  }

}