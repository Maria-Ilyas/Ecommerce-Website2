import React, { useState, useContext} from 'react'
import { ShopContext } from '../Context/ShopContext';
import "./Proceed.css";
import { toast } from 'react-toastify';
const Proceed = () => {
 

    const {getTotalCartAmount} = useContext(ShopContext);
    const [user,setUser] = useState({
        fname: "",
        lname:"",
        phone: "",
        email: "",
        address: "",
      });
   
      

  
  let name,value;
  const data = (e) =>{
      name = e.target.name;
      value = e.target.value;
      setUser({...user,[name]:value});
  }

  const getData = async (e) => {
    const {fname,lname,phone, email,address} = user;
    e.preventDefault();
    const options = {
        method: 'POST',
        headers:{
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            fname,lname,phone, email,address
        })
    }
    const res = await fetch('https://ecommerce-form-62fff-default-rtdb.firebaseio.com/UserData.json',
        options
    )
    console.log(res);
    
    if(res){
        toast.success("Message Sent!!",{position:'top-center'});   
    }
    else{
        toast.error("An error occured!!",{position:'bottom-center'});   
    }
  }
  return (
    <div className='proceed'>
      <div className='checkout'>
        <h3>Basic Information</h3>
        <form method='post'>
        <div className='textt'>  
            <div>
               <label>First Name</label>
                <input type="text" name='fname' value={user.fname} onChange={data} required />
            </div>
            <div>
               <label>Last Name</label>
                <input type="text" name='lname' value={user.lname} onChange={data} required />
            </div>
            
        </div>
        <div className='textt'>  
            <div>
               <label>Phone Number</label>
                <input type="tel" name='phone' value={user.phone} onChange={data} required  />
            </div>
            <div>
               <label>Email Address</label>
                <input type="email" name='email' value={user.email} onChange={data} required />
            </div>
            
        </div>
       
       <div>
        <div className='full'>
            <label>Full Address</label>
            <textarea name='address' value={user.address} onChange={data} required></textarea>
        </div>


        
        </div>


        <div className='city'>
            <div>
                <label>City</label>
                <input type="text" required/>
            </div>
            <div>
                <label>State</label>
                <input type="text" required/>
            </div>
            <div>
                <label>Zip Code</label>
                <input type="text" required/>
            </div>
        </div>
        <button onClick={getData}>Place Order</button>
        </form>
    </div>

    <div className="down">
            <div className="cart-total">
                <h1>Cart Total</h1>
                <div>
                    <div className="total-items">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className='total-items'>
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className='total-items'>
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                </div>
            </div>
        </div>
    </div> 
  )
}

export default Proceed