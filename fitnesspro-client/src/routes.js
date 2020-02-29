import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LandingPage from './pages/landingPage/landingPage';
import ProfileUpdatePage from './pages/profileUpdatePage/profileUpdatePage';

const createBrowserHistory = require('history').createBrowserHistory;
const customHistory =createBrowserHistory();

const Routes = () => {
    return (

        <Router history={customHistory}>
            <div className={'routes'}>
                <Switch>
                    <Route path='/' exact component={LandingPage}></Route>
                    <Route path='/profile/update' exact component={ProfileUpdatePage}></Route>
                </Switch>
            </div>
        </Router>
    );
}

export default Routes;