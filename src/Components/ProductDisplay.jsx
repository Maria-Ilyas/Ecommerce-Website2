import React, { useContext } from 'react';
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import "./ProductDisplay.css";
import { ShopContext } from '../Context/ShopContext';

const ProductDisplay = (props) => {
   const {product} = props; 
   const {addToCart} = useContext(ShopContext);

  return (
    <div className='productDisplay'>
         <div className="product-left">
             <div className="img-List">
                  <img src={product.image} />
                  <img src={product.image} />
                  <img src={product.image} />
                  <img src={product.image} />
             </div>
             <div className="displayImage">
                 <img className="main-image" src={product.image} alt="" />
             </div>
         </div>
         <div className="product-rightt">
              <h1>{product.name}</h1>
              <div className="right-star">
                   <FaStar className='star'/>
                   <FaStar className='star'/>
                   <FaStar className='star'/>
                   <FaStar className='star'/>
                   <FaStarHalfAlt className='star'/>
                   <p>(135)</p>
              </div>
              <div className="right-prices">
                  <div className="oldd">${product.old_price}</div>
                  <div className="right_price_new">${product.new_price}</div>
              </div>
              <div className="description">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse sit provident impedit laboriosam nulla? Nam!
              </div>
              <div className="right_size">
                   <h1>Select Size</h1>
                   <div className='select-size'>
                       <div>S</div>
                       <div>M</div>
                       <div>L</div>
                       <div>XL</div>
                   </div>
              </div>
              <button onClick={()=>{addToCart(product.id)}}>Add To Cart</button>
              <p className='right-category'><span>Category: </span> Women, T-Shirt, Crop Top</p>
              <p className='right-category'><span>Tags: </span> Modern, Latest</p>

         </div>
    </div>
  )
}

export default ProductDisplay