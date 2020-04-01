import React from 'react';
import styles from './sidenavbar.module.css';

import * as _ from 'lodash';

class SideNavBarHome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedCourseId: null
        };
    }

    selection = (courseId) => {
        this.setState({
            selectedCourseId: courseId
        })
    }

    navElement = ({ text, courseId, subscriptionId }) => {
        return (
            <div
                className={[styles.navElement, this.props.selectedSubscription === subscriptionId ? styles.active : ''].join(' ')}
                onClick={() => this.selection({ courseId, subscriptionId })}>

                {text}
            </div>
        )
    }

    render() {
        return (
            <nav className={styles.sideNavBar}>
                <div className={styles.sideNavList}>
                    {
                        _.size(this.props.courseList) ? (
                            _.map(_.toPairs(this.props.courseList), ([subscriptionId, course]) =>
                                <this.navElement
                                    text={course.name}
                                    courseId={course.courseId}
                                    subscriptionId={subscriptionId}
                                    key={subscriptionId}
                                />
                            )
                        ) : (
                                <div className={styles.noCourseFoundContainer}>
                                    No Courses Found
                                </div>
                            )

                    }

                </div>
            </nav>
        )
    }
}

export default SideNavBarHome;