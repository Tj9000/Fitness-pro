import { Component } from 'react';
import React from 'react';
import Landing from './Landing';
import General from './General';

class NavBar extends Component {
  render() {
    if (this.props.type == 'landing') {
      return <Landing />
    }
    else {
      return <General />
    }
  }
}

export default NavBar;