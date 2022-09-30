
import './Cart.css';
import React, { useEffect, useState } from 'react';
import logo1 from '../../Nazmul.jpg';


import Swal from 'sweetalert2'

const Cart = (props) => {

    const { cart } = props

    console.log(cart);

    let total = 0
    for (const player of cart) {
        total = total + parseFloat(player.time)
    }


    const activity = () => {
        Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
        )
    }

    const [time, setTime] = useState(0)

    useEffect(() => {
        let newTime = []
        const brTime = setTime((time))


        if (brTime) {
            brTime.push(newTime)
        }
    }, [time])


    return (
        <div className='cart'>
            <img src={logo1} alt="" />
            <h3>Nazmul Hossen Papun</h3>
            <p>President of Bangladesh Cricket Board</p>
            <h2>Add A Break</h2>

            <div className='Break-info'>

                <button onClick={() => (setTime(10))}>10m</button>
                <button onClick={() => (setTime(20))}>20m</button>
                <button onClick={() => (setTime(30))}>30m</button>
                <button onClick={() => (setTime(40))}>40m</button>

            </div>

            <h2>Exercise Details</h2>

            <div className='exercisee-time'>
                <h5>Exercise Time</h5>
                <h5 className='time-seconds'>{total} hours</h5>

            </div>

            <div className='break-time'>

                <h5>Break Time</h5>

                <h5 className='time-seconds'> {time} minute</h5>

            </div>

            <button onClick={activity} className='activity'>Activity Completed</button>
        </div>

    );
};

export default Cart;







