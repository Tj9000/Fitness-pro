import React from 'react';
import styles from './sidenavbar.module.css';


class SideNavBarHome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedCourse: 'c1'
        };
    }

    selection = (courseId) => {
        console.log("Inside selection")
        this.setState({
            selectedCourse: courseId
        })
        this.props.updateContentId(courseId);
        console.log("side nav props : ", this.props)
    }

    navElement = ({ text, courseId }) => {
        return (
            <div
                className={[styles.navElement, this.state.selectedCourse == courseId ? styles.active : ''].join(' ')}
                onClick={() => this.selection(courseId)}>

                {text}
            </div>
        )
    }

    render() {
        return (
            <nav className={styles.sideNavBar}>
                <div className={styles.sideNavList}>
                    <div>
                        <this.navElement
                            text='Course 1'
                            courseId='c1'
                        />
                    </div>
                    <div>
                        <this.navElement
                            text='Course 2'
                            courseId='c2'
                        />
                    </div>
                    <div>
                        <this.navElement
                            text='Course 3'
                            courseId='c3'
                        />
                    </div>
                    <div>
                        <this.navElement
                            text='Course 4'
                            courseId='c4'
                        />
                    </div>
                    <div>
                        <this.navElement
                            text='Course 5'
                            courseId='c5'
                        />
                    </div>
                    <div>
                        <this.navElement
                            text='Course 6'
                            courseId='c6'
                        />
                    </div>
                    <div>

                        <this.navElement
                            text='Course 7'
                            courseId='c7'
                        />
                    </div>
                    <div>

                        <this.navElement
                            text='Course 8'
                            courseId='c8'
                        />
                    </div>
                </div>
            </nav>
        )
    }
}

export default SideNavBarHome;