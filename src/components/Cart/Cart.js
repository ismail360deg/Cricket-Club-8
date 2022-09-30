
import './Cart.css';
import React, { useState } from 'react';
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

    const [time, setTime1] = useState({ time1: 0, time2: 0, time3: 0, time4: 0 });
    const { time1, time2, time3, time4 } = time;


    return (
        <div className='cart'>
            <img src={logo1} alt="" />
            <h3>Nazmul Hossen Papun</h3>
            <p>President of Bangladesh Cricket Board</p>
            <h2>Add A Break</h2>

            <div className='Break-info'>
                <button onClick={() => { setTime1({ ...time, time1: 10, time2: 0, time3: 0, time4: 0 }) }}>10h</button>
                <button onClick={() => { setTime1({ ...time, time1: 0, time2: 20, time3: 0, time4: 0 }) }}>20h</button>
                <button onClick={() => { setTime1({ ...time, time1: 0, time2: 0, time3: 30, time4: 0 }) }}>30h</button>
                <button onClick={() => { setTime1({ ...time, time1: 0, time2: 0, time3: 0, time4: 40 }) }}>40h</button>
            </div>

            <h2>Exercise Details</h2>

            <div className='exercisee-time'>
                <h5>Exercise Time</h5>
                <h5 className='time-seconds'>{total} hours</h5>

            </div>

            <div className='break-time'>

                <h5>Break Time</h5>





                <h5 className='time-seconds'>{time1} {time2} {time3} {time4} miniute</h5>



            </div>

            <button onClick={activity} className='activity'>Activity Completed</button>
        </div>

    );
};

export default Cart;







