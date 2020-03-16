import React, { Fragment } from 'react';

import LoginModal from './components/loginModal/LoginModal';
import LoadingModal from './components/loadingModal/LoadingModal';

export default () => {
    return (
        <Fragment>
            <LoginModal />
            <LoadingModal />
        </Fragment>
    );
}