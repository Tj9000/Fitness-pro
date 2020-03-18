import React, { Component } from "react";
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import LandingNavBar from '../../components/navBar/Landing';
import FitPic1 from '../../assets/images/landingpage/bg_2.jpg'
import FitPic4 from '../../assets/images/landingpage/ripped-man.jpg'

import FitPic2 from '../../assets/images/fitPic2.png'
import FitPic3 from '../../assets/images/fitPic3.png'
import styles from './landingPage.module.css'
import FitvibService from "../../components/landingpage/FitvibService";


class LandingPage extends Component {
    render() {
        return (
            <div className="pageMainContainer">
                <LandingNavBar />
                <div className={styles.imgC1} style={{ width: '100%' }}>
                    <div className={[styles.imgC1_def, styles.imgC1_1].join(' ')}>
                        {/* <img className={styles.bottom} src={FitPic4} width='100%'></img> */}
                        <div className={styles.textContainer}>
                            <div className={styles.imageTextheader}>Challenge <span style={{ color: '#e5ce48' }}>yourself</span></div>
                            <div className={styles.imageTextContent}>Train to be a better version of yourself, everyday!</div>
                            <div className={styles.buttonWrapper}><button className={styles.joinNow}>Join now</button></div>
                        </div>
                    </div>
                    <div className={[styles.imgC1_def, styles.imgC1_2].join(' ')}>
                        {/* <img className={styles.top} src={FitPic1} width='100%'></img> */}
                        <div className={styles.textContainer}>
                            <div className={styles.imageTextheader}>We are <span style={{ color: '#e5ce48' }}>FitVib</span></div>
                            <div className={styles.imageTextContent}> The future of fitness</div>
                            <div className={styles.buttonWrapper}><button className={styles.joinNow}>Join now</button></div>
                        </div>
                    </div>
                </div>
                <div style={{width:'100%'}}>                    
                    <div className={styles.serviceHeading}>Trust the <span style={{color:'#e5ce48'}}>process</span></div>
                    <div className={styles.serviceSubHeading}>Some motivational lines here</div>
                    <div className={styles.serviceContainer}>
                        <div className={styles.fitvibServiceContainer}>
                            <FitvibService serviceHeader="Analyse your goal" serviceDesc="Random content 1" />
                        </div>
                        <div className={styles.fitvibServiceContainer}>
                            <FitvibService serviceHeader="work hard on it" serviceDesc="Random content 2." />
                        </div>
                        <div className={styles.fitvibServiceContainer}>
                            <FitvibService serviceHeader="Improve your performance" serviceDesc="Random content 3." />
                        </div>
                        <div className={styles.fitvibServiceContainer}>
                            <FitvibService serviceHeader="Achieve perfect body" serviceDesc="Random content 4." />
                        </div>
                    </div>
                </div>

                {/* <div style={{ width: '100%' }}>
                    <div style={{ textAlign: 'center' }}>
                        <p style={{ display: 'inline', fontStyle: 'italic', fontSize: '35px' }}>
                            MOVIE STARS
                        </p>
                    </div>
                    <div style={{ textAlign: 'center', margin: '10px', alignSelf: 'center' }}>
                        <p style={{ display: 'inline', fontStyle: 'bold', fontSize: '70px' }}>
                            FITNESS IS<br />NOT SECRET
                        </p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <p>
                            YOU ARE CELEBRITY FOR US<br />SO TRAIN AS ONE WITH CELEB TRAINERS
                        </p>
                    </div>
                </div>
                <div style={{ textAlign: 'center', padding: '3px' }}>
                    <p style={{ fontStyle: 'italic', fontSize: '20px' }}>
                        Train With The Best To Become Beast
                    </p>
                </div>
                <div style={{ width: '100%' }}><img src={FitPic2} width='100%'></img></div>
                <div style={{ textAlign: 'center', padding: '5px' }}>
                    <p style={{ fontStyle: 'italic', fontSize: '20px' }}>
                        Our Promise Is Result Not Pumpkins
                    </p>
                </div>
                <div style={{ width: '100%' }}><img src={FitPic3} width='100%'></img></div>
                <div className={'landingpage-fittext-container'}>

                </div> */}
            </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => ({
});
const mapDispatchToProps = {
    pushRoute: push
};
export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);