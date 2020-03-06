import React, { Component } from "react";
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import { ListTableView } from "../../components/text/ListTableView";

import FitProfilePic from '../../assets/images/fitProfilePic.png';
import * as _ from "lodash";

import styles from '../../assets/css/ProfilePage.module.css';

class View extends Component {

    displayUpdatePage = () => {
        this.props.pushRoute('/profile/update')
    }

    viewListData = [
        { label: 'Name', value: this.props.userDetails && this.props.userDetails.name },
        { label: 'Age', value: this.props.userDetails && this.props.userDetails.age },
        { label: 'Gender', value: this.props.userDetails && this.props.userDetails.gender },
        { label: 'Height', value: this.props.userDetails && this.props.userDetails.height },
        { label: 'Weight', value: this.props.userDetails && this.props.userDetails.weight },
        { label: 'Email', value: this.props.userDetails && this.props.userDetails.email },
        { label: 'Phone', value: this.props.userDetails && this.props.userDetails.phone },
        { label: 'City', value: this.props.userDetails && this.props.userDetails.city },
        { label: 'Zipcode', value: this.props.userDetails && this.props.userDetails.zipCode },
        { label: 'Gym Access', value: this.props.userDetails && this.props.userDetails.gymAccess },
        { label: 'Target', value: this.props.userDetails && this.props.userDetails.target },
        { label: 'Language Preference', value: this.props.userDetails && this.props.userDetails.languagePref }
    ];
    render() {
        return (
            <div className={styles.profileContentContainer}>
                <div className={styles.profileContentSubContainer} >
                    <div className={styles.profileContentLeftList}>
                        <ListTableView
                            data={_.filter(this.viewListData, (e, i) => e.label != null)}
                        />
                    </div>

                    <div className={styles.profileContentRightList}>
                        <div>
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
    userDetails: state.user.details
});
const mapDispatchToProps = {
    pushRoute: push
};
export default connect(mapStateToProps, mapDispatchToProps)(View);