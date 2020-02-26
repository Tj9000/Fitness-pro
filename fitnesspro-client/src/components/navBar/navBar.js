import { Component } from 'react';
import React from 'react';
import './navBar.css'


class NavBar extends Component {
  render() {
    return <div className={'nav'}>
      <ul className={'leftList'}>
        <li className={'listItem'}><a>Home</a></li>
        <li className={'listItem'}><a>Title1</a></li>
        <li className={'listItem'}><a>Title1</a></li>
      </ul>
      <ul className={'rightList'}>
        <li className={'listItem'}><a>Logout</a></li>
      </ul>
    </div>
  }
}

export default NavBar;