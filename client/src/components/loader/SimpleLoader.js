import React from 'react';
import styles from './SimpleLoader.module.css';

export default ({size = 120}) => {
    return <div className={styles.loader} style={{width: `min(60vw,${size}px)`, height: `min(60vw,${size}px)`}}></div>
} 