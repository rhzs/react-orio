import React from 'react'
import { RouteHandler, Link } from 'react-router'

export default class Preview extends React.Component {
  render() {
    return (
      <div className="section post">
        <div className="container">
          <h3 className="title">{this.props.title}</h3>
          <p className="preview">{this.props.preview}</p>

          <Link className="button button-primary"
                to='post'
                params={ { title: this.props.title } }>
            more
          </Link>

        </div>
      </div>
    );
  }
}