import React, { Component } from "react";
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import Update from "./Update";
import View from "./View";
import NavBar from "../../components/navBar/NavBar";

class MembershipPage extends Component {
    render() {
        return (
            <div className="pageMainContainer">
                <NavBar type="user" currentPageHead="Membership" />
                {this.props.isEdit ? <Update /> : <View />}
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