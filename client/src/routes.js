import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router'
import LandingPage from './pages/landingPage/landingPage';
import LoginPage from './pages/login/LoginPage';
import SignupPage from './pages/signup/SignupPage';

import MembershipPage from './pages/membership/MembershipPage';
import BillingPage from './pages/billing/BillingPage';
import SupportPage from './pages/support/SupportPage';
import WorkoutPlanPage from './pages/workoutplan/WorkoutPlanPage';
import ProfilePage from './pages/profile/ProfilePage';
import SelectTraining from './pages/selectTraining/SelectTraining';

import Modals from './Modals';

import { history } from './redux/store';
import { FireBase } from './firebase/firebase';

import Footer from './components/footer';
import HomePage from './pages/homepage/HomePage';

const Routes = () => {
    return (
        <ConnectedRouter history={history}>
            <Switch>
                <Route path='/' exact component={LandingPage}></Route>
                <Route path='/login' exact component={LoginPage}></Route>
                <PrivateRoute path='/signup' exact ><SignupPage/></PrivateRoute>
                <PrivateRoute path='/profile' exact> <ProfilePage isEditProfile={false} /> </PrivateRoute>
                <PrivateRoute path='/profile/update' exact> <ProfilePage isEditProfile={true} /> </PrivateRoute>
                <PrivateRoute path='/membership' exact> <MembershipPage isEdit={false} /> </PrivateRoute>
                <PrivateRoute path='/membership/update' exact> <MembershipPage isEdit={true} /> </PrivateRoute>
                <PrivateRoute path='/billing' exact> <BillingPage /> </PrivateRoute>
                <PrivateRoute path='/support' exact> <SupportPage /> </PrivateRoute>
                <PrivateRoute path='/workoutplan' exact> <WorkoutPlanPage /> </PrivateRoute>
                <PrivateRoute path='/homepage' exact> <HomePage /> </PrivateRoute>
                <PrivateRoute path='/training/select' exact><SelectTraining/></PrivateRoute>
            </Switch>
            <Modals />

            <Footer />
        </ConnectedRouter>
    );
}


// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                isAuthenticated() ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
}

function isAuthenticated() {
    let currentUser = FireBase.auth().currentUser;
    return !!currentUser;
}

export default Routes;