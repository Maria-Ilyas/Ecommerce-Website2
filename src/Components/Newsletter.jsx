import React from 'react';
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div className='newsletter'>
         <h1>Get Exclusive Offers on Your Email</h1>
         <p>Subscribe to our Newsletter and Stay Updated</p>
         <div>
              <input type="email" placeholder='Your Email Id' />
              <button>Subscribe</button>
         </div>
    </div>
  )
}

export default Newsletter