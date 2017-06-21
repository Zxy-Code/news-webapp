import React from 'react';
import { Link } from 'react-router-dom';
import Lazyload from 'react-lazyload';

import '../assets/styles/list.scss';



export default class List extends React.Component {
	constructor(prop){
		super(prop);
		this.state= {
			news: [],
			count: 0,
			type: '',
			newsLength: 0,
			loadMeg:'加載更多...',
			displayLoadIcon:{
				display:'none'
			},
			displayLoadMore:{
				display:'none'
			}
		}
	}

	componentDidMount() {
		console.log(123);
		console.log(this.props.type);
		const _this = this;
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type+"&count="+this.props.count,{
			method:"get"
		})
		.then(response => response.json())
		.then(json => {
			console.log(3)
			console.log(json)
			_this.setState({
				news: json,
				count: _this.props.count,
				type: _this.props.type,
				newsLength: json.length,
				displayLoad:{
					display:'flex'
				},
			});
			console.log(1111111)
		})
		console.log(this.state.news)
		console.log(1)
	}

	loadMore(){
		this.setState({
			displayLoadIcon:{
				display:'inline-block'
			}
		})
		let _count = this.state.count + 8;
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.state.type + "&count=" + _count,{
			method: "get"
		})
		.then(response => response.json())
		.then(json => {
			if(json.length === this.state.newsLength){
				this.setState({
					loadMeg: '没有更多...',
					displayLoadIcon:{
						display:'inline-none'
					}
				})
			}
			this.setState({
				news: json,
				count: _count,
				newsLength: json.length,
				displayLoadIcon:{
					display:'none'
				}
			})
		});

	}

	render(){
		console.log(2)
		console.log(this.state);
		console.log(this.state.news.length);
		const newsLength = this.state.news.length;
		const newList = newsLength
		?
		this.state.news.map( (item,index) => (
			<div  key={ index }>
				<Link to={`details/${item.uniquekey}`} >
					<div className="list-container">
						<div className="list">
							<div className="list-info">
								<div className="list-title">
									<span>{item.title}</span>
								</div>
								<div className="list-details">
									<span className="list-from">{item.realtype}</span>
									<span className="list-time">{item.date}</span>
								</div>
							</div>
							<div className="list-img">
								<Lazyload throttle={300} height={'100%'}>
									<img src={item.thumbnail_pic_s} alt={item.title} />
								</Lazyload>
							</div>
						</div>
					</div>
				</Link>
			</div>
		))
		: 
		'没有新闻获取';
		return (
			<div className="list-content">
					{ newList }
					<div className="load-more" onClick={this.loadMore.bind(this)} style={ this.state.displayLoad }>
						<span style={this.state.displayLoadIcon}></span>
						{ this.state.loadMeg }
					</div>
			</div>
		)
	}
}