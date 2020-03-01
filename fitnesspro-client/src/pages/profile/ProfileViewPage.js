import React, { Component } from "react";
import FitProfilePic from '../../assets/images/fitProfilePic.png';
import NavBar from "../../components/navBar/NavBar";

class ProfileViewPage extends Component {
    render() {
        return (
            <div style={{ display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'center', height: '100%' }}>
                <NavBar type="user" />
                <div style={{ display: 'flex', flexDirection: 'row', flex: 1, alignItems: 'center', padding: '20px', height: '100%' }}>
                    <div style={{ display: 'flex', flex: 3, flexDirection: 'row' }} >
                        <div style={{ display: 'flex', flex: 3, flexDirection: 'column' }}>
                            
                        </div>

                        <div style={{ display: 'flex', flex: 1, alignSelf: 'flex-start' }}>
                            <img src={FitProfilePic}></img>
                            <button onClick={this.getFormValues}>update</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileViewPage;