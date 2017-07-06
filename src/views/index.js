import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import { connect } from 'react-redux';
import Logo from '../components/Logo';
import UserButton from '../components/UserButton';
import Home from './home';
import Login from './login';
import Player from './player';

import './style.css';
class Layout extends Component{
    render = () => (
        <Router>
          <div className="App">
            <nav>
                <Logo/>
                <UserButton username={this.props.username} actions={this.props.actions} authenticated={this.props.authenticated}/>
            </nav>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login}/>
            <Route path='/player/:channel' component={Player}/>
          </div>
        </Router>
    )
} 

const mapStateToProps = ({user}) => ({
    username: user.user_name,
    actions: user.actions,
    authenticated: user.authenticated
})
export default connect(mapStateToProps)(Layout);
