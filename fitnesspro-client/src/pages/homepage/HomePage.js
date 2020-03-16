import React from 'react';
import Video from '../../components/video/Video';
import styles from './homepage.module.css'
import NavBar from '../../components/navBar/NavBar'
import Vid from '../../assets/videos/Test-Intro-30sec-4mb.mp4'
import HomePageCard from '../../components/card/homepage/HomePageCard';

export default class HomePage extends React.Component {
    render() {
        return (
            <div className="pageMainContainer">
                <NavBar currentPageHead="Today's Workouts " />
                <div className={styles.homepageVideoContainer} >

                    <div className={styles.videoContainer}>
                        <div className={styles.title}>Part 1</div>
                        <Video className={styles.homepageVideo} url={Vid} />
                    </div>

                    <div className={styles.videoContainer}>
                        <div className={styles.title}>Part 2</div>
                        <Video className={styles.homepageVideo} url={Vid} />
                    </div>

                    <div className={styles.videoContainer}>
                        <div className={styles.title}>Part 3</div>
                        <Video className={styles.homepageVideo} url={Vid} />
                    </div>
                </div>

                <div>
                    <div className={styles.title}>Nutrition</div>
                </div>
                <div className={styles.nutritionCardContainer}>
                    <HomePageCard /><HomePageCard />
                </div>

            </div>
        )
    }
}
