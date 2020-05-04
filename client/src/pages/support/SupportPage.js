import React, { Component } from "react";
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import Icon from 'react-web-vector-icons';
import styles from './SupportPage.module.css';
import { sendFeedBack } from "../../redux/actions/support";


import NavBar from "../../components/navBar/NavBar";

class SupportPage extends Component {
    constructor(props) {
        super(props);
        this.state = this.init;
    }

    init = {
        isCompleted: false,
        ratingValue: null,
        textValue: '',
        initialState: true,
        isRatingChosen: false,
        submitError: null
    };

    updateTextValue(e) {
        this.setState({
            textValue: e.target.value
        });
    }

    sendFeedBack = () => {
        if (this.state.ratingValue != null) {
            let feedBackDetails = { rating: this.state.ratingValue, feedback: this.state.textValue }
            this.props.sendFeedBackWithDispatch(feedBackDetails);
            this.setState({ initialState: false })
        }
        else {
            this.setState({ submitError: 'Please choose a rating before submitting.' });
        }
    }

    setRating = (rating) => {
        this.setState({
            ratingValue: rating,
            isRatingChosen: true,
            submitError: null
        });

    }

    render() {
        return (
            <div className="pageMainContainer">
                <NavBar type="user" />
                <div className={styles.feedbackContainter}>
                    {
                        !this.state.initialState && this.props.feedbackPosted ? (
                            <div>

                                <div className={styles.postSubmission} >
                                    <div>Feedback submitted !</div>
                                    <div onClick={() => { this.setState(this.init) }}>
                                        
                                        <button className={styles.button}>Go back</button>
                                    </div>
                                </div>
                            </div>) : (
                                <div className={styles.initDiv}>
                                    <div className={styles.feedbackBar}>
                                        <div onClick={() => this.setRating(1)} className={[styles.emojiDiv, this.state.ratingValue == 1 ? styles.emojiDivActive : null].join(' ')}>
                                            <Icon name="sentiment-very-dissatisfied" font="MaterialIcons" size={60} color={'#ff0000'} />
                                        </div>
                                        <div onClick={() => this.setRating(2)} className={[styles.emojiDiv, this.state.ratingValue == 2 ? styles.emojiDivActive : null].join(' ')}>
                                            <Icon name="sentiment-dissatisfied" font="MaterialIcons" size={60} color={'#ff8000'} />
                                        </div>
                                        <div onClick={() => this.setRating(3)} className={[styles.emojiDiv, this.state.ratingValue == 3 ? styles.emojiDivActive : null].join(' ')}>
                                            <Icon name="sentiment-neutral" font="MaterialIcons" size={60} color={'#e6e600'} />
                                        </div>
                                        <div onClick={() => this.setRating(4)} className={[styles.emojiDiv, this.state.ratingValue == 4 ? styles.emojiDivActive : null].join(' ')}>
                                            <Icon name="sentiment-satisfied" font="MaterialIcons" size={60} color={'#20a743'} />
                                        </div>
                                        <div onClick={() => this.setRating(5)} className={[styles.emojiDiv, this.state.ratingValue == 5 ? styles.emojiDivActive : null].join(' ')}>
                                            <Icon name="sentiment-very-satisfied" font="MaterialIcons" size={60} color={'#10d523'} />
                                        </div>

                                    </div>
                                    <div>
                                        <textarea rows="10" cols="30" name='feedbackText' value={this.state.textValue} onChange={e => this.updateTextValue(e)} placeholder='Please give your feedback here..' style={{ resize: 'none' }}></textarea>
                                    </div>
                                    <div className={styles.buttonDiv}>
                                        <button onClick={this.sendFeedBack} className={styles.button}>Submit</button>
                                    </div>
                                    {this.state.submitError ? <div className={styles.errorDiv}>{this.state.submitError}</div> : null}
                                    {this.props.feedbackFailed ? <div className={styles.errorDiv}>Something went wrong! Please try again.</div> : null}

                                </div>)


                    }

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    feedbackPosted: state.support.feedbackPosted,
    feedbackFailed: state.support.feedbackFailed
});

const mapDispatchToProps = {
    pushRoute: push,
    sendFeedBackWithDispatch: sendFeedBack
};
export default connect(mapStateToProps, mapDispatchToProps)(SupportPage);