import React, { Component } from 'react';
//import DateTable from './dateTable.jsx';
import PropTypes from 'prop-types';
import CalendarInput from './calendarInput.jsx';
import CalendarTable from './calendarTable.jsx';
import CalendarMonth from './calendarMonth.jsx';
import { getDetailTime } from './util';
import './calendar.css';

export default class Calendar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			time: '',		
			curtime: '',	//当前时间
			show: 0,
			state: 'day'
		}
	}
	componentDidMount() {
		let curTime = getDetailTime();	//今日日期
		curTime = curTime.year + '-' + curTime.month + '-' + curTime.day;
		this.setState({curtime: curTime});
	}
	dateClick1(date) {
		this.setState({time: date});
		this.setState({show: 0})
	}
	dateClick(o) {
		if (!o.show) {
			o.show = 0;
		}
		this.setState(o);
	}
	focusInput() {
		this.setState({show: 1})
	}
	getChildContext() {
		return {
			time: this.state.time,
			curtime: this.state.curtime,
			state: this.state.state,
			changeDate: this.dateClick.bind(this)
		}
	}
	render() {
		let calendar = () => this.state.show ? <CalendarTable /> : null;
		//let calendar = () => this.state.show ? <CalendarMonth /> : null;
		calendar = calendar();
		return (
			<div className="calendar-wrap">
				<CalendarInput 
					focusInput={ () => this.focusInput() }
				/>
				{ calendar }
			</div>
		)
	}
}

Calendar.childContextTypes = {
	time: PropTypes.any,
	curtime: PropTypes.any,
	state: PropTypes.any,
	changeDate: PropTypes.any
}