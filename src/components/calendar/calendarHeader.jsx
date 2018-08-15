import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getDetailTime } from './util';
import { reg_date_fomat } from './util';

export default class CalendarHeader extends Component {
	constructor(props) {
		super(props);
		this.state = {
			year: '',
			month: ''
		}
	}
	componentDidMount() {
		let selectTime = getDetailTime(this.context.time === '' ? null : this.context.time);
		this.setState({year: selectTime.year});
		this.setState({month: selectTime.month});
	}
	prevMonth() {
		let cMonth = Number(this.state.month);
		let cYear = Number(this.state.year);
		let fullTime;
		let y, m;
		if (cMonth == 1) {
			y = cYear - 1;
			m = 12;
		} else {
			y = cYear;
			m = cMonth - 1;
		}
		this.setState({year: y});
		this.setState({month: m});
		let day = this.context.time ? this.context.time.split('-')[2] : '1';
		fullTime = y + '-' + m + '-' + day;
		this.context.changeDate({'time': fullTime, 'show': 1})
	}
	nextMonth() {
		let cMonth = Number(this.state.month);
		let cYear = Number(this.state.year);
		let fullTime;
		let y, m;
		if (cMonth == 12) {
			y = cYear + 1;
			m = 1;
		} else {
			y = cYear;
			m = cMonth + 1;
		}
		this.setState({year: y});
		this.setState({month: m});
		let day = this.context.time ? this.context.time.split('-')[2] : '1';
		fullTime = y + '-' + m + '-' + day;
		this.context.changeDate({'time': fullTime, 'show': 1})
	}
	selectYorM(state) {
		this.context.changeDate({'state': state, 'show': 1})
	}
	render() {
		let time = getDetailTime(this.context.time === '' ? null : this.context.time);
		return (
			<div className="calendar-header">
				<div className="fl" onClick={() => this.prevMonth()}>&lt;</div>
				<div className="fr" onClick={() => this.nextMonth()}>&gt;</div>
				<div>
					<span className="calendar-ym-select">
						<a 
							className="calendar-year-select" 
							role="button" 
							title="选择年份"
							onClick = {() => this.selectYorM('year')}
						>
							{ time.year + '年' }
						</a>
						<a 
							className="calendar-month-select" 
							role="button" 
							title="选择月份" 
							onClick = {() => this.selectYorM('month')}
						>
							{ time.month + '月' }
						</a>
					</span>
				</div>
			</div>
		)
	}
}

CalendarHeader.contextTypes = {
	time: PropTypes.any,
	changeDate: PropTypes.any
}