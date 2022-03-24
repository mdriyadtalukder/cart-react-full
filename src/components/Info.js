import React from 'react';
import './Info.css'

const Info = (props) => {

    let t=0;
    let s=0;
    let quantity=0;
    for(const e of props.io){
        quantity=quantity+e.quantity;
        t=t+e.price*e.quantity;
        s=s+e.shipping;
    }
    const tax=parseFloat(((t*10)/100).toFixed(2));
    const grand=t+s+tax;
    return (
        <div className='is'>
            <h2>Order Summary</h2>
            <p>Selected Item: {quantity}</p>
            <p>Total Price: ${t}</p>
            <p>Total Shipping Charge: ${s} </p>
            <p>Tax: ${tax} </p>
            <h5>Grand Price: ${grand} </h5>
        </div>
    );
};

export default Info;