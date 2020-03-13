import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { push, replace } from 'connected-react-router';
import { updateUserDetails, updateUserImage, acceptTermsAndCondition } from '../../redux/actions/user';

import Icon from 'react-web-vector-icons';
import FitProfilePic from '../../assets/images/fitProfilePic.png';

import NavBar from "../../components/navBar/NavBar"
import { ListInput } from "../../components/input/ListInput";

import * as _ from 'lodash';

import styles from '../../assets/css/ProfilePage.module.css';
import { LANG_PREF_DEFAULT, COUNTRY_DEFAULT } from '../../config/defaults';

class SignupPage extends Component {
    formref = null;
    state = {
        editStep: 1,
        newImageFile: null,
        newImageBase64: null,
    };

    getFormValues = () => {
        if (this.formref) {
            let values = this.formref.getValues();
            let val = {};
            val.name = values['Name'];
            val.age = values['Age'];
            val.gender = values['Gender'];
            val.height = values['Height'];
            val.weight = values['Weight'];
            val.email = values['Email'];
            val.phone = values['Phone'];
            val.country = values['Country'];
            val.city = values['City'];
            val.zipcode = values['Zipcode'];
            val.gymAccess = values['Gym Access'];
            val.target = values['Target'];
            val.languagePref = values['Language Preference'];
            return val;
        }
    }
    getChangedFormValues = () => {
        let userDetails = this.props.userDetails || {};
        let values = this.getFormValues()
        let reducedValues = _.pickBy(values, (v, k) => {
            return v && (userDetails[k] != v);
        });
        return reducedValues;
    }
    _handleImageChange = (e) => {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {
            this.setState({
                newImageFile: file,
                newImageBase64: reader.result
            }, () => { console.log(this.state) });
        }
        reader.readAsDataURL(file)
    }

    _chooseImage = (e) => {
        let inputNode = document.createElement('input');
        inputNode.type = 'file';
        inputNode.onchange = this._handleImageChange;
        inputNode.click();
    }

    renderEditContent = () => {
        let userDetails = this.props.userDetails || {};
        let InputListData = [
            { label: 'Name', type: 'text', readOnly: true, defaultValue: userDetails.name },
            { label: 'Age', type: 'number', defaultValue: userDetails.age },
            { label: 'Gender', type: 'radio', options: ['Male', 'Female', 'Other'], defaultValue: userDetails.gender },
            { label: 'Height', type: 'number', defaultValue: userDetails.height },
            { label: 'Weight', type: 'number', defaultValue: userDetails.weight },
            { label: 'Email', type: 'email', readOnly: true, defaultValue: userDetails.email },
            { label: 'Phone', type: 'text', readOnly: true, defaultValue: userDetails.phone },
            { label: 'Country', type: 'text', readOnly: true, defaultValue: userDetails.country || COUNTRY_DEFAULT },
            { label: 'City', type: 'text', defaultValue: userDetails.city },
            { label: 'Zipcode', type: 'number', defaultValue: userDetails.zipCode },
            { label: 'Gym Access', type: 'text', defaultValue: userDetails.gymAccess },
            { label: 'Target', type: 'text', defaultValue: userDetails.target },
            { label: 'Language Preference', type: 'text', readOnly: true, defaultValue: userDetails.languagePref || LANG_PREF_DEFAULT },
        ];
        switch (this.props.profileSignupStep) {
            case -1: if (this.props.profileSignupComplete) this.props.pushRoute('/profile'); //Move this out of Render
                return <Fragment></Fragment>
            case 3: return (<div> Terms And Conditions</div>);
            case 2:
                return (<div className={styles.profileImageEditContainer} onClick={this._chooseImage}>
                    <img className={styles.profileImageEdit} src={this.state.newImageBase64 || FitProfilePic}></img>
                    <span className={styles.profileImageEditIcon}><Icon name="edit" font="MaterialIcons" size={32} color={'black'}></Icon></span>
                </div>);
            case 1:
            default:
                return (<ListInput inputs={InputListData}
                    ref={ref => this.formref = ref}
                />);
        }
    }

    nextButton = () => {
        switch (this.props.profileSignupStep) {
            case 1:
                this.props.updateUserDetails(this.getChangedFormValues())
                return;
            case 2:
                this.props.updateUserImage(this.newImageBase64)
                return;
            case 3:
                this.props.acceptTermsAndCondition(this.state.tAndCAccepted);
                return;
            default: break;
        }
    }
    render() {
        return (
            <div className="pageMainContainer">
                <NavBar currentPageHead="Signup" />
                <div className={styles.profileContentContainer}>
                    <div className={styles.profileContentSubContainer}>
                        <div className={styles.profileContentLeftList}>
                            <this.renderEditContent />
                        </div>

                        <div className={styles.profileContentRightList}>
                            <div className={styles.SingleActionIcon}>
                                <div className={styles.IconContainer} onClick={this.nextButton}>
                                    <Icon name="arrow-right-circle" font="SimpleLineIcons" size={64} color={'black'} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        profileSignupComplete: state.signup.profileSignupComplete,
        profileSignupStep: state.signup.profileSignupStep,
        userDetails: state.user.details
    }
};
const mapDispatchToProps = {
    pushRoute: push,
    replaceRoute: replace,
    updateUserImage: updateUserImage,
    updateUserDetails: updateUserDetails,
    acceptTermsAndCondition: acceptTermsAndCondition,
};
export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);