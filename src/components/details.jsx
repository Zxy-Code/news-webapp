import React from 'react';
import Header from './header.jsx';

import '../assets/styles/details.scss';

export default class Details extends React.Component {

	constructor(prop){
		super(prop);
		this.state= {
			newsContent:''
		}
	}

	componentDidMount(){
		console.log(this.props)
		console.log(this.props.params)
		fetch('http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey='
			+ this.props.params.uniquekeye,{
				method:'get'
			})
		.then(response => response.json)
		.then(json => {
			this.setState({
				newsContent: json
			})
		})
	}

	render(){
		return (
			<div className="details-container">
				<Header />
				{ this.state.newsContent }
			</div>
		)
	}
}