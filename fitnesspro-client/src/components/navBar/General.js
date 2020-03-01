import { Component } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/ProFit-logo.png';

import styles from './navBar.module.css';

class General extends Component {
    render() {
        return (
            <div className={styles.navContainer} style={{ height: '60px', backgroundColor: '#fff' }}>
                <div className={styles.nav}>
                    <div className={styles.leftList} >
                        <img src={logo} height='45px' alt='logo' style={{ paddingTop: '5px', paddingBottom: '5px' }} />
                    </div>
                    <div>
                    </div>
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

export default General;