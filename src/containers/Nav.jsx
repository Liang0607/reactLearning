import React, { Component, PropTypes } from 'react';

export default class Nav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: [1,2,3,4,5,6],
			iselect: 0
		}
	}
	onselect(idx) {
		//let curSelect = this.props.select.idx;
		//let willSelect = idx;
		//let cnt = this.state.list[idx];
		if (idx === this.state.iselect) {
			return;
		} else {
			//this.state.iselect = idx;
			this.setState({
				iselect: idx
			})
		}
		//alert(this.state.iselect);
	}
	isSelect(i, classname) {
		//i === this.state.select && classname += ' select';
		return classname;
	}
	render() {
		return (
			<ul className="nav yahei tc fl">
				{this.state.list.map((v, i) => {
					console.log(v);
					let classname = "nav-item";
					if (i === this.state.iselect) {classname += ' select'};
					return <li 
						className={classname}
						onClick={() => this.onselect(i) }
					>{v}</li>
				})}
			</ul>
		)
	}
}