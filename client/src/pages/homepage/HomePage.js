import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { getMyCoursesList, getExercises } from '../../redux/actions/training';
import NutritionCard from '../../components/card/NutritionCard';

import Video from '../../components/video/Video';
import styles from './homepage.module.css'
import NavBar from '../../components/navBar/NavBar'
import SideNavBarHome from '../../components/sidenavbar/SideNavBarHome';
import SimpleLoader from '../../components/loader/SimpleLoader';

import * as _ from 'lodash';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCourse: {},
            courseId: null,
            subscriptionId: null
        }
        this.defaultCourseSelected = false;
    }
    componentDidMount() {
        this.props.getMyCoursesList();
    }

    updateContainer = ({ course = {}, subscriptionId }) => {
        this.setState({
            selectedCourse: course,
            courseId: course.courseId,
            subscriptionId: subscriptionId
        }, () => console.log("homepage state : ", this.state)
        )

        this.props.getExercises(subscriptionId);
    }

    refreshExercise = () => {
        this.props.getExercises(this.state.subscriptionId);
    }

    componentDidUpdate() {
        if (!this.defaultCourseSelected && !this.state.courseId && _.size(this.props.myCourseList)) {
            let [subscriptionId, course] = _.toPairs(this.props.myCourseList)[0];
            this.defaultCourseSelected = true;
            this.updateContainer({ course, subscriptionId });
        }
    }

    render() {
        let course = this.state.selectedCourse;
        let exercise = this.props.selectedCourseExercise || {};
        let dietPlan = {
            morning: { time: 'Morning', plan: exercise.dietPlan && exercise.dietPlan.morning },
            afternoon: { time: 'Afternoon', plan: exercise.dietPlan && exercise.dietPlan.afternoon },
            evening: { time: 'Evening', plan: exercise.dietPlan && exercise.dietPlan.evening },
            night: { time: 'Night', plan: exercise.dietPlan && exercise.dietPlan.night },
        };

        return (
            <div className="pageMainContainer">
                <NavBar currentPageHead="Today's Workouts " />
                <div className={styles.homeContainer}>
                    {
                        this.props.selectedCourseExerciseError ? (
                            <div className={styles.selectedCourseErrorContainer}>
                                <div className={styles.selectedCourseExerciseErrorText}>{this.props.selectedCourseExerciseError}</div>
                                <button className={styles.selectedCourseExerciseErrorButton} onClick={this.refreshExercise}>Refresh</button>
                            </div>
                        ) : (
                                !_.size(exercise) ? (
                                    <div className={styles.loader}>
                                        <SimpleLoader size={200} />
                                    </div>
                                ) : (
                                        <div className={styles.exerciseContainer}>

                                            <div className={styles.exerciseTitleContainer}>
                                                <div className={styles.titleExerciseName}>{exercise.exerciseName}</div>
                                                <div className={styles.titleCourseName}>{course.name}</div>
                                            </div>

                                            <div className={styles.homepageVideoContainer} >
                                                <div className={styles.videoContainer}>
                                                    <div className={styles.videoTitle}>
                                                        {exercise.week ? <span>Week&nbsp;<span className={styles.videoTitleNumber}>{exercise.week}</span></span> : null}
                                                        {exercise.week && exercise.day ? <span>&nbsp;-&nbsp;</span> : null}
                                                        {exercise.day ? <span>Day&nbsp;<span className={styles.videoTitleNumber}>{exercise.day}</span></span> : null}
                                                    </div>
                                                    <Video url={exercise.exerciseUrl} />
                                                    <div className={styles.videoDescripionContainer}>
                                                        <div className={styles.videoDescripionName}>{exercise.exerciseName}</div>
                                                        <div className={styles.videoDescripion}>{exercise.exerciseDescription}</div>
                                                    </div>

                                                </div>

                                            </div>

                                            <div className={styles.stepsToPerformMainContainer}>
                                                <div className={styles.stepsToPerformContainer}>
                                                    <div className={styles.stepsToPerformHeader}>Steps to perform</div>
                                                    <div className={styles.stepsToPerformListContainer}>
                                                        {
                                                            _.size(exercise.steps) ? (
                                                                <ul>
                                                                    {_.map(exercise.steps, s => <li>{s}</li>)}
                                                                </ul>
                                                            ) : (
                                                                    <span>
                                                                        No Steps provided
                                                                    </span>
                                                                )
                                                        }
                                                    </div>
                                                </div>
                                                <div></div>
                                            </div>
                                            <div style={{ width: '100%', backgroundColor: 'black' }}>
                                                <div className={styles.nutritionTitle}>Nutrition Today <span className={styles.dot} /></div>
                                            </div>
                                            <div className={styles.nutritionCardContainer}>
                                                <NutritionCard title={exercise.exerciseName} part1={dietPlan.morning} part2={dietPlan.afternoon} />
                                                <NutritionCard title={exercise.exerciseName} part1={dietPlan.evening} part2={dietPlan.night} />
                                            </div>

                                            <button className={styles.finishTrainingButton}>Finish Training</button>
                                        </div>
                                    )
                            )
                    }
                    <div className={styles.sideNavContainer}>
                        <div className={styles.myCoursesDiv}>
                            <span style={{ padding: '20px' }}>
                                My Courses
                            </span>
                            <span className={styles.dot} />
                        </div>
                        <SideNavBarHome updateContainer={this.updateContainer} courseList={this.props.myCourseList} selectedSubscription={this.state.subscriptionId} />
                    </div>
                </div>

            </div>
        )
    }
}


const mapStateToProps = (state, ownProps) => ({
    userDetails: state.user.details,
    myCourseList: state.training.myCourseList,
    selectedCourseExercise: state.training.selectedCourseExercise,
    selectedCourseExerciseError: state.training.selectedCourseExerciseError
});
const mapDispatchToProps = {
    pushRoute: push,
    getMyCoursesList,
    getExercises
};
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);