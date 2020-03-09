import React, { Component } from "react";
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import LandingNavBar from '../../components/navBar/Landing';
import Footer from '../../components/footer';
import FitPic1 from '../../assets/images/fitPic1.png'
import FitPic2 from '../../assets/images/fitPic2.png'
import FitPic3 from '../../assets/images/fitPic3.png'
import './landingPage.css'

class LandingPage extends Component {
    render() {
        return (
            <div className="pageMainContainer">
                <LandingNavBar />
                <div style={{ width: '100%' }}><img src={FitPic1} width='100%'></img></div>
                <div style={{ width: '100%' }}>
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

                </div>

                <Footer />
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