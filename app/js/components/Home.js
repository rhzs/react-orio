import React from 'react'

import Preview from './Preview'
import posts from '../posts'

class Home extends React.Component {

  constructor() {
    super()
    this.state = { posts: posts  }
  }

  render() {
    const previewList = this.state.posts.map( (p, i) => {
      return (
        <Preview title={p.title} key={p.id} preview={p.preview} path={p.path} />
      );
    });
    return (
      <div id="home">
        { previewList }
      </div>
    )
  }
}

module.exports = Home