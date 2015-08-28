import React from 'react'

export default class NotFound extends React.Component {
  render() {
    return (
      <article className="page not-found container">
        <h1>404 Error</h1>

        <p>
          Page not found :(
        </p>

        <p>
          <a href="/">Oopss! Sorry...</a>
        </p>
      </article>
    );
  }
}