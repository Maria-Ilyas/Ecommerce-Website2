import React,{ useState } from 'react';
import "./Login.css";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Components/firebase';
import { setDoc, doc } from 'firebase/firestore';
import { db } from '../Components/firebase';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const SignUp = () => {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState(""); 


  const handleRegister= async(e)=>{
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth,email,password);
      const user = auth.currentUser;
      console.log(user);
      if(user){
        await setDoc(doc(db,"Users",user.uid), {
            email: user.email,
            password: password,
            displayname: name,
        });
      }
      console.log("User Registered Successfully!!");
      toast.success("User Registered Successfully!!",{position:'top-center'});
    } catch(error){
      console.log(error.message);
      toast.error(error.message,{position:'bottom-center'});

    }
  }

  return (
    <div className='login'>
       <div className='login-container'>
           <h1>Sign Up</h1>
           <form onSubmit={handleRegister}>
            <div className="fields">
              <input type="text" placeholder='Your Name' value={name} required onChange={(e)=> setName(e.target.value)} />
              <input type="email" placeholder='Email Address' required value={email} onChange={(e)=> setEmail(e.target.value)}/>
              <input type="password" placeholder='Password' required value={password} onChange={(e)=> setPassword(e.target.value)} />
            </div> 
            <button className='continue'>Sign Up</button>
    
            <p className='line'>Already have an account? <Link to="/login"><span>Login</span></Link></p>
        
            <div className="agree">
               <input type="checkbox" name='' id='' required />
               <p>By continuing, I agree to the terms of use & privacy policy.</p>
            </div>
           </form> 
       </div>
    </div>
  )
}

export default SignUp