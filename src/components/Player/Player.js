import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Cricketer from '../Cricketer/Cricketer';
import './Player.css'


const Player = () => {
    const [players, setPlayers] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect(() => {
        fetch('cricket.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, []);

    const handleAddToCart = (player) => {
        // console.log(player)
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


                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Player;