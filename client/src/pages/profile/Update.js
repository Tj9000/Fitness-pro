import React, { Component } from "react";
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { updateUserDetails, updateUserImage } from '../../redux/actions/user';

import Icon from 'react-web-vector-icons';
import ProfilePic from '../../assets/images/profile.png';
import { ListInput } from "../../components/input/ListInput";

import * as _ from 'lodash';

import styles from '../../assets/css/ProfilePage.module.css';
import { LANG_PREF_DEFAULT, COUNTRY_DEFAULT } from '../../config/defaults';
import { validateUserInput } from '../../helpers/userProfileHelper';

class Update extends Component {
    formref = null;
    state = {
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
            val.zipCode = values['Zipcode'];
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
            return v && (userDetails[k] !== v);
        });
        return reducedValues;
    }

    checkFormValidation = () => {
        let val = {};
        if (this.formref) {
            let validations = this.formref.getValidationResult();
            val.name = validations['Name'];
            val.age = validations['Age'];
            val.gender = validations['Gender'];
            val.height = validations['Height'];
            val.weight = validations['Weight'];
            val.email = validations['Email'];
            val.phone = validations['Phone'];
            val.country = validations['Country'];
            val.city = validations['City'];
            val.zipCode = validations['Zipcode'];
            val.gymAccess = validations['Gym Access'];
            val.target = validations['Target'];
            val.languagePref = validations['Language Preference'];
        }
        let invalidRes = _.pickBy(val, (v, k) => {
            return !(v && v.validity.valid)
        })
        //TODO: handle Invalid Res

        return _.size(invalidRes) === 0;
    }

    saveEdit = () => {
        if (this.checkFormValidation()) {
            let valuesToUpdate = this.getChangedFormValues();
            let invalidations = _.pickBy(valuesToUpdate, (v, k) => !validateUserInput(k, v));
            if (!_.size(invalidations)) {
                this.props.updateUserDetails(this.getChangedFormValues(), '/profile')
            }
            else {
                alert(`Invalid ${Object.keys(invalidations).join(', ')}.`)
            }
        } else {
            alert("Please check Validity of the inputs"); //TODO handle input error
        }
    }
    cancelEdit = () => {
        this.props.pushRoute("/profile");
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

    render() {
        let InputListData = [
            { label: 'Name', type: 'text', readOnly: true, defaultValue: this.props.userDetails && this.props.userDetails.name },
            { label: 'Age', type: 'number', defaultValue: this.props.userDetails && this.props.userDetails.age },
            { label: 'Gender', type: 'radio', options: ['Male', 'Female', 'Other'], defaultValue: this.props.userDetails && this.props.userDetails.gender },
            { label: 'Height', type: 'number', defaultValue: this.props.userDetails && this.props.userDetails.height },
            { label: 'Weight', type: 'number', defaultValue: this.props.userDetails && this.props.userDetails.weight },
            { label: 'Email', type: 'email', readOnly: true, defaultValue: this.props.userDetails && this.props.userDetails.email },
            { label: 'Phone', type: 'text', readOnly: true, defaultValue: this.props.userDetails && this.props.userDetails.phone },
            { label: 'Country', type: 'text', readOnly: true, defaultValue: (this.props.userDetails && this.props.userDetails.country) || COUNTRY_DEFAULT },
            { label: 'City', type: 'text', defaultValue: this.props.userDetails && this.props.userDetails.city },
            { label: 'Zipcode', type: 'number', defaultValue: this.props.userDetails && this.props.userDetails.zipCode },
            { label: 'Gym Access', type: 'text', defaultValue: this.props.userDetails && this.props.userDetails.gymAccess },
            { label: 'Target', type: 'text', defaultValue: this.props.userDetails && this.props.userDetails.target },
            { label: 'Language Preference', type: 'text', readOnly: true, defaultValue: (this.props.userDetails && this.props.userDetails.languagePref) || LANG_PREF_DEFAULT }
        ];
        return (<div className={styles.profileContentContainer}>
            <div className={styles.profileContentSubContainer}>
                <div className={styles.profileContentLeftList}>
                    <ListInput inputs={InputListData}
                        ref={ref => this.formref = ref}
                    />
                </div>

                <div className={styles.profileContentRightList}>
                    <div className={styles.profileImageEditContainer} onClick={this._chooseImage}>
                        <img className={styles.profileImageEdit} src={this.state.newImageBase64 || ProfilePic} alt={'Profile Pic'}></img>
                        <span className={styles.profileImageEditIcon}><Icon name="edit" font="MaterialIcons" size={32} color={'black'}></Icon></span>
                    </div>
                    <div className={styles.profileButtonContainer}>
                        <button onClick={this.saveEdit} className={styles.button}>Save</button>
                        <button onClick={this.cancelEdit} className={styles.button}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>);
    }
}

const mapStateToProps = (state, ownProps) => ({
    userDetails: state.user.details
});
const mapDispatchToProps = {
    pushRoute: push,
    updateUserImage: updateUserImage,
    updateUserDetails: updateUserDetails,
};
export default connect(mapStateToProps, mapDispatchToProps)(Update);