import React, { Component } from 'react';
import Header from './Containers/Header.jsx';
import Nav from './Containers/Nav.jsx';
import Content from './Containers/Content.jsx';
import './style/reset.css';
import './style/index.css';

export default class App extends Component {
  render () {
    return (
      <div className="app-wrap">
		<Header />
		<Nav />
		<Content />
	  </div>
    )
  }
}