import React from 'react';
import PropTypes from 'prop-types';

import styles from './Card.module.css';
import Image from '../Image';
const Card = ({ card, onCardClick }) => {
    const onClick = () => {
        if (card.isFound || card.isShown) return;
        onCardClick(card.unId);
    };
    return (
        <div className={`${styles.container}`} onClick={onClick}>
            <div className={`${styles.card} ${card.isShown ? styles.flipped : ''}  `}>
                <div className={`${styles.front} ${card.isFound ? styles.found : ''} `}></div>
                <div className={`${styles.back}`}>
                    <Image imgLink={card.url} />
                </div>
            </div>
        </div>
    );
};

export default Card;

Card.propsTypes = {
    card: PropTypes.shape({
        url: PropTypes.string.isRequired,
        unId: PropTypes.number.isRequired,
        isShown: PropTypes.bool.isRequired,
        isFound: PropTypes.bool.isRequired,
    }),
    onCardClick: PropTypes.func.isRequired,
};
