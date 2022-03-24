import React from 'react';
import './Head.css'
import logo from '../../images/Logo.svg'

const Head = () => {
    return (
        <nav className='hd'>
           <img src={logo} alt="" /> 
           <div className='an'>
               <a href="/home">Home</a>
               <a href="/product">Product</a>
               <a href="/contact">Contact</a>
               <a href="/about">About</a>
           </div>
        </nav>
    );
};

export default Head;