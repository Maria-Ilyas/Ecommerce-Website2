import React from 'react';
import "./Offer.css";
import pic from "../assets/hero2.jpg";

const Offer = () => {
  return (
    <div className='offer'>
        <div className="offer-left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>Only On Best Seller Products</p>
            <button>Check Now</button>
        </div>
        <div className="offer-right">
            <img src={pic} />
        </div>
    </div>
  )
}

export default Offer