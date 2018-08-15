import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DateTable from './dateTable.jsx';
import CalendarMonth from './calendarMonth.jsx';
import CalendarYear from './calendarYear.jsx';

export default class CalendarBody extends Component {
	constructor(props) {
		super(props);
	}
	getComponent(state) {
		let table;
		if (state === 'day') {
			table = () => <DateTable />;
		} else if (state === 'month') {
			table = () => <CalendarMonth />;
		} else if (state === 'year') {
			table = () => <CalendarYear />;
		}
		return table();
	}
	render() {
		let state = this.context.state;
		let table = this.getComponent(state);
		return (
			<div>{ table }</div>
		)
	}
}

CalendarBody.contextTypes = {
	state: PropTypes.any
}