import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import NavBar from "../../components/navBar/NavBar"

import styles from './MyCoursesPage.module.css';


class MyCoursesPage extends Component {
    render() {
        return (
            <div className="pageMainContainer">
                <NavBar currentPageHead="My Courses" />
                <div className={styles.mainContainer}>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({

});
const mapDispatchToProps = {
    pushRoute: push,

};
export default connect(mapStateToProps, mapDispatchToProps)(MyCoursesPage);