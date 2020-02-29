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
                        <span className={styles.listItemRightGeneral} ><a>Workout Plan</a></span>
                        <span className={styles.listItemRightGeneral} ><a>Membership</a></span>
                        <span className={styles.listItemRightGeneral} ><a>Billing</a></span>
                        <span className={styles.listItemRightGeneral} ><a>Support</a></span>
                        <span className={styles.listItemRightGeneral} ><a>Profile</a></span>
                        <span className={styles.listItemRightGeneral} ><a>Logout</a></span>
                    </div>
                </div>
            </div>
        );
    }
}

export default General;