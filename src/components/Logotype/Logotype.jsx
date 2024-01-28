import React from 'react';
import styles from './Logotype.module.css';

import logotype from '../../assets/images/logotype.svg';
import { NavLink } from 'react-router-dom';

const Logotype = (props) => {
    return (
        <NavLink to="/">
            <img className={styles.body} src={logotype} alt="Weather Golem" />
        </NavLink>
     );
}

export default Logotype;