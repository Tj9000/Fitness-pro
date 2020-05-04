import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { getTrainerDetail } from '../../redux/actions/trainer';
import Icon from 'react-web-vector-icons';

import styles from './TrainerPage.module.css';
import Video from '../../components/video/Video';
import CourseCard from '../../components/card/CourseCard';
import NavBar from '../../components/navBar/NavBar';
import SimpleLoader from '../../components/loader/SimpleLoader';

import * as _ from 'lodash';

class TrainerPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let searchParam = this.props.computedMatch && this.props.computedMatch.params;
        this.trainerId = searchParam && searchParam.ID;
        this.props.getTrainerDetail(this.trainerId)
    }

    courseListRender = ({ course, id }) => {
        let { trainerDetails } = this.props;
        let trainer = trainerDetails[this.trainerId] || {}
        let courseDet = {
            id: id,
            name: course && course.Name,
            trainerName: trainer.name,
            photoUrl: course && course.Image,
        }
        return <CourseCard course={courseDet} />
    }

    render() {
        let { trainerDetails } = this.props;
        let trainer = trainerDetails[this.trainerId] || null
        let category = trainer && [trainer.programCategory, trainer.styleCategory, trainer.goalCategory].filter(e => !!e).join(' / ')
        let loading = !(this.trainerId && trainer && trainerDetails[this.trainerId]);
        return (
            <div className="pageMainContainer">
                <NavBar currentPageHead="Trainer" />
                <div className={styles.mainContainer}>
                    {loading ? <SimpleLoader size={150} /> : (
                        <div className={styles.trainerContainer}>
                            <div className={styles.trainerTitleContainer}>
                                <div className={styles.trainerHeading}>Trainer</div>
                                <div className={styles.trainerName}>{trainer.name}</div>
                            </div>
                            <div className={styles.trainerInfoContainer}>
                                <div className={[styles.infoElementCard, styles.trainerImageContainer].join(' ')}>
                                    <img className={styles.trainerImage} alt="TrainerPhoto" src={trainer.photoUrl} ></img>
                                </div>
                                <div className={styles.trainerDetailsContainer}>
                                    <div className={[styles.infoElementCard, styles.trainerBasicInfoContainer].join(' ')}>
                                        <div className={styles.infoElementItem}><span className={styles.infoElementItemHead}>Category&nbsp; </span>{category}</div>
                                        <div className={styles.infoElementItem}><span className={styles.infoElementItemHead}>Subscribers&nbsp; </span>{trainer.subscribersCount}</div>
                                        <div className={styles.infoElementItem}><span className={styles.infoElementItemHead}>Trained&nbsp; </span>{trainer.notableTrainedPeople}</div>
                                        <div className={styles.infoElementItem}><span className={styles.infoElementItemHead}>Rating&nbsp; </span>{trainer.rating}/5.0</div>
                                    </div>
                                    <div className={[styles.infoElementCard, styles.trainerSocialContainer].join(' ')}>
                                        {trainer.social && trainer.social.facebookProfileLink ? <div className={styles.infoElementItem}>
                                            <a href={trainer.social.facebookProfileLink} target="_blank" className={styles.socialButttonLink}>
                                                <div className={styles.socialIconWrapper} style={{ backgroundColor: '#3B5998' }}>
                                                    <Icon name="facebook" font="FontAwesome" color={'white'} />
                                                </div>
                                                <span className={styles.socialIconText} style={{ color: '#3B5998' }}>Visit Profile</span>

                                            </a>
                                        </div> : null}
                                        {trainer.social && trainer.social.instagramProfileLink ? <div className={styles.infoElementItem}>
                                            <a href={trainer.social.instagramProfileLink} target="_blank" className={styles.socialButttonLink}>
                                                <div className={styles.socialIconWrapper} style={{
                                                    backgroundColor: '#d6249f',
                                                    background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)'
                                                }}>
                                                    <Icon name="instagram" font="FontAwesome" color={'white'} />
                                                </div>
                                                <span className={styles.socialIconText} style={{ color: '#d6249f' }}>Visit Profile</span>
                                            </a>
                                        </div> : null}
                                        {trainer.social && trainer.social.twitterProfileLink ? <div className={styles.infoElementItem}>
                                            <a href={trainer.social.twitterProfileLink} target={"_blank"} className={styles.socialButttonLink}>
                                                <div className={styles.socialIconWrapper} style={{ backgroundColor: '#55ACEE' }}>
                                                    <Icon name="twitter" font="FontAwesome" color={'white'} />
                                                </div>
                                                <span className={styles.socialIconText} style={{ color: '#55ACEE' }}>Visit Profile</span>

                                            </a>
                                        </div> : null}



                                    </div>
                                </div>
                            </div>
                            <div className={styles.trainerDescriptionContainer}>
                                <div className={styles.trainerDescription}>{trainer.description}</div>
                            </div>
                            <div className={styles.trainerVideoContainer}>
                                <Video url={trainer.introVideo}></Video>
                            </div>
                            <div className={styles.trainerCoursesContainer}>
                                <div className={styles.trainerCoursesHeading}>
                                    {_.size(trainer.courseList) || 'No'} Courses offered

                                </div>
                                <div className={styles.trainerCoursesList}>
                                    {_.map(trainer.courseList, (course, courseId) => <this.courseListRender course={course} id={courseId} key={courseId} />)}
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
    trainerDetails: state.trainer.details,
});
const mapDispatchToProps = {
    pushRoute: push,
    getTrainerDetail
};
export default connect(mapStateToProps, mapDispatchToProps)(TrainerPage);