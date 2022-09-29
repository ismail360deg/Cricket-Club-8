import React, { useEffect, useState } from 'react';
import Cricketer from '../Cricketer/Cricketer';
import './Player.css'
import logo1 from '../../Nazmul.jpg'

const Player = () => {
    const [players, setPlayers] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect(() => {
        fetch('cricket.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, []);

    const handleAddToCart = (player) => {
        console.log(player)
        // cart.push(player)
        const newCart = [...cart, player]
        setCart(newCart)
    }

    return (
        <div className='player-container'>
            <div className="players-container">
                {
                    players.map(player => <Cricketer
                        key={player.name}
                        player={player}
                        handleAddToCart={handleAddToCart}
                    ></Cricketer>)
                }
            </div>
            <div className="cart-container">
                <img src={logo1} alt="" />
                <h3>Nazmul Hossen Papun</h3>
                <p>President of Bangladesh Cricket Board</p>
                <h1>seleted item {cart.length}</h1>
            </div>
        </div>
    );
};

export default Player;