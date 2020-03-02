import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LandingPage from './pages/landingPage/landingPage';

import MembershipPage from './pages/membership/MembershipPage';
import BillingPage from './pages/billing/BillingPage';
import SupportPage from './pages/support/SupportPage';
import WorkoutPlanPage from './pages/workoutplan/WorkoutPlanPage';
import ProfilePage from './pages/profile/ProfilePage';

const createBrowserHistory = require('history').createBrowserHistory;
const customHistory = createBrowserHistory();

const Routes = () => {
    return (

        <Router history={customHistory}>
            <div className={'routes'}>
                <Switch>
                    <Route path='/' exact component={LandingPage}></Route>
                    <Route path='/profile' exact render={(props) => <ProfilePage {...props} isEditProfile={false} />}></Route>
                    <Route path='/profile/update' exact render={(props) => <ProfilePage {...props} isEditProfile={true} />}></Route>
                    <Route path='/membership' exact component={MembershipPage}></Route>
                    <Route path='/billing' exact component={BillingPage}></Route>
                    <Route path='/support' exact component={SupportPage}></Route>
                    <Route path='/workoutplan' exact component={WorkoutPlanPage}></Route>
                </Switch>
            </div>
        </Router>
    );
}

export default Routes;