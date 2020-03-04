import React, { Component } from "react";
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import FitProfilePic from '../../assets/images/fitProfilePic.png';
import { ListInput } from "../../components/input/ListInput";

import styles from './ProfilePage.module.css';

class Update extends Component {
    formref = null;

    getFormValues = () => {
        if (this.formref) {
            let values = this.formref.getValues()
            console.log(values);
        }
    }

    cancelEdit = () => {
        this.props.pushRoute("/profile");
    }

    render() {
        let InputListData = [
            { label: 'Name', type: 'text', defaultValue: this.props.userDetails && this.props.userDetails.name },
            { label: 'Age', type: 'number', defaultValue: this.props.userDetails && this.props.userDetails.age },
            { label: 'Gender', type: 'radio', options: ['Male', 'Female', 'Other'], defaultValue: this.props.userDetails && this.props.userDetails.gender },
            { label: 'Height', type: 'number', defaultValue: this.props.userDetails && this.props.userDetails.height },
            { label: 'Weight', type: 'number', defaultValue: this.props.userDetails && this.props.userDetails.weight },
            { label: 'Email', type: 'email', defaultValue: this.props.userDetails && this.props.userDetails.email },
            { label: 'Phone', type: 'text', defaultValue: this.props.userDetails && this.props.userDetails.phone },
            { label: 'City', type: 'text', defaultValue: this.props.userDetails && this.props.userDetails.city },
            { label: 'Zipcode', type: 'number', defaultValue: this.props.userDetails && this.props.userDetails.zipCode },
            { label: 'Gym Access', type: 'text', defaultValue: this.props.userDetails && this.props.userDetails.gymAccess },
            { label: 'Target', type: 'text', defaultValue: this.props.userDetails && this.props.userDetails.target },
            { label: 'Language Preference', type: 'text', defaultValue: this.props.userDetails && this.props.userDetails.languagePref }
        ];
        return (<div className={styles.profileContentContainer}>
            <div className={styles.profileContentSubContainer}>
                <div profileContentLeftList>
                    <ListInput inputs={InputListData}
                        ref={ref => this.formref = ref}
                    />
                </div>

                <div className={styles.profileContentRightList}>
                    <div>
                        <img classname={styles.profileImage} src={FitProfilePic}></img>
                    </div>
                    <div className={styles.profileButtonContainer}>
                        <button onClick={this.getFormValues} className={styles.button}>Save</button>
                        <button onClick={this.cancelEdit} className={styles.button}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>)
    }
}

const mapStateToProps = (state, ownProps) => ({
    userDetails: state.user.details
});
const mapDispatchToProps = {
    pushRoute: push
};
export default connect(mapStateToProps, mapDispatchToProps)(Update);