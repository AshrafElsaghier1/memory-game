import { useEffect, useState } from 'react';

const PACES_TIME = {
    easy: 1500,
    medium: 1000,
    hard: 500,
    pro: 200,
};

const useGameLogic = (images, paceOption) => {
    const [cards, setCards] = useState([]);
    const [isVisibleCards, setIsVisibleCards] = useState([]);
    const [score, setScore] = useState(0);
    const [isWin, setIsWin] = useState(false);
    const prepareCards = () => {
        const imgs = images.map(img => {
            return {
                id: img.id,
                url: img.src.small,
                isShown: false,
                isFound: false,
            };
        });
        const shuffledImgs = imgs.concat(imgs).sort(() => Math.random() - 0.5);

        const shuffledImgsWithId = shuffledImgs.map(img => {
            return { ...img, unId: Math.floor(Math.random() * 88888) };
        });

        setCards(shuffledImgsWithId);
    };
    const flipCard = id => {
        const flipedCard = cards.map(card => {
            if (card.unId === id) {
                card.isShown = true;
            }
            if (card.isShown) {
                setIsVisibleCards(oldState => [...oldState, card.unId]);
            }
            return card;
        });

        setCards(flipedCard);
    };

    const onCardClick = clickedCardId => {
        if (isVisibleCards.length < 2) flipCard(clickedCardId);
    };
    const updateScore = () => {
        setScore(oldScore => oldScore + 1);
    };
    const checkMatch = () => {
        const visible = cards.filter(card => isVisibleCards.indexOf(card.unId) !== -1);
        const matched = visible[0].id === visible[1].id;

        const updatedCards = cards.map(card => {
            if (isVisibleCards.indexOf(card.unId) !== -1) {
                card.isShown = false;
                card.isFound = matched;
            }
            return card;
        });
        setTimeout(() => {
            setCards(updatedCards);

            setIsVisibleCards([]);
            if (matched) updateScore();
        }, PACES_TIME[paceOption]);
    };
    useEffect(() => {
        if (images.length > 0) prepareCards();
    }, [images]);

    useEffect(() => {
        if (images.length && score === images.length) {
            setIsWin(true);
        }
    }, [score]);

    useEffect(() => {
        if (isVisibleCards.length >= 2) {
            checkMatch();
        }
    }, [isVisibleCards]);

    return { cards, onCardClick, isWin };
};

export default useGameLogic;
