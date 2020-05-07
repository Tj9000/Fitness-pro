import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { push } from 'connected-react-router';
import { getStarTrainers, getFeaturedTrainers, getTrainerOfTheWeek } from '../../redux/actions/trainer';

import NavBar from '../../components/navBar/NavBar';
import Icon from 'react-web-vector-icons';

import { COURSE_FILTERS } from '../../config/training';

import * as _ from 'lodash';

import styles from './TrainingPage.module.css';
import FeaturedTrainerCard from '../../components/card/FeaturedTrainerCard';

class TrainingPage extends Component {


    componentDidMount() {
        this.props.getStarTrainers();
        this.props.getFeaturedTrainers();
        this.props.getTrainerOfTheWeek();
    }

    selectTraining = (program) => {
        this.props.pushRoute('/training/select', { program })
    }

    selectTrainingListItemRender = () => {
        let icons = {
            [COURSE_FILTERS.PROGRAM["7min"]]: <Icon name="heart" font="FontAwesome" size={32} color={'#fe7902'} />,
            [COURSE_FILTERS.PROGRAM.BudgetFriendly]: <Icon name="human-handsup" font="MaterialCommunityIcons" size={32} color={'#fe7902'} />,
            [COURSE_FILTERS.PROGRAM.International]: <Icon name="globe" font="FontAwesome" size={32} color={'#fe7902'} />,
            [COURSE_FILTERS.PROGRAM.National]: <Icon name="ios-globe" font="Ionicons" size={32} color={'#fe7902'} />,
        }

        return (
            <Fragment>
                {_.map(_.toPairs(COURSE_FILTERS.PROGRAM), ([key, program]) =>
                    <div className={styles.selectTrainingListCard} key={key}>
                        <div className={styles.selectTrainingIconDiv}>{icons[program]}</div>
                        <div className={styles.selectTrainingListName}>{program}</div>
                        <div className={styles.selectTrainingListExploreButton} onClick={() => { this.selectTraining(key) }}>Explore</div>
                    </div>
                )}
            </Fragment>
        )
    }

    starIcon = ({ percentage = 0 }) => {
        let iconName = percentage >= 50 ? 'star' : (percentage > 0 ? 'half-star' : 'star-border')
        return (
            <div className={styles.ratingStar} style={{ background: `linear-gradient(90deg, red ${percentage}%, white ${percentage}%)`, backgroundClip: 'text' }}>
                {/* {'★ '} */}
                <Icon name={iconName} font="MaterialIcons" size={32} color={'#fe7902'} />
            </div>
        );

    }

    render() {
        const { trainerOfTheWeek } = this.props;
        const rating = (trainerOfTheWeek && trainerOfTheWeek.rating) || 0;
        const ratingP = rating * 100

        return (
            <div className="pageMainContainer">
                <NavBar currentPageHead="Training" />
                <div className={styles.contentContainer}>
                    <div className={styles.contentSubContainer}>
                        {/* SELECT TRAINING */}
                        <div className={styles.SelectTrainingContainer}>
                            <div className={styles.SelectTrainingHeaderContainer}>
                                <div className={styles.SelectTrainingHeader}>
                                    Trainings
                                </div>
                                <div className={styles.SelectTrainingSubHeader}>
                                    Select type of training you want
                                    </div>

                            </div>
                            <div className={styles.selectTrainigListContainer}>
                                <this.selectTrainingListItemRender />
                            </div>
                        </div>

                        {/* Star Trainers */}
                        <div className={[styles.featuredTrainerContainerCommon, styles.StarTrainersContainer].join(' ')}>
                            <div className={styles.featuredTrainerHeaderCommon}>Our Star Trainers</div>
                            <div className={styles.featuredTrainerContentCommon}>
                                {_.map(this.props.starTrainers, (trainer) => {
                                    return <FeaturedTrainerCard trainer={trainer} />
                                })}
                            </div>
                        </div>

                        {/* Featured Triners */}
                        <div className={[styles.featuredTrainerContainerCommon, styles.FeaturedTrainersContainer].join(' ')}>
                            <div className={styles.featuredTrainerHeaderCommon}>Featured Trainers</div>
                            <div className={styles.featuredTrainerContentCommon}>
                                {_.map(this.props.featuredTrainers, (trainer) => {
                                    return <FeaturedTrainerCard trainer={trainer} invertColor={true} />
                                })}
                            </div>
                        </div>

                        {/* Trainer Of the Week */}
                        <div className={styles.TrainerOfTheWeekContainer}>
                            <div className={styles.trainerOTWHeader}>Trainer Of The Week</div>
                            {trainerOfTheWeek ? (
                                <div className={styles.TrainerOfTheWeekContent}>
                                    <div className={styles.trainerOTWProfilePicContainer}>
                                        <img src={trainerOfTheWeek.photoUrl} alt="Trainer Pic" className={styles.trainerOTWProfilePicImage}></img>
                                    </div>
                                    <div className={styles.trainerOTWName}>{trainerOfTheWeek.name}</div>
                                    <div className={styles.trainerOTWTrainerType}>{trainerOfTheWeek.category || 'Trainer'}</div>
                                    <div className={styles.trainerOTWAboutTrainerDescription}>{trainerOfTheWeek.description || 'He is a trainer'}</div>
                                    <div className={styles.trainerOTWRating}>
                                        <this.starIcon percentage={_.clamp(ratingP, 0, 100)} />
                                        <this.starIcon percentage={_.clamp(ratingP - 100, 0, 100)} />
                                        <this.starIcon percentage={_.clamp(ratingP - 200, 0, 100)} />
                                        <this.starIcon percentage={_.clamp(ratingP - 300, 0, 100)} />
                                        <this.starIcon percentage={_.clamp(ratingP - 400, 0, 100)} />
                                    </div>
                                </div>
                            ) : (
                                    <div className={styles.noTrainerFound}> No Trainer Of the week found</div>
                                )}
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
        starTrainers: state.trainer.starTrainers,
        featuredTrainers: state.trainer.featuredTrainers,
        trainerOfTheWeek: state.trainer.trainerOfTheWeek,
    }
};
const mapDispatchToProps = {
    pushRoute: push,
    getStarTrainers,
    getFeaturedTrainers,
    getTrainerOfTheWeek
};
export default connect(mapStateToProps, mapDispatchToProps)(TrainingPage);