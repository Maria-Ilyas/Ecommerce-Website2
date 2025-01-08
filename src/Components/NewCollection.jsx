import React from 'react';
import "./NewCollection.css";
import women1 from "../assets/women1.avif";
import women2 from "../assets/women2.webp";
import kid2 from "../assets/kid2.jpeg";
import kid3 from "../assets/kid3.webp";
import men2 from "../assets/men2.jpeg";
import women6 from "../assets/women6.webp";
import men5 from "../assets/men5.jpeg";
import women8 from "../assets/women8.webp";


import Item from './Item';

let new_collection = [
    {
        id:1,
        name: "Stripped Flutter Sleeve Overlap Collar Peplum",
        image: women1,
        new_price: 50.00,
        old_price:80.50
    },
    {
        id:2,
        name: "Stripped Flutter Sleeve Overlap Collar Peplum",
        image: women2,
        new_price: 50.00,
        old_price:80.50
    },
    {
        id:3,
        name: "Stripped Flutter Sleeve Overlap Collar Peplum",
        image: kid2,
        new_price: 40.00,
        old_price:70.50
    },
    {
        id:4,
        name: "Stripped Flutter Sleeve Overlap Collar Peplum",
        image: kid3,
        new_price: 50.00,
        old_price:80.50
    },
    {
        id:5,
        name: "Stripped Flutter Sleeve Overlap Collar Peplum",
        image: men2,
        new_price: 50.00,
        old_price:80.50
    },
    {
        id:6,
        name: "Stripped Flutter Sleeve Overlap Collar Peplum",
        image: women6,
        new_price: 50.00,
        old_price:80.50
    },
    {
        id:7,
        name: "Stripped Flutter Sleeve Overlap Collar Peplum",
        image: men5,
        new_price: 50.00,
        old_price:80.50
    },
    {
        id:8,
        name: "Stripped Flutter Sleeve Overlap Collar Peplum",
        image: women8,
        new_price: 50.00,
        old_price:80.50
    },
];


const NewCollection = () => {
  return (
    <div className='new-collection'>
          <h1>New Collection</h1>
          <hr />
          <div className="collections">
              {new_collection.map((item,i)=>{
                return <Item key={i} id={item.id} name ={item.name} image = {item.image} new_price={item.new_price} old_price={item.old_price}/>     
              })}
          </div>
    </div>
  )
}

export default NewCollection