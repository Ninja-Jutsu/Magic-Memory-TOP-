import cardCover from '../../../public/img/cover.png';
import './Card.css';

function Card({ card, handleChoice, flipped, isDisabled }) {
  function handleClick() {
    if (!isDisabled) {
      handleChoice(card);
    }
  }
  return (
    <div className={`card ${card.matched ? 'shine' : ''}`}>
      <div className={flipped ? 'flipped' : ''}>
        <img
          className='front'
          src={card.src}
          alt='card-front'
        />
        <img
          className='back'
          src={cardCover}
          alt=''
          onClick={handleClick}
        />
      </div>
    </div>
  );
}

export default Card;
