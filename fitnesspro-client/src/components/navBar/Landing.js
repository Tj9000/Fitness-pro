import { Component } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/ProFit-logo.png';

import styles from './navBar.module.css';

class Landing extends Component {
    render() {
        return <div className={styles.navContainer} >
            <div style={{ height: '40px', backgroundColor: '#000' }}>
            </div>
            <div className={styles.nav} style={{ height: '55px', backgroundColor: '#fff' }}>
                <div className={styles.leftList} >
                    <img src={logo} height='45px' alt='logo' style={{ paddingTop: '5px' }} />
                </div>
                <div className={styles.rightList}>
                    <span className={styles.listItemRightLanding} ><Link to="profile/update">Login</Link></span>
                    <span className={styles.listItemRightLanding} ><Link to="profile/update">Sign up</Link></span>
                </div>
            </div>

        </div>
    }
}

export default Landing;