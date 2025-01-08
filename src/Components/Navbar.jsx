import React, { useEffect, useContext, useState } from 'react';
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from 'react-router-dom';
import logo from "../assets/logo2.png";
import './Navbar.css';
import { ShopContext } from '../Context/ShopContext';
import { auth } from './firebase';

const Navbar = () => {

  const [menu,setMenu] = useState("shop");
  const {getTotalCartItems} = useContext(ShopContext);

  const [user,setUser] = useState();
    useEffect(()=>{
      auth.onAuthStateChanged((user)=>{
         setUser(user);
      });
    })

  return (
    <div className='navbar'>
        <div className='logo'>
            <img src={logo} />
            <p>Shopify</p>
        </div>
        <ul className='nav-menu'>
           <li onClick={()=>{setMenu("shop")}}><Link to="/" className='link'> Shop </Link>{menu === "shop" ? <hr/>:<></>}</li>
           <li onClick={()=>{setMenu("men")}}><Link to="/men" className='link'> Men </Link> {menu === "men" ? <hr/>:<></>}</li>
           <li onClick={()=>{setMenu("women")}}><Link to="/women" className='link'> Women</Link> {menu === "women" ? <hr/>:<></>}</li>
           <li onClick={()=>{setMenu("kids")}}><Link to="/kids" className='link'> Kids </Link> {menu === "kids" ? <hr/>:<></>}</li>
        </ul>
        <div className='buttons'>
         {user ? <Link to="/profile" className='link'><button>Logout</button></Link>:
           <Link to="/login" className='link'><button>Login</button></Link> 
           }
            
            <Link to="/cart" className='link'><MdOutlineShoppingCart  className='cart'/> </Link>
            <div className='counter'>{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar;