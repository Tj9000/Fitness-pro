import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push, replace } from 'connected-react-router';

import { showLoginModal } from '../../redux/actions/modal';

import NavBar from "../../components/navBar/NavBar"

import styles from './Login.module.css';
import { checkUserSignedIn } from '../../redux/actions/login';
import SimpleLoader from '../../components/loader/SimpleLoader';

import * as _ from 'lodash';

class LoginPage extends Component {
    state = {
        checkingLogin: true,
    }
    componentDidMount() {
        this.props.checkUserSignedIn()
    }
    static getDerivedStateFromProps(props, state) {
        if (props.checkingLogin != state.checkingLogin) {
            return { checkingLogin: props.checkingLogin }
        }
        return null;
    }
    showlogin = () => {
        this.props.showLoginModal(); //TODO: Handle referring location
    }
    componentDidUpdate() {
        let referPath = this.props.location && this.props.location.state && this.props.location.state.from && this.props.location.state.from.pathname;
        if (!this.props.checkingLogin && !!this.props.signedIn && _.size(this.props.userDetails)) {
            let pathname = (!referPath || referPath == '/') ? '/homepage' : referPath;
            let redirectRoute = this.props.userDetails.profileSignupComplete ? pathname : '/signup';
            this.props.replaceRoute(redirectRoute);
        }
        else if (!this.props.checkingLogin && !this.props.signedIn) {
            let pathname = '/';
            let state = {
                promptLoginMessage: true,
                referPath: referPath
            }
            this.props.showLoginModal()
            this.props.replaceRoute(pathname, state);
        }
    }
    render() {
        return (
            <div className="pageMainContainer">
                <NavBar currentPageHead="Login" />
                <div className={styles.loginContainer}>
                    <div>
                        {this.state.checkingLogin ? 'Checking login, please wait' : (
                            this.props.signedIn ? 'User already logged in' : 'Please login to continue.'
                        )}
                    </div>
                    <SimpleLoader size={150} />
                    <div />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    checkingLogin: state.login.checkingLogin,
    signedIn: state.login.signedIn,
    currentUser: state.login.currentUser,
    userDetails: state.user.details
});
const mapDispatchToProps = {
    pushRoute: push,
    replaceRoute: replace,
    checkUserSignedIn,
    showLoginModal
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);