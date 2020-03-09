import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { loginUserWithEmail } from '../../redux/actions/login';

import NavBar from "../../components/navBar/NavBar"

import styles from './Login.module.css';

class LoginPage extends Component {
    login = () => {
        let loginIdIp = document.getElementById('loginEmailAddress');
        let loginId = loginIdIp && loginIdIp.value;
        this.props.loginUserWithEmail(loginId);
    }
    emailInputChange = (e) => {
        this.setState({"email":e.target.value})
    }
    render() {
        return (
            <div className="pageMainContainer">
                <NavBar currentPageHead="Login"/>
                <div>
                    <input type="email" className={styles.inputEmail} placeholder="Enter email Address" id="loginEmailAddress" onChange={this.emailInputChange}></input>
                    <input type="button" className={styles.loginButton} onClick={this.login} value="Login"></input>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
});
const mapDispatchToProps = {
    pushRoute: push,
    loginUserWithEmail: loginUserWithEmail,

};
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);