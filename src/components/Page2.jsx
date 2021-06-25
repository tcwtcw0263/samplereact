import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
const queryString = require('query-string');

class Page2 extends Component {
    componentDidMount() {
        const parsed = queryString.parse(window.location.search);
        console.log(parsed);
        console.log('Parsed', parsed)
    }

    com
    render() {
        return (
            <div>
                Page 2
                <button onClick={() => this.props.history.push('/page1')}>Page 1</button>
            </div>
        );
    }
}

export default withRouter(Page2);