import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { GetData } from '../Actions/Actions';
import { connect } from 'react-redux';
const queryString = require('query-string');

class Page3 extends Component {
    componentDidMount() {
        this.props.GetData()
        const parsed = queryString.parse(window.location.search);
        console.log(parsed);
        console.log('Parsed', parsed)
    }

    componentWillReceiveProps(nextProps) {
        console.log('Data From Store', nextProps.table)
    }


    render() {
        return (
            <div>
                Page 3

                <button onClick={() => this.props.history.push('/page2')}>Page 2</button>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    table: state.Reducer1.tableData
})
export default connect(mapStateToProps, {GetData})(Page3);