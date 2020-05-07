import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { push, replace } from 'connected-react-router';
import { getAllTrainers } from '../../redux/actions/trainer';

import NavBar from '../../components/navBar/NavBar';
import { IconDropdown } from '../../components/dropdown/IconDropdown';
import SelectTrainerCard from '../../components/card/SelectTrainerCard';

import { COURSE_FILTERS } from '../../config/training';

import * as _ from 'lodash';

import styles from './SelectTraining.module.css';

class SelectTraining extends Component {
    programFromProp = (this.props.location && this.props.location.state && this.props.location.state.program && COURSE_FILTERS.PROGRAM[this.props.location.state.program])
    state = {
        selectedWorkoutProgram: this.programFromProp || COURSE_FILTERS.PROGRAM.National,
        selectedWorkoutStyle: COURSE_FILTERS.STYLE.Gym,
        selectedWorkoutGoal: COURSE_FILTERS.GOAL.WeightLoss,
        trainersListFiltered: []
    };

    componentDidMount() {
        this.props.getAllTrainers()
    }

    static getDerivedStateFromProps(props, state) {
        if (state.trainersList != props.trainersList) {
            return {
                trainersList: props.trainersList,
                trainersListFiltered: _.filter(props.trainersList, (trainer) =>
                    trainer.programCategory === state.selectedWorkoutProgram && trainer.styleCategory === state.selectedWorkoutStyle && trainer.goalCategory === state.selectedWorkoutGoal
                )
            };
        } else {
            return null;
        }
    }

    selectWorkoutProgram = (i) => {
        if (COURSE_FILTERS.PROGRAM[i]) {
            this.trainerFilter({
                selectedWorkoutProgram: COURSE_FILTERS.PROGRAM[i],
                selectedWorkoutStyle: this.state.selectedWorkoutStyle,
                selectedWorkoutGoal: this.state.selectedWorkoutGoal
            });
        }
    }
    selectWorkoutStyle = (i) => {
        if (COURSE_FILTERS.STYLE[i]) {
            this.trainerFilter({
                selectedWorkoutProgram: this.state.selectedWorkoutProgram,
                selectedWorkoutStyle: COURSE_FILTERS.STYLE[i],
                selectedWorkoutGoal: this.state.selectedWorkoutGoal
            });
        }
    }
    selectWorkoutGoal = (i) => {
        if (COURSE_FILTERS.GOAL[i]) {
            this.trainerFilter({
                selectedWorkoutProgram: this.state.selectedWorkoutProgram,
                selectedWorkoutStyle: this.state.selectedWorkoutStyle,
                selectedWorkoutGoal: COURSE_FILTERS.GOAL[i]
            });
        }
    }

    trainerFilter = ({
        selectedWorkoutProgram = this.state.selectedWorkoutProgram,
        selectedWorkoutStyle = this.state.selectedWorkoutStyle,
        selectedWorkoutGoal = this.state.selectedWorkoutGoal }) => {
        this.setState({
            selectedWorkoutProgram,
            selectedWorkoutStyle,
            selectedWorkoutGoal,
            trainersListFiltered: _.filter(this.state.trainersList, (trainer) =>
                trainer.programCategory === selectedWorkoutProgram && trainer.styleCategory === selectedWorkoutStyle && trainer.goalCategory === selectedWorkoutGoal
            )
        });
    }

    trainerRender = (props) => {
        return (
            <div className={styles.courseListItemContainer}>
                {props.trainer ? <SelectTrainerCard trainer={props.trainer} /> : 'nothing to show'}
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
                                buttonText={this.state.selectedWorkoutProgram || "Select Program"}
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
                                {_.size(this.state.trainersListFiltered) || 'No'} Results found:
                            </div>
                            {
                                _.size(this.state.trainersListFiltered) ? (
                                    <div className={styles.trainerListContent}>
                                        {_.map(this.state.trainersListFiltered, (trainer, i) => <this.trainerRender trainer={trainer} key={trainer.id} />)}
                                    </div>
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
        trainersList: state.trainer.trainersList
    }
};
const mapDispatchToProps = {
    pushRoute: push,
    replaceRoute: replace,
    getAllTrainers
};
export default connect(mapStateToProps, mapDispatchToProps)(SelectTraining);