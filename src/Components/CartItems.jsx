import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import { RxCross2 } from "react-icons/rx";
import "./CartItem.css";
import { Link } from 'react-router-dom';

const CartItems = () => {
  const {getTotalCartAmount,allProduct, cartItems, removeFromCart} = useContext(ShopContext); 
  return (
    <div className='cartItems'>
        <div className="format-main">
              <p>Products</p>
              <p>Title</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Total</p>
              <p>Remove</p>
        </div>
        <hr />
        {allProduct.map((e)=>{
           if(cartItems[e.id]>0)
            {
            return <div>
             <div className="cart-items-format format-main">
                <img src={e.image} alt="" className='carticon' />
                <p>{e.name}</p>
                <p className='individual'>${e.new_price}</p>
                <button className='quantity'>{cartItems[e.id]}</button>
                <p className='total-price'>${e.new_price*cartItems[e.id]}</p>
                <RxCross2 onClick={()=>{removeFromCart(e.id)}} className='remove-icon'/>
            </div>
            <hr />
         </div>
            }
          return null;  
        })}
        <div className="downs">
            <div className="cart-totals">
                <h1>Cart Total</h1>
                <div>
                    <div className="total-itemss">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className='total-itemss'>
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className='total-itemss'>
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button> <Link to="/checkout" className='checkoutt'>Proceed to Checkout</Link> </button>
            </div>
            <div className="promocode">
                <p>If you have a promo code, Enter it here</p>
                <div className="promo-box">
                     <input type="text" placeholder='Promo Code' />
                     <button>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItems