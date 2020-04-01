import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { getMyCoursesList, getExercises } from '../../redux/actions/training';
import NutritionCard from '../../components/card/NutritionCard';

import Video from '../../components/video/Video';
import styles from './homepage.module.css'
import NavBar from '../../components/navBar/NavBar'
import Thumbnail1 from '../../assets/images/image_6.jpg';
import Thumbnail2 from '../../assets/images/program-5.jpg';
import Thumbnail3 from '../../assets/images/program-6.jpg';
import SideNavBarHome from '../../components/sidenavbar/SideNavBarHome';

import * as _ from 'lodash';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courseId: null,
            subscriptionId: null
        }
        this.defaultCourseSelected = false;
    }
    componentDidMount() {
        this.props.getMyCoursesList();
    }

    updateContainer = ({ courseId, subscriptionId }) => {
        this.setState({
            courseId: courseId,
            subscriptionId: subscriptionId
        }, () => console.log("homepage state : ", this.state)
        )

        this.props.getExercises(subscriptionId);

    }

    componentDidUpdate() {
        if (!this.defaultCourseSelected && !this.state.courseId && _.size(this.props.myCourseList)) {
            let [subscriptionId, course] = _.toPairs(this.props.myCourseList)[0];
            let courseId = course.courseId;
            this.defaultCourseSelected = true;
            this.updateContainer({ courseId, subscriptionId });
        }
    }

    render() {
        let selectedCourseExercises = this.props.selectedCourseExercises || [];
        let exercise1 = selectedCourseExercises[0] || {};
        let exercise2 = selectedCourseExercises[1] || {};
        let exercise3 = selectedCourseExercises[1] || {};
        let dietPlan = {
            morning: { time: 'Morning', plan: exercise1.dietPlan && exercise1.dietPlan.morning },
            afternoon: { time: 'Afternoon', plan: exercise1.dietPlan && exercise1.dietPlan.afternoon },
            evening: { time: 'Evening', plan: exercise1.dietPlan && exercise1.dietPlan.evening },
            night: { time: 'Night', plan: exercise1.dietPlan && exercise1.dietPlan.night },
        };

        return (
            <div className="pageMainContainer">
                <NavBar currentPageHead="Today's Workouts " />
                <div className={styles.homeContainer}>
                    <div className={styles.homeSubContainer}>

                        <div className={styles.homepageVideoContainer} >
                            <div className={styles.videoContainer}>
                                <div className={styles.videoTitle}>{exercise1.week} {exercise1.day}</div>
                                <Video className={styles.homepageVideo} url={exercise1.exerciseUrl} thumbnail={Thumbnail1} />
                                <div className={styles.videoDescripionContainer}>
                                    <div className={styles.videoDescripionName}>{exercise1.exerciseName}</div>
                                    <div className={styles.videoDescripion}>{exercise1.exerciseDescription}</div>
                                </div>

                            </div>

                            <div className={styles.videoContainer}>
                                <div className={styles.videoTitle}>{exercise2.week} {exercise2.day}</div>
                                <Video className={styles.homepageVideo} url={exercise2.exerciseUrl} thumbnail={Thumbnail2} />
                                <div className={styles.videoDescripionContainer}>
                                    <div className={styles.videoDescripionName}>{exercise1.exerciseName}</div>
                                    <div className={styles.videoDescripion}>{exercise1.exerciseDescription}</div>
                                </div>
                            </div>

                            <div className={styles.videoContainer}>
                                <div className={styles.videoTitle}>{exercise3.week} {exercise3.day}</div>
                                <Video className={styles.homepageVideo} url={exercise3.exerciseUrl} thumbnail={Thumbnail3} />
                                <div className={styles.videoDescripionContainer}>
                                    <div className={styles.videoDescripionName}>{exercise1.exerciseName}</div>
                                    <div className={styles.videoDescripion}>{exercise1.exerciseDescription}</div>
                                </div>
                            </div>
                        </div>

                        <div style={{ width: '100%', backgroundColor: 'black' }}>
                            <div className={styles.nutritionTitle}>Nutrition Today <span className={styles.dot} /></div>
                        </div>
                        <div className={styles.nutritionCardContainer}>
                            <NutritionCard title={exercise1.exerciseName} part1={dietPlan.morning} part2={dietPlan.afternoon} />
                            <NutritionCard title={exercise1.exerciseName} part1={dietPlan.evening} part2={dietPlan.night} />
                        </div>
                    </div>
                    <div className={styles.sideNavContainer}>
                        <div className={styles.myCoursesDiv}>
                            <span style={{ padding: '20px' }}>
                                My Courses
                            </span>
                            <span className={styles.dot} />
                        </div>
                        <SideNavBarHome updateContentId={this.updateContainer} courseList={this.props.myCourseList} selectedSubscription={this.state.subscriptionId} />
                    </div>
                </div>

            </div>
        )
    }
}


const mapStateToProps = (state, ownProps) => ({
    userDetails: state.user.details,
    myCourseList: state.training.myCourseList,
    selectedCourseExercises: state.training.selectedCourseExercises
});
const mapDispatchToProps = {
    pushRoute: push,
    getMyCoursesList,
    getExercises
};
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);