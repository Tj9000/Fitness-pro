import React, { Component } from "react";
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import { ListTableView } from "../../components/text/ListTableView";

import FitProfilePic from '../../assets/images/fitProfilePic.png';
import * as _ from "lodash";

import styles from '../../assets/css/ProfilePage.module.css';

class View extends Component {

    displayUpdatePage = () => {
        this.props.pushRoute('/membership/update')
    }

    viewListData = [
        { label: 'Activated Date', type: 'date', value: this.props.membershipDetails && this.props.membershipDetails.activatedDate },
        { label: 'Expiration date', type: 'date', value: this.props.membershipDetails && this.props.membershipDetails.exprationDate },
        { label: 'Price', value: this.props.membershipDetails && this.props.membershipDetails.price },
        { label: 'Payment Mode', value: this.props.membershipDetails && this.props.membershipDetails.paymentMode },
        { label: 'No. of weeks', value: this.props.membershipDetails && this.props.membershipDetails.noOfWeeks },
        { label: 'Auto Renewal', value: this.props.membershipDetails && this.props.membershipDetails.autoRenewal },
        { label: 'Rewards', value: this.props.membershipDetails && this.props.membershipDetails.rewards },
        { label: 'Referal Link', value: this.props.membershipDetails && this.props.membershipDetails.referralLink },
        { label: 'Card Info', value: this.props.membershipDetails && this.props.membershipDetails.cardInfo },
        { label: 'Phone Pay Info', value: this.props.membershipDetails && this.props.membershipDetails.phonePayInfo },
    ];
    render() {
        return (
            <div className={styles.profileContentContainer}>
                <div className={styles.profileContentSubContainer} >
                    <div className={styles.profileContentLeftList}>
                        <ListTableView
                            data={_.filter(this.viewListData, (e, i) => e != null)}
                        />
                    </div>

                    <div className={styles.profileContentRightList}>
                        <div className={styles.profileImageContainer}>
                            <img className={styles.profileImage} src={FitProfilePic}></img>
                        </div>
                        <div className={styles.profileButtonContainer}>
                            <button onClick={this.displayUpdatePage} className={styles.button}>Edit</button>
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
export default connect(mapStateToProps, mapDispatchToProps)(View);