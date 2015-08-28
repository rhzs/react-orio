import React from 'react'
import Router from 'react-router'
import { DefaultRoute, Link, Route, RouteHandler, NotFoundRoute } from 'react-router'

import Layout from './components/Layout'
import Post from './components/Post'
import Home from './components/Home'
import NotFound from './components/404'

const routes = (
  <Route name='layout' path='/' handler={Layout}>
  	<DefaultRoute name='home' handler={Home} />
    <Route name='post' path='/post/:title?' handler={Post} />
    <NotFoundRoute handler={NotFound}/>
  </Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {  
  React.render(<Handler/>, document.getElementById('react-app'));
});