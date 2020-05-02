import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import styles from './CoursePage.module.css';
import NavBar from '../../components/navBar/NavBar';
import SimpleLoader from '../../components/loader/SimpleLoader';

import * as _ from 'lodash';

class CoursePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let loading = true;
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
});
const mapDispatchToProps = {
    pushRoute: push,
};
export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);