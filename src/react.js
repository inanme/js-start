import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class MyComponent extends Component {
    render() {
        return (
            <p>hello123</p>
        );
    }
}

ReactDOM.render(<MyComponent/>, document.getElementById('cnt'));
