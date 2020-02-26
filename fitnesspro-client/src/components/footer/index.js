import React, { Component } from 'react';
import './footer.css'
class Footer extends Component {
    render() {
        return (
            <div className={'footerContainer'}>
                <div className={'footer'}>
                    <ul className={'footerUl'}>
                        <li><a>ABOUT FITPRO</a></li>
                        <li><a>WHY FITPRO</a></li>
                        <li><a>VISION AND VALUES</a></li>
                        <li><a>TRAINERS</a></li>
                    </ul>
                    <ul className={'footerUl'}>
                        <li><a>TERMS*</a></li>
                        <li><a>COPY RIGHTS</a></li>
                        <li><a>LEGAL</a></li>
                        <li><a>CONTACT US</a></li>
                    </ul>
                    <ul className={'footerUl'}>
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