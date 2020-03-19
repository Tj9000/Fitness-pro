import React from "react";
import styles from './card.module.css'
import Muscle from '../../assets/images/gym.png'

class Card extends React.Component {
    render() {
        return (
            <div className={styles.nutritionCard}>
                <div className={styles.nutritionCardDesc}>Building Muscle</div>
                <div className={styles.nutritionCardList}>
                    <p>
                    Breakfast : Egg-white omelet with chicken and veggies<br/><br/>
                    Lunch : 1-2 grilled chicken breasts 2 handful-sized servings of brown rice<br/><br/>
                    Dinner : Large salad with mixed veggies 1 baked regular or sweet potato<br/><br/>
                    </p>
                </div>
                {/* <div className={styles.nutritionCardDesc}>Building Muscle
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
                </ul> */}
            </div>
        )
    }
}

export default Card;