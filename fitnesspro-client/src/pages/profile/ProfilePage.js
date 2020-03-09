import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import Update from "./Update";
import View from "./View";
import NavBar from "../../components/navBar/NavBar"

function ProfilePage(props) {
    const isEditProfile = props.isEditProfile;

    return (
        <div className="pageMainContainer">
            <NavBar type="user" currentPageHead="Profile"/>
            {isEditProfile ? <Update /> : <View />}
        </div>
    );
}

const mapStateToProps = (state, ownProps) => ({
});
const mapDispatchToProps = {
    pushRoute: push
};
export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);