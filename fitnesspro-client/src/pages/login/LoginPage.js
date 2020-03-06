import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import NavBar from "../../components/navBar/NavBar"

class LoginPage extends Component {
    render() {
        return (
            <div className="pageMainContainer">
                <NavBar currentPageHead="Login"/>
                <div>
                    Signin
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
});
const mapDispatchToProps = {
    pushRoute: push
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);