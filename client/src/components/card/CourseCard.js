import React from 'react';

import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import styles from './CourseCard.module.css';

class CourseCard extends React.Component {

    viewCoursePage = () => {
        if(this.props.course) {
            this.props.pushRoute(`/course/${this.props.course.id}`);
        } else {
            //TODO: handle courseId not found
        }
    }

    render() {
        let course = this.props.course || {};
        return (
            <div className={styles.courseContainer} onClick={this.viewCoursePage}>
                {/* Course image */}
                <div className={styles.courseImageContainer}>
                    <img src={course && course.photoUrl} alt="CourseImg" className={styles.courseImage}></img>
                </div>
                {/* Course Detail */}
                <div className={styles.courseDetailContainer}>
                    <div className={styles.courseDetailName}>{course.name}</div>                    
                    <div className={styles.courseDetailTrainer}>{course.trainerName || '--Trainer--'}</div>                    
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps)=>({
});
const mapDispatchToProps = {
    pushRoute: push
};
export default connect(mapStateToProps, mapDispatchToProps)(CourseCard);