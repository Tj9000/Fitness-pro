import React from 'react';
import Update from "./Update";
import View from "./View";
import NavBar from "../../components/navBar/NavBar"

function ProfilePage(props) {
    const isEditProfile = props.isEditProfile;

    return (
        <div style={{ display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'center', height: '100%' }}>
            <NavBar type="user" />
            {isEditProfile ? <Update /> : <View />}
        </div>
    );
}

export default ProfilePage;