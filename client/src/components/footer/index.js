import React, { Component } from 'react';
import styles from './footer.module.css'
class Footer extends Component {
    render() {
        return (
            <div className={styles.footerContainer}>
                <div className={styles.footer}>
                    <ul className={styles.footerUl}>
                        <li className={[styles.footerLiHead, 'fitVibText'].join(' ')}>FitVib</li>
                        <li><a>ABOUT <span className={'fitVibText'}>FitVib</span></a></li>
                        <li><a>WHY <span className={'fitVibText'}>FitVib</span></a></li>
                        <li><a>VISION AND VALUES</a></li>
                        <li><a>TRAINERS</a></li>
                    </ul>
                    <ul className={styles.footerUl}>
                        <li className={styles.footerLiHead}>Legal</li>
                        <li><a>TERMS*</a></li>
                        <li><a>COPY RIGHTS</a></li>
                        <li><a>LEGAL</a></li>
                        <li><a>CONTACT US</a></li>
                    </ul>
                    <ul className={styles.footerUl}>
                        <li className={styles.footerLiHead}>Social</li>
                        <li><a>FACEBOOK</a></li>
                        <li><a>INSTAGRAM</a></li>
                        <li><a>SNAPCHAT</a></li>
                        <li><a>TIKTOK</a></li>
                    </ul>
                </div>
            </div>
        )
    }

}

export default Footer;