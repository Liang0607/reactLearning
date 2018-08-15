import React, { Component } from 'react';
import DateTHeader from './dateTHeader.jsx';
import DateTBody from './dateTBody.jsx';

export default class DateTable extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<table className="calendar-table">
				<DateTHeader />
				<DateTBody />
			</table>
		)
	}
}