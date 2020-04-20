import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { push, replace } from 'connected-react-router';
import { updatePhoneNumber, acceptTermsAndCondition, getUserDetails } from '../../redux/actions/user';
import { getOTPForPhoneNumber, validateOTP } from '../../redux/actions/login';

import NavBar from "../../components/navBar/NavBar"
import ProfileImage from '../../assets/images/profile.png';

import * as _ from 'lodash';

import styles from './SignupPage.module.css';
import { TANDC_TEXT } from '../../config/termsAndCondition';

class SignupPage extends Component {
    formref = null;
    constructor(props) {
        super(props);
        this.state = {
            editStep: 1,
            newImageFile: null,
            newImageBase64: null,
            getOTPTriggered: false,
        };
        if (this.props.userDetails.phoneNumber !== null) {
            this.state.editStep = 2;
        }
    }

    componentDidMount() {
        if (this.props.userDetails && this.props.userDetails.TandCAccepted) {
            this.props.pushRoute('/profile/update', { fromSignup: true });
        } else {
            this.props.getUserDetails();
        }
    }
    static getDerivedStateFromProps(newProps, state) {
        if (newProps.getOTPTriggered != state.getOTPTriggered) {
            return { getOTPTriggered: newProps.getOTPTriggered };
        } else {
            return null;
        }
    }
    componentDidUpdate(prevProps) {
        if (this.props.userDetails && this.props.userDetails.TandCAccepted) {
            this.props.pushRoute('/profile/update', { fromSignup: true });
        }

        if (this.props.profileSignupStep === -1 && this.props.profileSignupComplete) {
            this.props.pushRoute('/profile/update', { fromSignup: true });
        }

        if (this.props.verifyPhoneError && this.props.verifyPhoneError != prevProps.verifyPhoneError) {
            alert(this.props.verifyPhoneError.message || "Something went Wrong with Phone Update. Please Retry");
            this.clearPhoneNumberContent();
            if(this.props.verifyPhoneError.code !== "auth/invalid-verification-code" && this.props.verifyPhoneError.code !== "auth/missing-verification-code" ) {
                this.clearOTPContent();
            }
        }
    }
    getOTP = () => {
        let phoneNumberField = document.getElementById("phoneNumberInputField");
        let phoneNumber = phoneNumberField && phoneNumberField.value;
        if (phoneNumber) {
            this.props.getOTPForPhoneNumber(phoneNumber, "recaptcha-container");
        } else {
            alert("Enter Phone Number");
        }
    }
    submitOTP = () => {
        let phoneNumberField = document.getElementById("phoneNumberInputField");
        let phoneNumber = phoneNumberField && phoneNumberField.value;
        let phoneNumberOTPField = document.getElementById("phoneNumberOTPInputField");
        let OTP = phoneNumberOTPField && phoneNumberOTPField.value;
        if (phoneNumber && OTP) {
            this.props.validateOTP(phoneNumber, OTP);
        }
    }
    clearPhoneNumberContent = () => {
        let phoneNumberField = document.getElementById("phoneNumberInputField");
        phoneNumberField.value = null;
    }
    clearOTPContent = () => {
        let phoneNumberOTPField = document.getElementById("phoneNumberOTPInputField");
        phoneNumberOTPField.value = null;
    }
    acceptTandC = () => {
        let tncCheckField = document.getElementById("tandCheckbox");
        let tncChecked = tncCheckField && tncCheckField.checked;
        if (tncChecked) {
            this.props.acceptTermsAndCondition(tncChecked);
        }
    }
    renderEditContent = () => {
        let userDetails = this.props.currentUser || {};
        switch (this.props.profileSignupStep) {
            case -1:
                return <Fragment></Fragment>
            case 2: return (
                <div className={styles.TandCContainer}>
                    <div className={styles.TandCHeader}>Terms And Conditions</div>
                    <div className={styles.TandCText}>{TANDC_TEXT}</div>
                    <div className={styles.TandCCheckContainer}>I have read the above and agree to the terms and conditions <input type="checkbox" id="tandCheckbox" /> </div>
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
                                    <textarea maxLength={10} rows={"1"} className={styles.inputPhoneNumber} autoFocus id="phoneNumberInputField"></textarea></div>
                                <div className={styles.OTPButton} onClick={this.getOTP}>Get OTP</div>
                            </div>
                            <div id="recaptcha-container"></div>
                            {this.state.getOTPTriggered ? (
                                <div className={styles.EnterOTPLayer}>
                                    <textarea maxLength={6} rows={"1"} className={styles.inputOTP} id="phoneNumberOTPInputField"></textarea>
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
        getOTPTriggered: state.login.getOTPTriggered,
        verifyPhoneError: state.signup.verifyPhoneError,
        currentUser: state.signup.currentUser,
        userDetails: state.user.details
    }
};
const mapDispatchToProps = {
    pushRoute: push,
    replaceRoute: replace,
    getUserDetails,
    getOTPForPhoneNumber,
    validateOTP,
    updatePhoneNumber,
    acceptTermsAndCondition: acceptTermsAndCondition,
};
export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);