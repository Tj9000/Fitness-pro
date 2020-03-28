import { Component } from 'react';
import React from 'react';
import Modal from 'react-modal';

import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import SimpleLoader from '../loader/SimpleLoader';

import { MODALSCREEN } from '../../config/modal';

import styles from './LogoutModal.module.css';

class LogoutModal extends Component {
  render() {
    return (
      <Modal
        isOpen={this.props.showModal}
        onRequestClose={this.props.closeModal}
        className={styles.LogoutModalContentClass}
        contentLabel="Logout"
        ariaHideApp={false}>

        <div className={styles.logoutMainContent}>
          <div>Logging Out</div>
          <SimpleLoader/>

        </div>

      </Modal>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  showModal: state.modal.showModal === MODALSCREEN.LOGOUT
});
const mapDispatchToProps = {
  pushRoute: push,
};
export default connect(mapStateToProps, mapDispatchToProps)(LogoutModal);