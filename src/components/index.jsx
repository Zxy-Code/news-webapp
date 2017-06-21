import React from 'react';
import Header from './header.jsx'
import Banner from './banner.jsx'
import List from './list.jsx'
import { Tabs } from 'antd'



import '../assets/styles/reset.scss';
import '../assets/styles/index.scss';
const TabPane = Tabs.TabPane;


export default class Index extends React.Component{
	constructor(prop){
		super(prop);
	}


	changeTabs(key) {
		console.log(key)
	}

	render() {
		var self = this;
		return (
			<div>
				{/*渲染头部*/}
				<div>
					<Header />
				</div>
				{/*渲染nav*/}
				<Tabs defaultActiveKey="1" onChange={self.changeTabs} size="small">
					<TabPane tab="推荐" key="1" >
						{/*渲染banner*/}
						<div>
							<Banner />
						</div>
						{/*渲染list*/}
						<div>
							<List count={10} type="top" />
						</div>
					</TabPane>
					<TabPane tab="社会" key="2">
						{/*渲染list*/}
						<div>
							<List count={10} type="shehui"/>
						</div>
					</TabPane>
					<TabPane tab="娱乐" key="3">
						{/*渲染list*/}
						<div>
							<List count={10} type="yule"/>
						</div>
					</TabPane>
					<TabPane tab="科技" key="4">
						{/*渲染list*/}
						<div>
							<List count={10} type="keji"/>
						</div>
					</TabPane>
					<TabPane tab="军事" key="5">
						{/*渲染list*/}
						<div>
							<List count={10} type="junshi"/>
						</div>
					</TabPane>
					<TabPane tab="体育" key="6">
						{/*渲染list*/}
						<div>
							<List count={10} type="tiyu"/>
						</div>
					</TabPane>
					<TabPane tab="国内" key="7">
						{/*渲染list*/}
						<div>
							<List count={10} type="guonei"/>
						</div>
					</TabPane>
					<TabPane tab="国际" key="8">
						{/*渲染list*/}
						<div>
							<List count={10} type="guoji"/>
						</div>
					</TabPane>
				</Tabs>
			</div>
		)
	}
}

