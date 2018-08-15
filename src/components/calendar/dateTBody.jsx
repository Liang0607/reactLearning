import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCells, getDetailTime, dealTimes } from './util';

export default class DateTBody extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		
	}
	clickHanler(date) {
		this.context.changeDate({'time': date});
	}
	render() {
		let ar = dealTimes(this.context.time === '' ? null : this.context.time);	//日期数组
		return (
			<tbody className="vito-calendar-body">
				{ar.map((t, i) => 
					<tr role="row" key={i}>
						{t.map((_t, _i) => 
							<td
								role="gridcell" 
								title={_t.time} 
								className={"calendar-cell " + _t.type + (_t.time == this.context.time ? ' select' : ' noselect') + (_t.time == this.context.curtime ? ' today' : '')}
								key={_t.time}
								onClick={() => this.clickHanler(_t.time)}
							>
								<div 
									className="calendar-date"
								>{_t.text}</div>
							</td>
						)}
					</tr>
				)}
			</tbody>
		)
	}
}

DateTBody.contextTypes = {
	time: PropTypes.any,
	curtime: PropTypes.any,
	changeDate: PropTypes.any
}