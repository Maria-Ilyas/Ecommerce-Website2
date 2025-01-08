import React from 'react';
import "./Breadcrum.css";
import { FaArrowRight } from "react-icons/fa";

const Breadcrum = (props) => {
  const {product} = props;  
  return (
    <div className='breadcrum'>
        Home <FaArrowRight className='right'/>
        SHOP <FaArrowRight className='right'/> 
        {product.category} 
        <FaArrowRight className='right'/> {product.name}
    </div>
  )
}

export default Breadcrum;