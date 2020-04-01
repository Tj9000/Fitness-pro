import React from "react";
import styles from './NutritionCard.module.css'
import * as _ from 'lodash';

class Card extends React.Component {
    nutritionListElement = ({ time, nutrition = [] }) => {
        return <div className={styles.nutritionCardListElement}>
            <p className={styles.nutritionCardListElementHeader}>{time}:</p>
            {
                _.size(nutrition) ? (<ul>
                    {_.slice(nutrition, 0, 4).map((n,i) => <li key={i}>{n}</li>)}
                </ul>) : (
                        <div className={styles.noNutritionInfo}> No Nutrition Info</div>
                    )
            }

        </div>
    }

    render() {
        return (
            <div className={styles.nutritionCard}>
                <div className={styles.nutritionCardDesc}>{this.props.title || 'Nutrition'}</div>
                <div className={styles.nutritionCardList}>
                    {
                        this.props.part1 && this.props.part1.time ?
                            <this.nutritionListElement time={this.props.part1.time} nutrition={this.props.part1.plan} /> :
                            <div className={styles.noNutritionInfo}> No Nutrition Info</div>
                    }
                    {
                        this.props.part2 && this.props.part2.time ?
                            <this.nutritionListElement time={this.props.part2.time} nutrition={this.props.part2.plan} /> :
                            <div className={styles.noNutritionInfo}> No Nutrition Info</div>
                    }
                </div>
            </div>
        )
    }
}

export default Card;