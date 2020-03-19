import React from 'react';

import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { push } from 'connected-react-router';

import styles from './FitVibLogo.module.css';

const FitVibLogo = (props) => {
    return(
        <div className={styles.LogoContainer}>
            <Link to='/' className={[styles.logoText, 'fitVibText'].join(' ')} style={{color: props.color || '#fff'}}>FitVib</Link>
        </div>
    )
};

export default FitVibLogo;

// const mapStateToProps = (state, ownProps) => ({
// });
// const mapDispatchToProps = {
//     pushRoute: push
// };
// export default connect(mapStateToProps, mapDispatchToProps)(General);