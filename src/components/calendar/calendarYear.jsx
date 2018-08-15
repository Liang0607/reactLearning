import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getDetailTime } from './util';

const arr = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'];
export default class CalendarYear extends Component {
	yearArr(time) {
		let arr = [];
		let year = time.year;
		for (let i = year - 6; i < year + 6; i++) {
			arr.push(i);
		}
		return arr;
	}
	clickYear(i) {
		let time = getDetailTime(this.context.time === '' ? null : this.context.time);
		let y = i, m = time.month, d = time.day;
		var o = {
			'state': 'day',
			'show': 1,
			'time': y + '-' + m + '-' + d
		};
		this.context.changeDate(o);
	}
	render() {
		let time = getDetailTime(this.context.time === '' ? null : this.context.time);
		let arr = this.yearArr(time);
		return (
			<ul className="calendar-year-ul yahei">
				{arr.map((v, i) => 
					<li 
						className={"calendar-year-item fl tc" + (v === time.year ? ' select' : '')}
						key={'year-' + i}
						onClick={() => this.clickYear(v)}
					>{v}</li>
				)}
			</ul>
		)
	}
}
CalendarYear.contextTypes = {
	time: PropTypes.any,
	state: PropTypes.any,
	changeDate: PropTypes.any
}