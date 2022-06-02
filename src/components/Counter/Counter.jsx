import React from 'react';
import PropTypes from 'prop-types';

import './Counter.css';
const step = 2;
const Counter = ({ cardsCount, onClick }) => {
    const inDecrement = e => {
        e.preventDefault();
        const number = cardsCount - step;
        if (number >= 2) onClick(number);
    };
    const inIncrement = e => {
        e.preventDefault();
        const number = cardsCount + step;
        if (number <= 160) onClick(number);
    };
    return (
        <div className="quantity">
            <button className="minus" onClick={inDecrement}>
                -
            </button>
            <span className="quantity"> {cardsCount} </span>
            <button className="plus" onClick={inIncrement}>
                +
            </button>
        </div>
    );
};

export default Counter;

Counter.propTypes = {
    cardsCount: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
};
