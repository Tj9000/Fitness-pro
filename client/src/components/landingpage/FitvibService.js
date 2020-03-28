import React from 'react';
import styles from './fitvibservice.module.css'
import Gym from '../../assets/images/gym.png'

class FitvibService extends React.Component {
    render() {
        return (
            <div className={styles.serviceContainer}>
                <div className={styles.imageWrapper}>
                    <img src={Gym} alt={'Gym'} height='70px' width='70px' className={styles.image}></img>
                </div>
                <div className={styles.serviceHeader}>{this.props.serviceHeader}</div>
                <div className={styles.serviceContent}>
                    {/* <p style={{ textAlign: 'center' }}> */}
                        {this.props.serviceDesc}
                    {/* </p> */}
                </div>
            </div>

        )
    }
}

export default FitvibService;