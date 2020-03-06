import React, { Component} from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import NavBar from "../../components/navBar/NavBar"

class SignupPage extends Component {
    render() {
        return (
            <div className="pageMainContainer">
                <NavBar currentPageHead="Signup"/>
                <div>
                    Signup
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
export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);