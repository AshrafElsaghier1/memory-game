import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Loader from '../Loader';
import styles from './Board.module.css';
import useGetImages from '../../hooks/useGetImages';
import Card from '../Card/';
import useGameLogic from '../../hooks/useGameLogic';
import Result from '../Result';
const Board = ({ gameOptions, restartGame }) => {
    const [isLoading, setIsLoading] = useState(true);
    const images = useGetImages(gameOptions);
    const { cards, onCardClick, isWin } = useGameLogic(images, gameOptions.pace);
    useEffect(() => {
        if (images.length > 0) setIsLoading(false);
    });

    return (
        <div>
            {isWin && <Result restartGame={restartGame} />}
            {isLoading && <Loader />}
            {!isLoading && (
                <div className={`${styles.board}`}>
                    {cards.map(card => {
                        return <Card key={card.unId} card={card} onCardClick={onCardClick} />;
                    })}
                </div>
            )}
        </div>
    );
};

export default Board;

Board.propTypes = {
    gameOptions: PropTypes.shape({
        pace: PropTypes.string.isRequired,
        cardsCount: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired,
    }),
    restartGame: PropTypes.func.isRequired,
};
