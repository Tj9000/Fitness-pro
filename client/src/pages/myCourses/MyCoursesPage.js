import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { getMyCoursesList } from '../../redux/actions/training';

import NavBar from "../../components/navBar/NavBar"
import CourseCard from '../../components/card/CourseCard';

import styles from './MyCoursesPage.module.css';

import * as _ from 'lodash';

class MyCoursesPage extends Component {

    componentDidMount() {
        this.props.getMyCoursesList();
    }

    courseListRender = ({ course = {}, id }) => {
        let { trainerDetails } = course;
        let courseDet = {
            id: id,
            name: course.name,
            trainerName: trainerDetails && trainerDetails.name,
            photoUrl: course.image,
        }
        return <CourseCard course={courseDet} />
    }

    render() {
        return (
            <div className="pageMainContainer">
                <NavBar currentPageHead="My Courses" />
                <div className={styles.mainContainer}>
                    <div className={styles.coursesHeading}>
                        {_.size(this.props.myCourseList) || 'No'} Courses Subscribed
                    </div>
                    <div className={styles.coursesList}>
                        {_.map(this.props.myCourseList, (course, courseId) => <this.courseListRender course={course} id={courseId} key={courseId} />)}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    myCourseList: state.training.myCourseList,
});
const mapDispatchToProps = {
    pushRoute: push,
    getMyCoursesList
};
export default connect(mapStateToProps, mapDispatchToProps)(MyCoursesPage);