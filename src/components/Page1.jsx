import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios'; //es6
import Page2 from './Page2';
const queryString = require('query-string'); // es5

class Page1 extends Component {

    state = {
        arr: []
    }

    componentDidMount() {

        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) =>
                this.setState({
                    arr: response.data
                })
                // console.log('Result', response.data)
            )
            .catch((err) => console.log('Error', err))

        const karthik = {
            name: 'venkat',
            id: 1
        }

        axios.post('https://jsonplaceholder.typicode.com/posts', karthik)
            .then((response) =>
                console.log('Result', response.data)
            )
            .catch((err) => console.log('Error', err))
    }
    render() {
        const { arr } = this.state;
        return (
            <div>
                <button onClick={() => this.props.history.push('/page2')}>Page 2</button>
<Page2 id={10}/>
                <table>
                    <thead>
                        <tr><td>ID</td><td>Title</td><td>Body</td></tr>
                    </thead>
                    <tbody>
                        {arr.map(i => (
                            <tr><td>{i.id}</td><td>{i.title}</td><td>{i.body}</td></tr>
                        ))}
                    </tbody>
                </table>

            </div>
        );
    }
}

export default withRouter(Page1);