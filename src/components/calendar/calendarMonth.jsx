import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getDetailTime } from './util';

const arr = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'];
export default class CalendarMonth extends Component {
	clickMonth(i) {
		let time = getDetailTime(this.context.time === '' ? null : this.context.time);
		let y = time.year, m = i + 1, d = time.day;
		var o = {
			'state': 'day',
			'show': 1,
			'time': y + '-' + m + '-' + d
		};
		this.context.changeDate(o);
	}
	render() {
		let time = getDetailTime(this.context.time === '' ? null : this.context.time);
		return (
			<ul className="calendar-month-ul yahei">
				{arr.map((v, i) => 
					<li 
						className={"calendar-month-item fl tc" + (i + 1 === time.month ? ' select' : '')}
						key={'month-' + i}
						onClick={() => this.clickMonth(i)}
					>{v + '月'}</li>
				)}
			</ul>
		)
	}
}
CalendarMonth.contextTypes = {
	time: PropTypes.any,
	state: PropTypes.any,
	changeDate: PropTypes.any
}