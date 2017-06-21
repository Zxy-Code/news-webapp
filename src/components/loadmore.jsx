import React from 'react';

import '../assets/styles/loadmore.scss'

export default class banner extends React.Component {
    render() {
        return (
            <div className="load-more" onClick={this.loadMore.bind(this)}>
                <span></span>
                { this.state.loadMeg }
            </div>
        )
    }
}