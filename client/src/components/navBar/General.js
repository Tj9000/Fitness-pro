import { Component } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import FitVibLogo from  '../FitVibLogo/FitVibLogo';

import styles from './navBar.module.css';

class General extends Component {
    render() {
        return (
            <div className={styles.navContainer} style={{ height: '80px', backgroundColor: '#fff' }}>
                <div className={styles.nav}>
                    <div className={styles.leftList} >
                        <FitVibLogo/>
                    </div>
                    {
                        this.props.currentPageHead ? (
                            <div className={styles.currentPageHeadContainer}>
                                <span className={styles.currentPageHeadText}>{this.props.currentPageHead}</span>
                            </div>
                        ) : null
                    }
                    <div className={styles.rightList} style={{ color: '#fff' }}>
                        <span className={styles.listItemRightGeneral} ><Link to="/workoutplan">Workout Plan</Link></span>
                        <span className={styles.listItemRightGeneral} ><Link to="/membership">Membership</Link></span>
                        <span className={styles.listItemRightGeneral} ><Link to="/billing">Billing</Link></span>
                        <span className={styles.listItemRightGeneral} ><Link to="/support">Support</Link></span>
                        <span className={styles.listItemRightGeneral} ><Link to="/profile">Profile</Link></span>
                        <span className={styles.listItemRightGeneral} ><Link to="/logout">Logout</Link></span>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
});
const mapDispatchToProps = {
    pushRoute: push
};
export default connect(mapStateToProps, mapDispatchToProps)(General);