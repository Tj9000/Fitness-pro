import { Component } from 'react';
import React from 'react';
import Modal from 'react-modal';

import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import { MODALSCREEN } from '../../config/modal';

import styles from './LoadingModal.module.css';

class LoadingModal extends Component {
  render() {
    return (
      <Modal
        isOpen={this.props.showModal}
        onRequestClose={this.props.closeModal}
        className={styles.LoadingModal}
        contentLabel="Loading"
        ariaHideApp={false}>

        {/* <div className={styles.loadingIconContainer}>
          <Icon name="spinner" font="FontAwesome" size={32} color={"#000"} className={styles.loadingIconClass}></Icon>
        </div> */}
        <div className={styles.loader}></div>

      </Modal>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  showModal: state.modal.showModal === MODALSCREEN.LOADING
});
const mapDispatchToProps = {
  pushRoute: push,
};
export default connect(mapStateToProps, mapDispatchToProps)(LoadingModal);