import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { getCourseDetail } from '../../redux/actions/training';

import styles from './CoursePage.module.css';
import NavBar from '../../components/navBar/NavBar';
import SimpleLoader from '../../components/loader/SimpleLoader';

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

    render() {
        let { courseDetails } = this.props; 
        let loading = !(this.courseId && courseDetails && courseDetails[this.courseId]);
        return (
            <div className="pageMainContainer">
                <NavBar currentPageHead="Course" />
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
    courseDetails: state.training.courseDetails,
});
const mapDispatchToProps = {
    pushRoute: push,
    getCourseDetail
};
export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);