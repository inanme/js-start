"use strict";

//https://medium.com/@dabit3/beginner-s-guide-to-react-router-53094349669#.guzkb8x2m

import React, {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, Link, IndexLink, IndexRoute, hashHistory, browserHistory} from 'react-router'

class App extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path='/' component={Container}>
                    <IndexRoute component={Home}/>
                    <Route path='address' component={Address}>
                        <IndexRoute component={TwitterFeed}/>
                        <Route path='instagram' component={Instagram}/>
                    </Route>
                    <Route path='/about(/:name)' component={About} />
                    <Route path='/query' component={Query} />
                    <Route path='/namedComponent' component={NamedComponents}>
                        <IndexRoute components={{ title: Title, subTitle: SubTitle }}/>
                    </Route>
                    <Route path='*' component={NotFound}/>
                </Route>
            </Router>
        )
    }
}
const Container = (props) => (
    <div>
        <Nav />
        {props.children}
    </div>);

const Nav = () => (
    <div>
        <IndexLink activeStyle={{color:'#53acff'}} style={{padding:"10px"}} to='/'>Home</IndexLink>
        <IndexLink activeStyle={{color:'#53acff'}} style={{padding:"10px"}} to='/address'>Address</IndexLink>
        <IndexLink activeStyle={{color:'#53acff'}} style={{padding:"10px"}} to='/about'>About</IndexLink>
        <IndexLink activeStyle={{color:'#53acff'}} style={{padding:"10px"}} to={{pathname:'query', query:{message:"default"}}}>Query</IndexLink>
        <IndexLink activeStyle={{color:'#53acff'}} style={{padding:"10px"}} to='/namedComponent'>Named Component</IndexLink>
    </div>
);

const Home = () => <h1>Home</h1>;
const Address = (props) => (
    <div>
        <br />
        <IndexLink activeStyle={{color:'#53acff'}} to='/address'>Twitter Feed</IndexLink>&nbsp;
        <IndexLink activeStyle={{color:'#53acff'}} to='/address/instagram'>Instagram Feed</IndexLink>
        <h1>We are located at 555 Jackson St.</h1>
        {props.children}
    </div>);
const NamedComponents = (props) => (
    <div>
        {props.title}<br />
        {props.subTitle}
    </div>
);
const Instagram = () => <h3>Instagram Feed</h3>;
const TwitterFeed = () => <h3>Twitter Feed</h3>;
const About = (props) => (
    <div>
        <h3>Welcome to the About Page</h3>
        { props.params.name && <h2>Hello, {props.params.name}</h2>}
    </div>
);
const Query = (props) => <h2>{props.location.query.message}</h2>;
const Title = () => <h1>Hello from Title Component</h1>;
const SubTitle = () => <h1>Hello from SubTitle Component</h1>;
const NotFound = () => <h1>404.. This page is not found!</h1>;

render(<App/>, document.getElementById('cnt'));

console.log(new Date());
