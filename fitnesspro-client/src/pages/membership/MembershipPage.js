import React, { Component } from "react";
import NavBar from "../../components/navBar/NavBar";

class MembershipPage extends Component {
    render() {
        return (
            <div style={{ display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'center', height: '100%' }}>
                <NavBar type="user" />
            </div>
        )
    }
}

export default MembershipPage;