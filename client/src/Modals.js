import React, { Fragment } from 'react';

import LoginModal from './components/loginModal/LoginModal';
import LogoutModal from './components/logoutModal/LogoutModal';
import LoadingModal from './components/loadingModal/LoadingModal';

export default () => {
    return (
        <Fragment>
            <LoginModal />
            <LogoutModal />
            <LoadingModal />
        </Fragment>
    );
}