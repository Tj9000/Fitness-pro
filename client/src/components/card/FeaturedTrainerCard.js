import React, { Component } from 'react';

import styles from './FeaturedTrainerCard.module.css';

class FeaturedTrainerCard extends Component {
    render() {
        const { trainer } = this.props;
        return (
            <div className={styles.container}>
                <div className={styles.trainerImageContainer} >
                    <img src={trainer.photoUrl} alt="ProfilePic" className={styles.trainerImage} />
                </div>
                <div className={[styles.trainerDetailsContainer, this.props.invertColor ? styles.trainerDetailsContainerWhite : ''].join(' ')} >
                    <div className={styles.trainerName} > {trainer.name || 'Name'}</div>
                    <div className={styles.trainerCategory} >{trainer.category || 'Trainer'} </div>
                </div>
            </div>
        );
    }
}

export default FeaturedTrainerCard;