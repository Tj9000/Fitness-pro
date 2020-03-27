import React from 'react';
import Video from '../../components/video/Video';
import styles from './homepage.module.css'
import NavBar from '../../components/navBar/NavBar'
import Vid from '../../assets/videos/Test-Intro-30sec-4mb.mp4'
import Card from '../../components/card/Card';
import Thumbnail1 from '../../assets/images/image_6.jpg';
import Thumbnail2 from '../../assets/images/program-5.jpg';
import Thumbnail3 from '../../assets/images/program-6.jpg';
import SideNavBarHome from '../../components/sidenavbar/SideNavBarHome';


export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            course: 'c1'
        }
        this.courseVideos = {
            c1: {
                vid1: Vid,
                vid2: Vid,
                vid3: Vid

            },
            c2: {
                vid1: Vid,
                vid2: Vid,
                vid3: Vid

            },
            c3: {
                vid1: Vid,
                vid2: Vid,
                vid3: Vid

            }

        }
    }
    courseContent = () => {
        let vids = this.courseVideos[this.state.course] || {};
        return <Course videos={vids} courseId={this.state.course} />
    }

    updateContainer = (courseContentId) => {
        console.log("Inside updateContainer ")
        this.setState({
            course: courseContentId
        }, () => console.log("homepage state : ", this.state)
        )

    }

    render() {
        return (
            <div className="pageMainContainer">
                <NavBar currentPageHead="Today's Workouts " />
                <div className={styles.homeContainer}>
                    <this.courseContent />
                    <div className={styles.sideNavContainer}>
                        <div className={styles.myCoursesDiv}><span style={{ padding: '20px' }}>My Courses</span><span className={styles.dot} /></div>
                        <SideNavBarHome updateContentId={this.updateContainer} />
                    </div>
                </div>

            </div>
        )
    }
}

class Course extends React.Component {
    render() {
        return (
            <div className={styles.homeSubContainer}>

                <div className={styles.homepageVideoContainer} >

                    <div className={styles.videoContainer}>
                        <div className={styles.title}> {this.props.courseId} Part 1</div>
                        <Video className={styles.homepageVideo} url={this.props.videos.vid1} thumbnail={Thumbnail1} />
                    </div>

                    <div className={styles.videoContainer}>
                        <div className={styles.title}> {this.props.courseId} Part 2</div>
                        <Video className={styles.homepageVideo} url={this.props.videos.vid2} thumbnail={Thumbnail2} />
                    </div>

                    <div className={styles.videoContainer}>
                        <div className={styles.title}> {this.props.courseId} Part 3</div>
                        <Video className={styles.homepageVideo} url={this.props.videos.vid3} thumbnail={Thumbnail3} />
                    </div>
                </div>

                <div style={{ width: '100%', backgroundColor: 'black' }}>
                    <div className={styles.title}>Nutrition Today <span className={styles.dot} /></div>
                </div>
                <div className={styles.nutritionCardContainer}>
                    <Card /><Card />
                </div>
            </div>
        )
    }
}

