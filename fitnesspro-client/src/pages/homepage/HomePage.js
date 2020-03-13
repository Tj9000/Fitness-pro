import React from 'react';
import Video from '../../components/video/Video';
import styles from './homepage.css'
import NavBar from '../../components/navBar/NavBar'

export default class HomePage extends React.Component {


    render() {
        return (
            <div className="pageMainContainer">
                <NavBar currentPageHead="Today's Workouts " />
                <div style={{ display: 'flex', flex: 3, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                    <div className='video-container'>
                        <Video url='https://www.youtube.com/watch?v=9HCl9YKrrt0' />
                    </div>
                    <div className='video-container'>
                        <Video url='https://www.youtube.com/watch?v=1DpH-icPpl0' />
                    </div>
                    <div className='video-container'>
                        <Video url='https://www.youtube.com/watch?v=34Na4j8AVgA' />
                    </div>
                </div>
            </div>
        )
    }
}
