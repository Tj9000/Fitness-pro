import React, { Component } from 'react';
import styles from './footer.module.css';
import Icon from 'react-web-vector-icons';

class Footer extends Component {
    render() {
        return (
            <div className={styles.footerContainer}>
                <div className={styles.footer}>
                    <div className={styles.footerTextContainer}>
                        <div className={[styles.footerLiHead, 'fitVibText'].join(' ')}>FitVib</div>
                        <div>Home</div>
                        <span className={styles.pipe}>|</span>
                        <div>Membership</div>
                        <span className={styles.pipe}>|</span>
                        <div>Contact Us</div>
                    </div>

                    <div className={styles.footerIconContainer}>

                        <div className={styles.iconWrapper} style={{ backgroundColor: '#3B5998' }}>
                            <Icon name="facebook" font="FontAwesome" color={'white'} className={styles.icon} />
                        </div>
                        <div className={styles.iconWrapper} style={{
                            backgroundColor: '#d6249f',
                            background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)'
                        }}>
                            <Icon name="instagram" font="FontAwesome" color={'white'} className={styles.icon} />
                        </div>
                        <div className={styles.iconWrapper} style={{ backgroundColor: '#55ACEE' }}>
                            <Icon name="twitter" font="FontAwesome" color={'white'} className={styles.icon} />
                        </div>


                    </div>

                    <div> © Copyright 2020 FitVib - All Rights Reserved </div>

                    {/* <ul className={styles.footerUl}> */}
                    {/* <li className={[styles.footerLiHead, 'fitVibText'].join(' ')}>FitVib</li> */}
                    {/* <li><a>ABOUT <span className={'fitVibText'}>FitVib</span></a></li> */}
                    {/* <li><a>WHY <span className={'fitVibText'}>FitVib</span></a></li> */}
                    {/* <li><a>VISION AND VALUES</a></li> */}
                    {/* <li><a>TRAINERS</a></li> */}
                    {/* </ul> */}
                    {/* <ul className={styles.footerUl}> */}
                    {/* <li className={styles.footerLiHead}>Legal</li> */}
                    {/* <li><a>TERMS*</a></li> */}
                    {/* <li><a>COPY RIGHTS</a></li> */}
                    {/* <li><a>LEGAL</a></li> */}
                    {/* <li><a>CONTACT US</a></li> */}
                    {/* </ul> */}
                    {/* <ul className={styles.footerUl}> */}
                    {/* <li className={styles.footerLiHead}>Social</li> */}
                    {/* <li><a>FACEBOOK</a></li> */}
                    {/* <li><a>INSTAGRAM</a></li> */}
                    {/* <li><a>SNAPCHAT</a></li> */}
                    {/* <li><a>TIKTOK</a></li> */}
                    {/* </ul> */}
                </div>
            </div>
        )
    }

}

export default Footer;