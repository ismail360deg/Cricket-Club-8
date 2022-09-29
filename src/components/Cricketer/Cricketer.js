import React from 'react';
import './Cricketer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Cricketer = (props) => {
    const { player, handleAddToCart } = props
    const { picture, name, time } = player
    return (
        <div className='cricketer'>
            <img src={picture} alt=""></img>
            <div className='cricketer-info'>
                <h3 className='cricketer-name'>{name}</h3>
                <h4>Time-Requried: {time}h</h4>
            </div>
            <button onClick={() => handleAddToCart(player)} className='btn-cart'>
                <h5 className='btn-text'>Add To Cart</h5>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Cricketer;