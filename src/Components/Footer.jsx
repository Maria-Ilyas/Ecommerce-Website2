import React from 'react';
import "./Footer.css";
import logo from "../assets/logo2.png";
import { IoLogoInstagram } from "react-icons/io5";
import { ImPinterest2 } from "react-icons/im";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
        <div className="logo">
            <img src={logo}  />
            <p>Shopify</p>
        </div>
        <ul className="links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="social-icons">
            <div className="icons">
                <IoLogoInstagram className='icon'/>
            </div>
            <div className='icons'>    
                <ImPinterest2 className='icon'/>
            </div>
            <div className='icons'>
                <FaWhatsapp className='icon'/>
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright &copy; 2025 - All Right Reserved.</p>

        </div>
    </div>
  )
}

export default Footer