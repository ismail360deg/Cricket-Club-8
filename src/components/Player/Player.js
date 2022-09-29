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
                <h2>Add A Break</h2>
                <div className='Break-info'>
                    <button>10h</button>
                    <button>20h</button>
                    <button>30h</button>
                    <button>40h</button>
                </div>

                <h2>Exercise Details</h2>
                <div className='exercisee-time'>
                    <h3>Exercise Time</h3>
                    <h3 className='time-seconds'>200 seconds</h3>
                </div>
                <div className='break-time'>
                    <h3>Break Time</h3>
                    <h3 className='time-seconds'>15 seconds</h3>
                </div>

                <button className='activity'>Activity Completed</button>
                <h1>seleted item {cart.length}</h1>
            </div>
        </div>
    );
};

export default Player;