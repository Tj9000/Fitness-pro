import React, { Component } from "react";
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import Icon from 'react-web-vector-icons';
import FitProfilePic from '../../assets/images/fitProfilePic.png';
import { ListInput } from "../../components/input/ListInput";

import styles from '../../assets/css/ProfilePage.module.css';

class Update extends Component {
    formref = null;
    state = {
        newImageFile: null,
        newImageBase64: null,
    };

    getFormValues = () => {
        if (this.formref) {
            let values = this.formref.getValues()
            console.log(values);
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
            { label: 'Country', type: 'text', readOnly: true, defaultValue: this.props.userDetails && this.props.userDetails.country },
            { label: 'City', type: 'text', defaultValue: this.props.userDetails && this.props.userDetails.city },
            { label: 'Zipcode', type: 'number', defaultValue: this.props.userDetails && this.props.userDetails.zipCode },
            { label: 'Gym Access', type: 'text', defaultValue: this.props.userDetails && this.props.userDetails.gymAccess },
            { label: 'Target', type: 'text', defaultValue: this.props.userDetails && this.props.userDetails.target },
            { label: 'Language Preference', type: 'text', readOnly: true, defaultValue: this.props.userDetails && this.props.userDetails.languagePref }
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
                        <img className={styles.profileImageEdit} src={this.state.newImageBase64 || FitProfilePic}></img>
                        <span className={styles.profileImageEditIcon}><Icon name="edit" font="MaterialIcons" size={32} color={'black'}></Icon></span>
                    </div>
                    <div className={styles.profileButtonContainer}>
                        <button onClick={this.getFormValues} className={styles.button}>Save</button>
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
    pushRoute: push
};
export default connect(mapStateToProps, mapDispatchToProps)(Update);