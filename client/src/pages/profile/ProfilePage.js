import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import Update from "./Update";
import View from "./View";
import NavBar from "../../components/navBar/NavBar"
import { getUserDetails } from '../../redux/actions/user';


class ProfilePage extends Component {
    componentDidMount() {
        this.props.getUserDetails();
    }

    render() {
        const isEditProfile = this.props.isEditProfile;
        const fromSignup = this.props.location && this.props.location.state && this.props.location.state.fromSignup;
        const redirectPage = fromSignup ? '/homepage' : '/profile';
        return (
            <div className="pageMainContainer" style={{ backgroundColor: 'var(--primary-black)' }}>
                <NavBar type="user" currentPageHead="Profile" />
                {isEditProfile ? <Update isSignup={fromSignup} redirectPage={redirectPage} /> : <View />}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
});
const mapDispatchToProps = {
    pushRoute: push,
    getUserDetails
};
export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);