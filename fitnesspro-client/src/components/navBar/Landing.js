import { Component } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import logo from '../../assets/images/ProFit-logo.png';

import styles from './navBar.module.css';

class Landing extends Component {
    render() {
        return <div className={styles.navContainer} >
            <div style={{ height: '50px', backgroundColor: '#000' }}>
            </div>
            <div className={styles.nav} style={{ height: '60px', backgroundColor: '#fff' }}>
                <div className={styles.leftList} >
                    <img src={logo} height='45px' alt='logo' />
                </div>
                <div className={styles.rightList}>
                    <span className={styles.listItemRightLanding} ><Link to="profile/update">Login</Link></span>
                    <span className={styles.listItemRightLanding} ><Link to="profile/update">Sign up</Link></span>
                </div>
            </div>

        </div>
    }
}

const mapStateToProps = (state, ownProps) => ({
});
const mapDispatchToProps = {
    pushRoute: push
};
export default connect(mapStateToProps, mapDispatchToProps)(Landing);