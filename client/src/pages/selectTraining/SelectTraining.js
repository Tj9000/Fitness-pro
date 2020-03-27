import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { push, replace } from 'connected-react-router';
import { getAllCoursesList } from '../../redux/actions/training';

import NavBar from '../../components/navBar/NavBar';
import { IconDropdown } from '../../components/dropdown/IconDropdown';
import SelectTrainerCard from '../../components/card/SelectTrainerCard';

import { COURSE_FILTERS } from '../../config/training';

import * as _ from 'lodash';

import styles from './SelectTraining.module.css';

class SelectTraining extends Component {
    state = {
        selectedWorkoutProgram: COURSE_FILTERS.PROGRAM.National,
        selectedWorkoutStyle: COURSE_FILTERS.STYLE.Gym,
        selectedWorkoutGoal: COURSE_FILTERS.GOAL.WeightLoss
    };

    componentDidMount() {
        this.props.getAllCoursesList()
    }

    selectWorkoutProgram = (i) => {
        if (COURSE_FILTERS.PROGRAM[i]) {
            this.setState({ selectedWorkoutProgram: COURSE_FILTERS.PROGRAM[i] });
        }
    }
    selectWorkoutStyle = (i) => {
        if (COURSE_FILTERS.STYLE[i]) {
            this.setState({ selectedWorkoutStyle: COURSE_FILTERS.STYLE[i] });
        }
    }
    selectWorkoutGoal = (i) => {
        if (COURSE_FILTERS.GOAL[i]) {
            this.setState({ selectedWorkoutGoal: COURSE_FILTERS.GOAL[i] });
        }
    }

    courseRender = (props) => {
        return (
            <div className={styles.courseListItemContainer}>
                {props.course ? <SelectTrainerCard course={props.course} /> : 'nothing to show'}
            </div>
        );
    }

    render() {
        return (
            <div className="pageMainContainer">
                <NavBar currentPageHead="Training" />
                <div className={styles.contentContainer}>
                    <div className={styles.contentSubContainer}>
                        <div className={styles.contentHeaderContainer}>
                            <div className={styles.contentHeaderContainerLinewrap}>
                                <div className={styles.contentHeaderContainerLine} />
                            </div>
                            <div className={styles.contentHeaderContainerText}>
                                {this.state.selectedWorkoutProgram} Workouts
                            </div>

                        </div>
                        <div className={styles.filterContentContainer}>
                            <IconDropdown
                                buttonText={"Select Program"}
                                onClick={this.selectWorkoutProgram}
                                data={COURSE_FILTERS.PROGRAM}
                                selectedVal={this.state.selectedWorkoutProgram}
                            />

                            <IconDropdown
                                buttonText={this.state.selectedWorkoutStyle}
                                onClick={this.selectWorkoutStyle}
                                data={COURSE_FILTERS.STYLE}
                                selectedVal={this.state.selectedWorkoutStyle}
                            />

                            <IconDropdown
                                buttonText={this.state.selectedWorkoutGoal}
                                onClick={this.selectWorkoutGoal}
                                data={COURSE_FILTERS.GOAL}
                                selectedVal={this.state.selectedWorkoutGoal}
                            />
                        </div>
                        <div className={styles.resultContentContainer}>
                            <div className={styles.resultCountHead}>
                                {_.size(this.props.courses) || 'No'} Results found:
                            </div>
                            {
                                _.size(this.props.courses) ? (
                                    <Fragment>
                                        {_.map(this.props.courses, (course, i) => <this.courseRender course={course} key={course.courseId} />)}
                                    </Fragment>
                                ) : (
                                        <div className={styles.noResultsFound}>
                                            No Results found. Try changing the filters.
                                        </div>
                                    )
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        userDetails: state.user.details,
        courses: state.training.courses
    }
};
const mapDispatchToProps = {
    pushRoute: push,
    replaceRoute: replace,
    getAllCoursesList
};
export default connect(mapStateToProps, mapDispatchToProps)(SelectTraining);