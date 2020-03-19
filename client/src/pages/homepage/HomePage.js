import React from 'react';
import Video from '../../components/video/Video';
import styles from './homepage.module.css'
import NavBar from '../../components/navBar/NavBar'
import Vid from '../../assets/videos/Test-Intro-30sec-4mb.mp4'
import Card from '../../components/card/Card';
import Thumbnail1 from '../../assets/images/image_6.jpg';
import Thumbnail2 from '../../assets/images/program-5.jpg';
import Thumbnail3 from '../../assets/images/program-6.jpg';


export default class HomePage extends React.Component {
    render() {
        return (
            <div className="pageMainContainer">
                <NavBar currentPageHead="Today's Workouts " />
                <div className={styles.homepageVideoContainer} >

                    <div className={styles.videoContainer}>
                        <div className={styles.title}>Part 1</div>
                        <Video className={styles.homepageVideo} url={Vid} thumbnail={Thumbnail1} />
                    </div>

                    <div className={styles.videoContainer}>
                        <div className={styles.title}>Part 2</div>
                        <Video className={styles.homepageVideo} url={Vid} thumbnail={Thumbnail2}/>
                    </div>

                    <div className={styles.videoContainer}>
                        <div className={styles.title}>Part 3</div>
                        <Video className={styles.homepageVideo} url={Vid} thumbnail={Thumbnail3} />
                    </div>
                </div>

                <div style={{width:'100%',backgroundColor:'black'}}>
                    <div className={styles.title}>Nutrition Today <span className={styles.dot}/></div>
                </div>
                <div className={styles.nutritionCardContainer}>
                    <Card /><Card />
                </div>

            </div>
        )
    }
}
