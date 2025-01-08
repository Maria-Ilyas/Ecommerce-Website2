import React from 'react';
import Hero from '../Components/Hero';
import Popular from '../Components/Popular';
import Offer from '../Components/Offer';
import NewCollection from '../Components/NewCollection';
import Newsletter from '../Components/Newsletter';

const Shop = () => {
  return (
    <div>
        <Hero />
        <Popular />
        <Offer />
        <NewCollection />
        <Newsletter />
    </div>
  )
}

export default Shop;