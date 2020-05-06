import React, { Component } from "react";
import { connect } from 'react-redux';
import { push, replace } from 'connected-react-router';
import { showLoginModal } from "../../redux/actions/modal";
import { checkUserSignedIn } from '../../redux/actions/login';

import LandingNavBar from '../../components/navBar/Landing';
import styles from './landingPage.module.css'
import FitvibService from "../../components/landingpage/FitvibService";
import TrainingImg1 from '../../assets/images/landingpage/aerobicsTraining.jpg'
import TrainingImg2 from '../../assets/images/landingpage/gymTraining.png'
import TrainingImg3 from '../../assets/images/landingpage/weightsTraining.jpg'

import * as _ from 'lodash';


class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            promptLoginMessage: null,
            firstLoginPromptClose: false,
            referPath: null,
        };
    }
    componentDidMount() {
        if (this.props.location && this.props.location.state && this.props.location.state.promptLoginMessage) {
            // this.props.showLoginModal()
        }
        this.props.checkUserSignedIn()

    }
    componentDidUpdate() {
        if (!this.props.checkingLogin && !!this.props.signedIn && _.size(this.props.userDetails)) {
            let redirectRoute = this.props.userDetails.profileSignupComplete ? '/homepage' : '/signup';
            this.props.replaceRoute(redirectRoute);
        }
    }
    render() {
        return (
            <div className="pageMainContainer">
                <LandingNavBar />
                <div className={styles.imgC1} style={{ width: '100%' }}>
                    <div className={[styles.imgC1_def, styles.imgC1_1].join(' ')}>
                        {/* <img className={styles.bottom} src={FitPic4} width='100%'></img> */}
                        <div className={styles.textContainer}>
                            <div className={styles.imageTextheader}>Personal <span style={{ color: '#e5ce48' }}>Training</span></div>
                            <div className={styles.imageTextContent}>We know how to make you stronger</div>
                            <div className={styles.buttonWrapper}><button className={styles.joinNow}>Join now</button></div>
                        </div>
                    </div>
                    <div className={[styles.imgC1_def, styles.imgC1_2].join(' ')}>
                        {/* <img className={styles.top} src={FitPic1} width='100%'></img> */}
                        <div className={styles.textContainer}>
                            <div className={styles.imageTextheader}>We are <span style={{ color: '#e5ce48' }} className={'fitVibText'}>FitVib</span></div>
                            <div className={styles.imageTextContent}> The future of fitness</div>
                            <div className={styles.buttonWrapper}><button className={styles.joinNow}>Join now</button></div>
                        </div>
                    </div>
                </div>
                <div className={styles.fitnessText}>
                    <span>
                        FITNESS IS NOT A SECRET
                    </span>
                    <span style={{ color: 'white', fontSize: '1.8rem', padding: '10px' }}>
                        Train With The Best To Become Beast
                    </span>
                </div>
                <div className={styles.ourTrainingsContainer}>
                    <div className={styles.ourTrainingsHeading}>Our Trainings</div>

                    <div className={styles.ourTrainingsContent}>
                        <div className={styles.trainingImgWrapper}>
                            <img src={TrainingImg1} className={styles.trainingImg} />
                            <div className={styles.trainingImgDesc}>Aerobics</div>
                        </div>
                        <div className={styles.trainingImgWrapper}>
                            <img src={TrainingImg2} className={styles.trainingImg} />
                            <div className={styles.trainingImgDesc}>Gym</div>
                        </div>
                        <div className={styles.trainingImgWrapper}>
                            <img src={TrainingImg3} className={styles.trainingImg} />
                            <div className={styles.trainingImgDesc}>Free Weights</div>

                        </div>

                    </div>




                </div>
                <div className={styles.serviceImgTextContainer}>
                    <div className={styles.serviceHeading}>Trust the <span style={{ color: '#e5ce48' }}>process</span></div>
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

                <div className={styles.homepageContainer1}>
                    <div className={styles.aboutFitvib}>
                        <div className={styles.aboutFitvibWelcome}>
                            <span>welcome to fitvib</span>
                        </div>
                        <div className={styles.aboutFitvibHeading}>
                            <span>
                                About <span className={'fitVibText'}>FitVib</span> <span className={styles.dot} />
                            </span>
                        </div>
                        <div className={styles.aboutFitvibDesc}>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.t
                            </p>
                        </div>
                        <div className={styles.aboutFitvibWelcome} style={{ paddingBottom: '30px' }}>
                            <span> Our Promise Is Result, Not Pumpkins !</span>
                        </div>


                    </div>
                </div>

            </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => ({
    checkingLogin: state.login.checkingLogin,
    signedIn: state.login.signedIn,
    userDetails: state.user.details
});
const mapDispatchToProps = {
    pushRoute: push,
    replaceRoute: replace,
    showLoginModal,
    checkUserSignedIn
};
export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);