import React from 'react';

import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import styles from './SelectTrainerCard.module.css';

class SelectTrainerCard extends React.Component {

    viewTrainerPage = () => {
        if(this.props.course.trainerDetail) {
            this.props.pushRoute(`/trainer?id=${this.props.course.trainerDetail.id}`);
        } else {
            //TODO: handle courseId not found
        }
    }

    render() {
        let course = this.props.course || {};
        return (
            <div className={styles.container}>

                {/* Trainer */}
                <div className={styles.trainerContainer}>
                    {/* Trainer image */}
                    <div className={[styles.trainerCard, styles.trainerimageContainer].join(' ')}>
                        <img src={course.trainerDetail && course.trainerDetail.photoUrl} alt="Trainer Detail" className={styles.trainerimage}></img>
                    </div>
                    {/* Trainer Detail */}
                    <div className={[styles.trainerCard, styles.trainerDetailContainer].join(' ')}>
                        <div className={styles.trainerDetailName}>{course.trainerDetail.name}</div>
                        <div>
                            <div className={styles.trainerDetailList}><span className={styles.trainerDetailListHead}>Rating: </span> {course.trainerDetail.rating}/5.0</div>
                            <div className={styles.trainerDetailList}><span className={styles.trainerDetailListHead}>Subscribers: </span> {course.trainerDetail.subscribersCount}</div>
                            <div className={styles.trainerDetailList}><span className={styles.trainerDetailListHead}>Category: </span> {course.trainerDetail.category}</div>
                            <div className={styles.trainerDetailList}><span className={styles.trainerDetailListHead}>Trained: </span> {course.trainerDetail.notableTrainedPeople}</div>
                        </div>
                        <div className={styles.primaryButton} onClick={this.viewTrainerPage}>View {course.trainerDetail.name.split(' ')[0]}</div>
                    </div>
                </div>

                {/* Course Detail */}
                <div className={styles.courseDetailContainer}>
                    <div className={styles.courseDetailName}>{course.name}</div>
                    <div>
                        <div className={styles.courseDetailList}><span className={styles.courseDetailListHead}>Author: </span> {course.author}</div>
                        <div className={styles.courseDetailList}><span className={styles.courseDetailListHead}>Difficulty: </span> {course.difficulty}</div>
                        <div className={styles.courseDetailList}><span className={styles.courseDetailListHead}>Average Feedback: </span> {course.averageFeedback}</div>
                    </div>
                    <div className={styles.courseDetailDescription}>{course.description}</div>
                </div>

                {/* Join Now */}
                <div className={styles.joinNowContainer}>
                    <div className={styles.joinNowHead}>Subscribe</div>
                    <div>
                        <div className={styles.joinNowList}><span className={styles.joinNowListHead}>Price: </span> {course.price}</div>
                        <div className={styles.joinNowList}><span className={styles.joinNowListHead}>Duration: </span> {course.duration}</div>
                    </div>
                    <div className={styles.primaryButton}>Join Now</div>
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
export default connect(mapStateToProps, mapDispatchToProps)(SelectTrainerCard);