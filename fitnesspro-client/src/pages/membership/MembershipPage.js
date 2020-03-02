import React, { Component } from "react";
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

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

const mapStateToProps = (state, ownProps) => ({
});
const mapDispatchToProps={
    pushRoute: push
};
export default connect(mapStateToProps, mapDispatchToProps)(MembershipPage);