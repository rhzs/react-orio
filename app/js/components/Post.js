import React from 'react'
import posts from '../posts'
import Content from './Content'

export default class Post extends React.Component {

  constructor() {
    super()
    let post = {id: '', title: '', preview: '', path: '', author: '', published_at:'', categories: []}
    this.state = { post: post }
  }

  componentDidMount() {
    let post = {}

    for(let i = 0; i < posts.length; i++){
      if(posts[i].title == this.props.params.title) {
        this.setState({ post: posts[i] })
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
  }

  render() {
    return (
      <div className="post">
        <Content title={this.state.post.title}
                id={this.state.post.id}
                path={this.state.post.path}
                preview={this.state.post.preview}
                author={this.state.post.author}
                published_at={this.state.post.published_at}
                categories={this.state.post.categories} />
      </div>
    );
  }

}