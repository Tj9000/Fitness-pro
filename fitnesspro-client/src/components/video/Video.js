import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import { hot } from 'react-hot-loader'
import screenfull from 'screenfull'

import ReactPlayer from 'react-player';

class Video extends Component {
    state = {
        url: this.props.url,
        pip: false,
        playing: true,
        controls: true,
        light: false,
        volume: 0.8,
        muted: false,
        played: 0,
        loaded: 0,
        duration: 0,
        playbackRate: 1.0,
        loop: false
    }

    load = url => {
        this.setState({
            url,
            played: 0,
            loaded: 0
        })
    }
    componentDidMount() {
        screenfull.on('error', event => {
            console.error('Failed to enable fullscreen', event);
        });
        screenfull.on('change', (e) => {
            console.log('Am I fullscreen?', screenfull.isFullscreen ? 'Yes' : 'No', '. Enabled? ', screenfull.isEnabled, e);
        });
    }

    playerOnStart = () => {
        let playerNode = findDOMNode(this.player);
        let videoNode = playerNode && playerNode.firstChild;
        if (videoNode && videoNode.nodeName && videoNode.nodeName.toUpperCase() == 'VIDEO') {
            screenfull.request(videoNode)
        }
    }
    handleSetPlaybackRate = e => {
        this.setState({ playbackRate: parseFloat(e.target.value) })
    }

    handlePlay = () => {
        console.log('onPlay', this.player)
        this.setState({ playing: true })

    }

    handlePause = () => {
        console.log('onPause')
        this.setState({ playing: false })
    }

    handleProgress = state => {
        console.log('onProgress', state)
        // We only want to update time slider if we are not currently seeking
        if (!this.state.seeking) {
            this.setState(state)
        }
    }

    handleEnded = () => {
        console.log('onEnded')
        this.setState({ playing: this.state.loop })
    }

    handleDuration = (duration) => {
        console.log('onDuration', duration)
        this.setState({ duration })
    }
    ref = player => {
        this.player = player
    }

    render() {
        const { url, playing, controls, light, volume, muted, loop, playbackRate } = this.state
        return (
            <div>
                <ReactPlayer
                    ref={this.ref}
                    className='react-player'
                    url={url}
                    // width='100%'
                    // height='100%'
                    playing={playing}
                    controls={controls}
                    light={light}
                    loop={loop}
                    playbackRate={playbackRate}
                    volume={volume}
                    muted={muted}
                    onReady={() => console.log('onReady')}
                    onStart={this.playerOnStart}
                    onPlay={this.handlePlay}
                    onPause={this.handlePause}
                    onBuffer={() => console.log('onBuffer')}
                    onSeek={e => console.log('onSeek', e)}
                    onEnded={this.handleEnded}
                    onError={e => console.log('onError', e)}
                    onProgress={this.handleProgress}
                    onDuration={this.handleDuration}
                />
            </div>
        )
    }
}

export default hot(module)(Video)
