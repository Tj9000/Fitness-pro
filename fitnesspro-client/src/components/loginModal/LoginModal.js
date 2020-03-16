import { Component } from 'react';
import React from 'react';
// import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import Icon from 'react-web-vector-icons';

import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { hideLoginModal } from '../../redux/actions/modal';
import { loginUserWithPhoneNumber, loginUserWithGoogle } from '../../redux/actions/login';

import { MODALSCREEN } from '../../config/modal';

import styles from './LoginModal.module.css';

class LoginModal extends Component {
  loginWithPhone = () => {
    // this.props.loginUserWithPhoneNumber(this.state.phone);
  }
  phoneInputChange = (e) => {
    this.setState({ "phone": e.target.value });
  }
  loginWithGoogle = () => {
    this.props.loginUserWithGoogle();
  }

  render() {
    return (
      <Modal
        isOpen={this.props.showModal}
        onRequestClose={this.props.closeModal}
        className={styles.LoginModalContentClass}
        contentLabel="Login/Signup"
        ariaHideApp={false}>

        <div className={styles.loginHeader}>
          <div>Login/Signup</div>
          <div onClick={this.props.closeModal} className={styles.closeButton}><Icon name="close" font="MaterialIcons" size={32} color={'black'} /></div>
        </div>

        <div className={styles.loginMainContent}>

          <div className={styles.loginPhoneContent}>
            <div className={styles.loginPhoneContainer}>
              <input type="text" className={styles.phoneInputButton} placeholder="Enter Phone Number" id="loginPhoneNumber" onChange={this.phoneInputChange} disabled></input>
              <input type="button" className={styles.loginButton} onClick={this.loginWithPhone} value="Login" disabled></input>
            </div>

            <div>
              <a>Need Help?</a>
            </div>
          </div>

          <div className={styles.loginSocialMediaContent}>
            <div className={styles.socialMediaButtonsContainer}>
              <div type="button" className={[styles.socialMediaSigninButton, styles.googleSigninButton].join(' ')} onClick={this.loginWithGoogle}>
                <Icon name="google" font="FontAwesome" size={14} color={'#fff'} style={{ padding: '5px' }} /> Signin with Google
            </div>
              <div type="button" className={[styles.socialMediaSigninButton, styles.facebookSigninButton].join(' ')} onClick={this.loginWithGoogle}>
                <Icon name="facebook" font="FontAwesome" size={14} color={'#fff'} style={{ padding: '5px' }} /> Signin with Facebook
              </div>
            </div>

            <div>
            </div>
          </div>

        </div>

      </Modal>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  showModal: state.modal.showModal == MODALSCREEN.LOGIN
});
const mapDispatchToProps = {
  pushRoute: push,
  closeModal: hideLoginModal,
  loginUserWithPhoneNumber,
  loginUserWithGoogle,
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);