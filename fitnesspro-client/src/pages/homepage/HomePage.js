import React from 'react';
import Video from '../../components/video/Video';
import styles from './homepage.module.css'
import NavBar from '../../components/navBar/NavBar'
import Vid from '../../assets/videos/Test-Intro-30sec-4mb.mp4'
import Muscle from '../../assets/images/gym.png'

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
                        <div className={styles.nutritionCardDesc}>Building Muscle
                    <img src={Muscle} height='20px' width='50px' style={{ paddingLeft: '10px' }}></img></div>
                        <ul style={{ listStyleType: 'none', padding: '10px' }}>
                            <li className={styles.nutritionCardList}>Breakfast :
                            Egg-white omelet with chicken and veggies</li>
                            <li className={styles.nutritionCardList}>Lunch :
                            1-2 grilled chicken breasts
                            2 handful-sized servings of brown rice
                            </li>
                            <li className={styles.nutritionCardList}>Dinner : Large salad with mixed veggies
                            1 baked regular or sweet potato</li>
                        </ul>
                    </div>
                    <div className={styles.nutritionCard}>
                        <div className={styles.nutritionCardDesc}>Non Veg</div>
                        <ul style={{ listStyleType: 'none', padding: '10px' }}>
                            <li className={styles.nutritionCardList}>Morning</li>
                            <li className={styles.nutritionCardList}>Afternoon</li>
                            <li className={styles.nutritionCardList}>Evening</li>
                        </ul>
                    </div>
                </div>

            </div>
        )
    }
}
