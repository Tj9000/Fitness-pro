import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LandingPage from './pages/landingPage/landingPage';

const createBrowserHistory = require('history').createBrowserHistory;
const customHistory =createBrowserHistory();

const Routes = () => {
    return (

        <Router history={customHistory}>
            <div classname={'routes'}>
                <Switch>
                    <Route path='/' exact component={LandingPage}></Route>
                </Switch>
            </div>
        </Router>
    );
}

export default Routes;