import React from 'react';
import {connect} from 'react-redux';
import {loginRequest} from '../../store/actions'

import LoginPanel from '../../components/LoginPanel'
import './style.css'
class Login extends React.Component {
    constructor(props){
        super(props);
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentWillMount = () => {
        this.setState(prevState => ({username: "", password: ""}))
    }

    componentWillReceiveProps = ({authenticated}) => {
        if(authenticated){
            this.context.router.history.push('/');
        }
    } 
    handleInput = (event) => {
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState(prevState => ({...prevState, [name]: value}))
    }
    handleSubmit = (event) => {
        this.props.dispatch(loginRequest(this.state.username, this.state.password))
    }
    render = () => (
        <article className="login-page">
            <LoginPanel username={this.state.username} password={this.state.password} inputHandler={this.handleInput} submitHandler={this.handleSubmit}/>
        </article>
    )
}

Login.contextTypes = {
    router: React.PropTypes.object.isRequired
}
const mapStateToProps = ({user}) => ({
    authenticated: user.authenticated,
    state: user.action
})
export default connect(mapStateToProps)(Login);