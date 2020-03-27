import React, { Component } from "react";
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import FitProfilePic from '../../assets/images/fitProfilePic.png';
import { ListInput } from "../../components/input/ListInput";

import styles from '../../assets/css/ProfilePage.module.css';

class Update extends Component {
    formref = null;

    getFormValues = () => {
        if (this.formref) {
            let values = this.formref.getValues()
            console.log(values);
        }
    }

    cancelEdit = () => {
        this.props.pushRoute("/membership");
    }

    render() {
        let InputListData = [
            { label: 'Activated Date', type: 'date', readOnly: true, defaultValue: this.props.membershipDetails && this.props.membershipDetails.activatedDate },
            { label: 'Expiration date', type: 'date', readOnly: true, defaultValue: this.props.membershipDetails && this.props.membershipDetails.exprationDate },
            { label: 'Price', type: 'number', readOnly: true, defaultValue: this.props.membershipDetails && this.props.membershipDetails.price },
            { label: 'Payment Mode', type: 'text', defaultValue: this.props.membershipDetails && this.props.membershipDetails.paymentMode },
            { label: 'No. of weeks', type: 'number', readOnly: true, defaultValue: this.props.membershipDetails && this.props.membershipDetails.noOfWeeks },
            { label: 'Auto Renewal', type: 'radio', options: ['Yes', 'No'], defaultValue: this.props.membershipDetails && (this.props.membershipDetails.autoRenewal || 'No') },
            { label: 'Rewards', type: 'text', readOnly: true, defaultValue: this.props.membershipDetails && this.props.membershipDetails.rewards },
            { label: 'Referal Link', type: 'text', readOnly: true, defaultValue: this.props.membershipDetails && this.props.membershipDetails.referralLink },
            { label: 'Card Info', type: 'text', defaultValue: this.props.membershipDetails && this.props.membershipDetails.cardInfo },
            { label: 'Phone Pay Info', type: 'text', defaultValue: this.props.membershipDetails && this.props.membershipDetails.phonePayInfo },
        ];

        return (
            <div className={styles.profileContentContainer}>
                <div className={styles.profileContentSubContainer}>
                    <div profileContentLeftList>
                        <ListInput inputs={InputListData}
                            ref={ref => this.formref = ref}
                        />
                    </div>

                    <div className={styles.profileContentRightList}>
                        <div>
                            <img classname={styles.profileImage} src={FitProfilePic} alt={'Profile Pic'}></img>
                        </div>
                        <div className={styles.profileButtonContainer}>
                            <button onClick={this.getFormValues} className={styles.button}>Save</button>
                            <button onClick={this.cancelEdit} className={styles.button}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    membershipDetails: state.user.membershipDetails
});
const mapDispatchToProps = {
    pushRoute: push
};
export default connect(mapStateToProps, mapDispatchToProps)(Update);