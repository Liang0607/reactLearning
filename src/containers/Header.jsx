import React, { Component, PropTypes } from 'react';

export default class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '啦啦啦1'
		}
	}
	render() {
		return (
			<header className="yahei tc">{this.state.title}</header>
		)
	}
}