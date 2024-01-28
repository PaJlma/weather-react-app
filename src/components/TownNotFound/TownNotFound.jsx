import React from 'react';
import styles from './TownNotFound.module.css';

import notFound from '../../assets/images/not_found.svg';

const TownNotFound = (props) => {
    return (
        <div className={styles.body}>
            <img className={styles.body} src={notFound} alt="Not Found" />
        </div>
     );
}

export default TownNotFound;