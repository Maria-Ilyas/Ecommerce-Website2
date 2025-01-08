import React,{ useState } from 'react';
import "./Login.css";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Components/firebase';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const Login = () => {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState(""); 


  const handleSubmit= async(e)=>{
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth,email,password);
      console.log("User Logged in Successfully");
      window.location.href ="/Ecommerce-Website2/#/login";
      toast.success("User Login Successfully!!",{position:'top-center'});
    } catch(error){
      console.log(error.message);
      toast.error(error.message,{position:'bottom-center'});

    }
  }

  return (
    <div className='login'>
       <div className='login-container'>
           <h1>Login</h1>
           <form onSubmit={handleSubmit}>
            <div className="fields">
              <input type="email" placeholder='Email Address' required value={email} onChange={(e)=> setEmail(e.target.value)}/>
              <input type="password" placeholder='Password' required value={password} onChange={(e)=> setPassword(e.target.value)} />
            </div> 
            <button className='continue'>Login</button>
    
           <p className='line'>Create an account <Link to="/signup"><span>Sign Up</span></Link> </p> 
            
            <div className="agree">
               <input type="checkbox" name='' id='' required />
               <p>By continuing, I agree to the terms of use & privacy policy.</p>
            </div>
           </form> 
       </div>
    </div>
  )
}

export default Login