import React from 'react'

export default class Header extends React.Component {

  constructor() {
    super()
    this.state = {}
  }

  render() {
    return(
      <header className="section header">
        <a href='/'>
        <div className="container">
          <div className="row">
            <div className="column">
              <h1 className="title">React Orio</h1>
              <h2 className="description">Demo | React + Webpack - Static Website Generator</h2>
              <h3 className="sub-description">By Rheza Satria</h3>
            </div>
          </div>
        </div>
        </a>
      </header>
    )
  }

}
