import { Component } from 'react';
import React from 'react';

import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import { showLoginModal, showSignupModal } from '../../redux/actions/modal';

import FitVibLogo from '../FitVibLogo/FitVibLogo';

import styles from './navBar.module.css';

class Landing extends Component {
    render() {
        return <div className={styles.navContainer} >
            <div style={{ height: '50px', backgroundColor: '#000' }}>
            </div>
            <div className={styles.nav} style={{ height: '60px', backgroundColor: '#fff' }}>
                <div className={styles.leftList} >
                    <FitVibLogo color={"#000"} />
                </div>
                <div className={styles.rightList}>
                    <span className={styles.listItemRightLanding} onClick={this.props.showLoginModal} >Login</span>
                    <span className={styles.listItemRightLanding} onClick={this.props.showSignupModal} >Sign up</span>
                </div>
            </div>

        </div>
    }
}

const mapStateToProps = (state, ownProps) => ({
});
const mapDispatchToProps = {
    pushRoute: push,
    showLoginModal,
    showSignupModal

};
export default connect(mapStateToProps, mapDispatchToProps)(Landing);