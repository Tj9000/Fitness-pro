import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import { showLoginModal } from '../../redux/actions/modal';

import NavBar from "../../components/navBar/NavBar"

import styles from './Login.module.css';

class LoginPage extends Component {
    showlogin = () => {
        this.props.showLoginModal(); //TODO: Handle referring location
    }
    render() {
        return (
            <div className="pageMainContainer">
                <NavBar currentPageHead="Login" />
                <div>
                    Please login to continue.<br/>
                    <input type="button" className={styles.loginButton} onClick={this.showlogin} value="Login"></input>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
});
const mapDispatchToProps = {
    pushRoute: push,
    showLoginModal
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);