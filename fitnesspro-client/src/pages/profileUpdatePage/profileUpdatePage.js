import React, { Component } from "react";
import FitProfilePic from '../../assets/images/fitProfilePic.png';

class ProfileUpdatePage extends Component {
    render() {
        return (
            <div style={{ display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'center', height: '100%' }}>
                <div style={{ display: 'flex', flexDirection: 'row', flex: 1, alignItems: 'center', padding: '20px' }}>
                    <div style={{}}>
                        <ul >
                            <li>Age</li>
                            <li>Gender</li>
                            <li>Height</li>
                            <li>Weight</li>
                            <li>Email</li>
                            <li>Phone</li>
                            <li>City</li>
                            <li>ZipCode</li>
                            <li>Country</li>
                            <li>GymAccess</li>
                            <li>Target</li>
                            <li>LanguagePref</li>
                        </ul>

                    </div>

                    <div style={{ alignSelf: 'flex-start' }}>
                        <img src={FitProfilePic}></img>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileUpdatePage;