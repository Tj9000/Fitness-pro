import React from 'react';
import Video from '../../components/video/Video';
import styles from './homepage.module.css'
import NavBar from '../../components/navBar/NavBar'
import Vid from '../../assets/videos/Test-Intro-30sec-4mb.mp4'

export default class HomePage extends React.Component {
    render() {
        return (
            <div className="pageMainContainer">
                <NavBar currentPageHead="Today's Workouts " />
                {/* <div style={{display:'flex',justifyContent:'space-evenly',width:'100%'}}><div>Part 1</div><div>Part 2</div><div>Part 3</div></div> */}

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
                <div><div className={styles.title}>Nutrition</div></div>
                <div className={styles.nutritionCardContainer}>
                    <div className={styles.nutritionCard}>
                    <div style={{ paddingTop: '0px',paddingBottom:'10px',fontSize:'large' }}>Building Muscle</div>

                        <ul>
                            <li style={{ padding: '10px' }}>Morning</li>
                            <li style={{ padding: '10px' }}>Afternoon</li>
                            <li style={{ padding: '10px' }}>Evening</li>
                        </ul>
                    </div>
                    <div className={styles.nutritionCard}>
                        <div style={{ paddingTop: '0px',paddingBottom:'10px',fontSize:'large' }}>Non Veg</div>
                        <ul>
                            <li style={{ padding: '10px' }}>Morning</li>
                            <li style={{ padding: '10px' }}>Afternoon</li>
                            <li style={{ padding: '10px' }}>Evening</li>
                        </ul>
                    </div>
                </div>

            </div>
        )
    }
}
