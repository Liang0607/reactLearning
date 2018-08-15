import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reg_date_fomat } from './util';

export default class CalendarInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			time: ''
		}
	}
	render() {
		return (
			<div className="calendar-input-wrap">
				<input 
					className="calendar-input " 
					placeholder="请选择日期"
					onFocus={ this.props.focusInput } 
					value={ this.context.time.replace(reg_date_fomat, '-0') }
				/>
			</div>
		)
	}
}

CalendarInput.contextTypes = {
	time: PropTypes.any
}