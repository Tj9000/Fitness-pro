import React, { Component } from "react";
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import NavBar from "../../components/navBar/NavBar";

class WorkoutPlanPage extends Component {
    render() {
        return (
            <div className="pageMainContainer">
                <NavBar type="user" />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
});
const mapDispatchToProps = {
    pushRoute: push
};
export default connect(mapStateToProps, mapDispatchToProps)(WorkoutPlanPage);