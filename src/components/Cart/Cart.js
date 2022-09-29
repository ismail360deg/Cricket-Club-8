import React from 'react';
import './cart.css'
import logo1 from '../../Nazmul.jpg'

import Swal from 'sweetalert2'

const Cart = ({ cart }) => {


    const activity = () => {
        Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
        )
    }




    return (
        <div className='cart'>
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

            <button onClick={activity} className='activity'>Activity Completed</button>
            <h1>seleted item {cart.length}</h1>
        </div>
    );
};

export default Cart;