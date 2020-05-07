import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { getCourseDetail } from '../../redux/actions/training';
import Icon from 'react-web-vector-icons';

import Video from '../../components/video/Video';
import NavBar from '../../components/navBar/NavBar';
import SimpleLoader from '../../components/loader/SimpleLoader';

import styles from './CoursePage.module.css';
import * as _ from 'lodash';

class CoursePage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let searchParam = this.props.computedMatch && this.props.computedMatch.params;
        this.courseId = searchParam && searchParam.ID;
        this.props.getCourseDetail(this.courseId)
    }

    viewTrainerPage = () => {
        let course = this.props.courseDetails && this.props.courseDetails[this.courseId] || null
        if (course.trainerDetails && course.trainerDetails.id) {
            this.props.pushRoute(`/trainer/${course.trainerDetails.id}`);
        } else {
            //TODO: handle trainerId not found
        }
    }
    render() {
        let { courseDetails } = this.props;
        let course = courseDetails && courseDetails[this.courseId] || null
        let loading = !(this.courseId && course);
        return (
            <div className="pageMainContainer">
                <NavBar currentPageHead="Course" />
                <div className={styles.mainContainer}>
                    {loading ? <div className={styles.loaderContainer}><SimpleLoader size={150} /> </div> : (
                        <div className={styles.courseContainer}>
                            <div className={styles.courseTitleContainer}>
                                <div className={styles.courseNameTitle}> {course.name}</div>
                                <div className={styles.courseTainerName} onClick={this.viewTrainerPage}>{course.trainerDetails && course.trainerDetails.name}</div>
                            </div>

                            <div className={styles.courseVideoContainer}>
                                <Video url={course.introVideo}></Video>
                            </div>

                            <div className={styles.courseDescriptionContainer}>
                                <div className={styles.courseDescription}>{course.description}</div>
                            </div>

                            {/* BenefitsJoinContainer */}
                            <div className={styles.courseBenefitsJoinContainer}>

                                <div className={[styles.courseElementCard, styles.courseBenefitsContainer].join(' ')}>
                                    <div className={[styles.courseElementCardHead, styles.courseBenefitsHeading].join(' ')}>Benefits</div>
                                    <div className={styles.courseBenefitsList}>
                                        <ul>
                                            {_.map(course.benefits, (e) => <li>{e}</li>)}
                                        </ul>
                                    </div>
                                </div>

                                <div className={[styles.courseElementCard, styles.courseJoinContainer].join(' ')}>
                                    <div className={styles.courseJoinButtonContainer}>
                                        <button className={styles.courseJoinButton}>Join now</button>
                                        <div className={styles.courseJoinPrice} >Rs.&nbsp;{course.price}</div>
                                    </div>
                                    <div className={styles.courseTimeDifficultyContainer}>
                                        <div className={styles.courseTimeContainer}>
                                            <div className={styles.courseTimeIcon}>
                                                <Icon name="timer" font="MaterialIcons" size={32} color={'var(--tertiary-color)'} />

                                            </div>
                                            <div className={styles.courseTimeValue}>{course.duration}</div>
                                        </div>
                                        <div className={styles.courseDifficultyContainer}>
                                            <div className={styles.courseDifficultyIcon}>
                                                <Icon name="show-chart" font="MaterialIcons" size={40} color={'var(--tertiary-color)'} />
                                            </div>
                                            <div className={styles.courseDifficultyContent}>
                                                <div className={styles.courseDifficultyContentValue}>{course.difficulty}</div>
                                                <div className={styles.courseDifficultyContentsubHeading}>difficulty</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* PrereqFeedbackContainer */}
                            <div className={styles.coursePrereqFeedbackContainer}>
                                <div className={[styles.courseElementCard, styles.coursePrereqContainer].join(' ')}>
                                    <div className={[styles.courseElementCardHead, styles.coursePrereqHeading].join(' ')}>Pre-requisites</div>
                                    <div className={styles.coursePrereqList}>
                                        <ul>
                                            {_.map(course.prerequisites, (e) => <li>{e}</li>)}
                                        </ul>
                                    </div>
                                </div>
                                <div className={[styles.courseElementCard, styles.courseFeedbackContainer].join(' ')}>
                                    <div className={[styles.courseElementCardHead, styles.courseFeedbackHeading].join(' ')}>Feedback</div>
                                    <div className={styles.courseFeedbackContent}>
                                        Average Customer Feedback &ensp; <span className={styles.courseFeedbackContentValue}>{course.averageFeedback}/5.0</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state, ownProps) => ({
    courseDetails: state.training.courseDetails,
});
const mapDispatchToProps = {
    pushRoute: push,
    getCourseDetail
};
export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);