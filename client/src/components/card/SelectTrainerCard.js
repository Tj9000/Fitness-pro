import React from 'react';

import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import styles from './SelectTrainerCard.module.css';

class SelectTrainerCard extends React.Component {

    viewTrainerPage = () => {
        if(this.props.trainer) {
            this.props.pushRoute(`/trainer/${this.props.trainer.id}`);
        } else {
            //TODO: handle courseId not found
        }
    }

    render() {
        let trainer = this.props.trainer || {};
        let category = [trainer.programCategory, trainer.styleCategory, trainer.goalCategory].filter(e=>!!e).join(' / ')
        return (
            <div className={styles.trainerContainer}>
                {/* Trainer image */}
                <div className={[styles.trainerCard, styles.trainerimageContainer].join(' ')}>
                    <img src={trainer && trainer.photoUrl} alt="TrainerImg" className={styles.trainerimage}></img>
                </div>
                {/* Trainer Detail */}
                <div className={[styles.trainerCard, styles.trainerDetailContainer].join(' ')}>
                    <div className={styles.trainerDetailName}>{trainer.name}</div>
                    <div style={{padding: "5px 0"}}>
                        <div className={styles.trainerDetailList}><span className={styles.trainerDetailListHead}>Rating:&nbsp; </span> {trainer.rating}/5.0</div>
                        <div className={styles.trainerDetailList}><span className={styles.trainerDetailListHead}>Subscribers:&nbsp; </span> {trainer.subscribersCount}</div>
                        <div className={styles.trainerDetailList}><span className={styles.trainerDetailListHead}>Category:&nbsp; </span> {category}</div>
                        <div className={styles.trainerDetailList}><span className={styles.trainerDetailListHead}>Trained:&nbsp; </span> {trainer.notableTrainedPeople}</div>
                    </div>
                    <div className={styles.primaryButton} onClick={this.viewTrainerPage}>View {trainer.name.split(' ')[0]}</div>
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