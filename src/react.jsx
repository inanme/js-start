"use strict";

import React, {Component} from 'react';
import {render} from 'react-dom';

class MyComponent extends Component {
    render() {
        return (
            <p>hello123</p>
        );
    }
}

render(<MyComponent/>, document.getElementById('cnt'));
