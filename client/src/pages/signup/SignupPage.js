import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { push, replace } from 'connected-react-router';
import { updatePhoneNumber, acceptTermsAndCondition } from '../../redux/actions/user';

import Icon from 'react-web-vector-icons';

import NavBar from "../../components/navBar/NavBar"
import ProfileImage from '../../assets/images/profile.png';

import * as _ from 'lodash';

import styles from './SignupPage.module.css';
import { TANDC_TEXT } from '../../config/termsAndCondition';

import { validateUserInput } from '../../helpers/userProfileHelper';

class SignupPage extends Component {
    formref = null;
    state = {
        editStep: 1,
        newImageFile: null,
        newImageBase64: null,
        getOTPTriggered: false,
    };

    componentDidUpdate() {
        if (this.props.profileSignupStep === -1 && this.props.profileSignupComplete) {
            this.props.pushRoute('/profile/update');
        }
    }
    getOTP = () => {
        this.setState({ getOTPTriggered: true })
    }
    submitOTP = () => {
        let phoneNumber;
        this.props.updatePhoneNumber(phoneNumber)
    }
    acceptTandC = () => {
        let tncCheck;
        this.props.acceptTermsAndCondition(tncCheck)
    }
    renderEditContent = () => {
        let userDetails = this.props.currentUser || {};
        console.log(userDetails)
        switch (this.props.profileSignupStep) {
            case -1:
                return <Fragment></Fragment>
            case 2: return (
                <div className={styles.TandCContainer}>
                    <div className={styles.TandCHeader}>Terms And Conditions</div>
                    <div className={styles.TandCText}>{TANDC_TEXT}</div>
                    <div className={styles.TandCCheckContainer}>I have read the above and agree to the terms and conditions <input type="checkbox" /> </div>
                    <div className={styles.OTPButton} onClick={this.acceptTandC}>Accept &amp; Proceed</div>
                </div>
            );
            case 1: return (
                <Fragment>
                    <div className={styles.signupHeader}>
                        REACH YOUR<br />GOALS WITH US
                        <div className={styles.signupHeaderUnderline} />
                    </div>
                    <div className={styles.signupContainer}>
                        <div className={styles.profileContent}>
                            <div className={styles.ProfileImageContainer}>
                                <img src={ProfileImage} alt={"Profile Pic"} className={styles.ProfileImage} width={"150px"} height={"150px"}></img>
                            </div>
                            <div className={styles.ProfileName}>{userDetails.displayName}</div>
                            <div className={styles.ProfileEmail}>{userDetails.email || 'No Email'}</div>
                            <div className={styles.ProfilePhonenumber}>{userDetails.phoneNumber || 'No Phone Number'}</div>
                        </div>
                        <div className={styles.signupContent}>
                            <div className={[styles.signupContentList, styles.signupContentListname].join(' ')}>Hi &nbsp;<span className={styles.signupContentDisplayName}> {userDetails.displayName} </span>, Signup with us to continue...</div>
                            <div className={[styles.signupContentList, styles.signupContentListEmail].join(' ')}>Email : &nbsp; {userDetails.email} </div>
                            <div className={[styles.signupContentList, styles.signupContentListPhoneNumber].join(' ')}>Mobile Number : &nbsp;
                            <div className={styles.inputPhoneNumberContainer}>
                                    <textarea maxLength={10} rows={"1"} className={styles.inputPhoneNumber} autoFocus></textarea></div>
                                <div className={styles.OTPButton} onClick={this.getOTP}>Get OTP</div>

                            </div>
                            {this.state.getOTPTriggered ? (
                                <div className={styles.EnterOTPLayer}>
                                    <textarea maxLength={6} rows={"1"} className={styles.inputOTP}></textarea>
                                    <div className={styles.OTPButton} onClick={this.submitOTP}>Submit OTP</div>
                                </div>
                            )
                                : null}
                        </div>
                    </div>
                </Fragment>
            )
            default:
                return (<Fragment>
                    Something went wrong. Please reload.
                </Fragment>);
        }
    }

    nextButton = () => {
        switch (this.props.profileSignupStep) {
            case 1:
                if (this.checkFormValidation()) {
                    let valuesToUpdate = this.getChangedFormValues();
                    let invalidations = _.pickBy(valuesToUpdate, (v, k) => !validateUserInput(k, v));
                    if (!_.size(invalidations)) {
                        this.props.updateUserDetails(this.getChangedFormValues())
                    }
                    else {
                        alert(`Invalid ${Object.keys(invalidations).join(', ')}.`)
                    }
                } else {
                    alert("Please check Validity of the inputs"); //TODO handle input error
                }
                return;
            case 2:
                this.props.acceptTermsAndCondition(this.state.tAndCAccepted);
                return;
            default: break;
        }
    }
    render() {
        return (
            <div className="pageMainContainer">
                <NavBar currentPageHead="Signup" />
                <div className={styles.contentContainer}>
                    {/* <div className={styles.contentSubContainer}> */}

                    <this.renderEditContent />
                    {/* </div> */}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        profileSignupComplete: state.signup.profileSignupComplete,
        profileSignupStep: state.signup.profileSignupStep,
        currentUser: state.signup.currentUser,
        userDetails: state.user.details
    }
};
const mapDispatchToProps = {
    pushRoute: push,
    replaceRoute: replace,
    updatePhoneNumber,
    acceptTermsAndCondition: acceptTermsAndCondition,
};
export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);