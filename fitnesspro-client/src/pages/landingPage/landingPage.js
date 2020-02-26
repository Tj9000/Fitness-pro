import React, { Component } from "react";
import NavBar from '../../components/navBar/navBar';
import Footer from '../../components/footer';
import FitPic1 from '../../assets/images/fitPic1.png'
import FitPic2 from '../../assets/images/fitPic2.png'
import FitPic3 from '../../assets/images/fitPic3.png'
import './landingPage.css'

class LandingPage extends Component {
    render() {
        return (

            <div>
                <NavBar />
                <div style={{ width: '100%' }}><img src={FitPic1} width='100%'></img></div>
                <div className={'landingpage-fittext-container'}>
                    <p><h1>MOVIE STARS</h1></p>
                </div>
                <div style={{ width: '100%' }}><img src={FitPic2} width='100%'></img></div>
                <div className={'landingpage-fittext-container'}>

                </div>
                <div style={{ width: '100%' }}><img src={FitPic3} width='100%'></img></div>
                <div className={'landingpage-fittext-container'}>

                </div>

                <Footer />
            </div>


        )
    }

}

export default LandingPage;