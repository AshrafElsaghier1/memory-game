import React from 'react';
import PropTypes from 'prop-types';

import styles from './Result.module.css';

const Result = ({ restartGame }) => (
    <div className={`${styles.container} frosted`}>
        <p> Awesome !</p>
        <button className={`${styles.button} frosted`} onClick={restartGame}>
            Finished Game
        </button>
    </div>
);

export default Result;
Result.protoTypes = {
    restartGame: PropTypes.func.isRequired,
};
