import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { lc } from './local';
import './Prod.css';
const Prod = (props) => {
  console.log(props.pd.name)
  return (
    <div className='pdt'>
      <div className="div">
        <img src={props.pd.img} alt="" />
      </div>
      <div className="inf">
        <p>{props.pd.name} </p>
        <p>Price: ${props.pd.price} </p>
        <p>Shipping :${props.pd.shipping} </p>
        <p>Rating: {props.pd.ratings} </p>
        <button onClick={() => props.c(props.pd)}>
          <p>Add to card</p>
          <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>

        </button>
      </div>
    </div>
  );
};

export default Prod;