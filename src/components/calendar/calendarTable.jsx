import React, { Component } from 'react';
import CalendarHeader from './calendarHeader.jsx';
import CalendarBody from './calendarBody.jsx';

export default class CalendarTable extends Component {
	render() {
		return (
			<div className="calendar-date-panel">
				<CalendarHeader />
				<CalendarBody />
			</div>
		)
	}
}