import React from "react";
import Icon from 'react-web-vector-icons';
import styles from './IconDropdown.module.css'

import * as _ from 'lodash';


export const IconDropdown = ({ buttonText, onClick, data, selectedVal }) => {
    return (
        <div className={styles.DropdownContainer}>
            <div className={styles.changeButton}>
                <span>{buttonText}</span>
                <Icon name="arrow-drop-down" font="MaterialIcons" size={20} color={'var(--primary-color)'} />
            </div>
            <div className={styles.DropdownContent}>
                {
                    _.map(_.toPairs(data), ([k, v]) => <div
                        className={[styles.DropdownList, v===selectedVal? styles.DropdownListSelected : ''].join(' ')}
                        key={k}
                        onClick={() => onClick(k)}>
                        {v}
                    </div>
                    )
                }
            </div>
        </div>
    )
}