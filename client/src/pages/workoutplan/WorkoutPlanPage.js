import React, { Component } from "react";
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import NavBar from "../../components/navBar/NavBar";
import { ListTableView } from "../../components/text/ListTableView";

import WorkoutPic from '../../assets/images/workoutpic-1.png';
import * as _ from "lodash";

import styles from '../../assets/css/ProfilePage.module.css';

class WorkoutPlanPage extends Component {


    displayUpdatePage = () => {
        this.props.pushRoute('/selecttrainer')
    }
    
    viewListData = [
        { label: 'Trainer', type: 'text', value: this.props.workoutPlanDetails && this.props.workoutPlanDetails.trainerName },
        { label: 'Target', type: 'text', value: this.props.workoutPlanDetails && this.props.workoutPlanDetails.target },
        { label: 'No Of Weeks', type: 'number', value: this.props.workoutPlanDetails && this.props.workoutPlanDetails.noOfWeeks },
        { label: 'Mode', type: 'text', value: this.props.workoutPlanDetails && this.props.workoutPlanDetails.mode },
        { label: 'Gym', type: 'text', value: this.props.workoutPlanDetails && this.props.workoutPlanDetails.gym },
        { label: 'Start Date', type: 'date', value: this.props.workoutPlanDetails && this.props.workoutPlanDetails.startDate },
        { label: 'End Date', type: 'date', value: this.props.workoutPlanDetails && this.props.workoutPlanDetails.endDate },
        { label: 'Program Name', type: 'text', value: this.props.workoutPlanDetails && this.props.workoutPlanDetails.programName },
        { label: 'Program Level', type: 'text', value: this.props.workoutPlanDetails && this.props.workoutPlanDetails.programLevel },
    ];

    render() {
        return (
            <div className="pageMainContainer">
                <NavBar currentPageHead="Workout Plan" />
                {/* View content */}
                <div className={styles.profileContentContainer}>
                    <div className={styles.profileContentSubContainer} >
                        <div className={styles.workoutContentLeftList}>
                            <ListTableView
                                data={_.filter(this.viewListData, (e, i) => e.label !== null)}
                            />
                            <div className={styles.profileButtonContainer}>
                                <button onClick={this.displayUpdatePage} className={styles.button}>Edit</button>
                            </div>
                        </div>

                        <div className={styles.workoutContentRightList}>
                            <div>
                                <img className={styles.workoutImage} src={WorkoutPic} alt={'Workout Pic'}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    workoutPlanDetails: state.user.workoutPlanDetails
});
const mapDispatchToProps = {
    pushRoute: push
};
export default connect(mapStateToProps, mapDispatchToProps)(WorkoutPlanPage);