import { Component } from 'react';
import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import Landing from './Landing';
import General from './General';

class NavBar extends Component {
  render() {
    if (this.props.type === 'landing') {
      return <Landing />
    }
    else {
      return <General currentPageHead={this.props.currentPageHead} />
    }
  }
}

const mapStateToProps = (state, ownProps) => ({
});
const mapDispatchToProps = {
  pushRoute: push
};
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);