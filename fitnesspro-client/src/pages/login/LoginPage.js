import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { loginUserWithPhoneNumber, loginUserWithGoogle, logout } from '../../redux/actions/login';

import NavBar from "../../components/navBar/NavBar"

import styles from './Login.module.css';

class LoginPage extends Component {
    loginWithPhone = () => {
        this.props.loginUserWithPhoneNumber(this.state.phone);
    }
    phoneInputChange = (e) => {
        this.setState({ "phone": e.target.value })
    }
    loginWithGoogle = () => {
        this.props.loginUserWithGoogle();
    }
    logout = () => {
        this.props.logout();
    }
    render() {
        return (
            <div className="pageMainContainer">
                <NavBar currentPageHead="Login" />
                <div>
                    <input type="text" className={styles.inputEmail} placeholder="Enter PhoneNumber" id="loginPhoneNumber" onChange={this.phoneInputChange}></input>
                    <input type="button" className={styles.loginButton} onClick={this.loginWithPhone} value="Login"></input>
                </div>
                <div>
                    <input type="button" className={styles.loginButton} onClick={this.loginWithGoogle} value="Signin with Google"></input>
                </div>
                <div>
                    <input type="button" className={styles.loginButton} onClick={this.logout} value="Signout"></input>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
});
const mapDispatchToProps = {
    pushRoute: push,
    loginUserWithPhoneNumber: loginUserWithPhoneNumber,
    loginUserWithGoogle: loginUserWithGoogle,
    logout: logout
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);