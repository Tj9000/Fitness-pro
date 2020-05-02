import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { getTrainerDetail } from '../../redux/actions/trainer';

import styles from './TrainerPage.module.css';
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

    render() {
        let { trainerDetails } = this.props; 
        let loading = !(this.trainerId && trainerDetails && trainerDetails[this.trainerId]);
        return (
            <div className="pageMainContainer">
                <NavBar currentPageHead="Trainer" />
                <div className={styles.mainContainer}>
                    {loading ? <SimpleLoader size={150} /> : (
                        <div>
                            Main Content
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