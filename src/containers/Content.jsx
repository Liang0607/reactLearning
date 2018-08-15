/*
	主体内容
*/
import React, { Component, PropTypes } from 'react';
import Calendar from '../components/Calendar/calendar.jsx';

export default class Content extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
		}
	}
	render() {
	//	const { select } = this.props;
		return (
			<div id="content">
				<Calendar />
			</div>
		)
	}
}