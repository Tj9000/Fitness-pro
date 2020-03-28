import React from 'react';
import styles from './SimpleLoader.module.css';

export default ({size = 120}) => {
    return <div className={styles.loader} style={{width: `${size}px`, height: `${size}px`}}></div>
} 