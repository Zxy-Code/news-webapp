import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, BrowserRouter} from 'react-router';
import { Router, Route, BrowserRouter, Redirect} from 'react-router-dom';
import Index from './components/index.jsx'
import Details from './components/details.jsx'
import Banner from './components/banner.jsx'
import List from './components/list.jsx'

export default class Root extends React.Component {
	render(){
		return(
			<div>
				<BrowserRouter>
					<Route path='/index' component={Index}>
						{/*
						<Route path='/messages/:id' component={List}/>
						<Redirect from="messages/:id" to="/messages/:id" />
						*/}
					</Route>
				</BrowserRouter>
				<BrowserRouter>
					<Route path='/details/:uniquekey' component={Details}/>
				</BrowserRouter>
				<BrowserRouter>
					<Route path='/banner' component={Banner}/>
				</BrowserRouter>
			</div>
		)
	}
}

ReactDOM.render(<Root />,document.getElementById('main'))