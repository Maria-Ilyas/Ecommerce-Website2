import React, { useEffect, useState } from 'react';
import { auth,db } from '../Components/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import "./Profile.css";

const Profile = () => {
  const [userDetail, setUserDetail] = useState(null);  

  const fetchUserData=async()=>{
      auth.onAuthStateChanged( async (user)=>{
         console.log(user);
         const docRef=doc(db,"Users",user.uid);
         const docSnap = await getDoc(docRef);
         if(docSnap.exists()){
            setUserDetail(docSnap.data());
            console.log(docSnap.data());
         }else{
            console.log("User is not logged in");
         }
      });
  };
  useEffect(()=>{
    fetchUserData()
  },[]);

 async function Logout(){
    try{
       await auth.signOut()
       window.location.href="/Ecommerce-Website2/#/login";
       toast.success("User Logout Successfully!!",{position:'top-center'});
    } catch(error){
        toast.error("Something went wrong",{position:'bottom-center'});
       
    }
  }
  return (
    <div className='profile'>
        {userDetail ? (
            <>
                <h3>Welcome {userDetail.displayname}</h3>
                <div>
                    <p><span>Email: </span> {userDetail.email}</p>
                    <p><span>Display Name: </span> {userDetail.displayname}</p>
                    <p><span>Password: </span> {userDetail.password}</p>
                </div>
                <button onClick={Logout}>Logout</button>
            </>
        ):(
            <p>Loading...</p>
        )
        }
    </div>
  )
}

export default Profile