import auth from '@react-native-firebase/auth';
import React, { useState } from 'react';
import Authentication from './screens/Authentication';
import Authenticated from './screens/Authenticated';


export default function App() {
  const [authenticated, setAuthenticated] = useState(false);

  var user = auth().currentUser;
  try{
    
    auth().onAuthStateChanged((user) => {
      if (user) {
        setAuthenticated(true);
      }
      else {
        setAuthenticated(false);
      }
    });
  }catch(e){
    console.log("존재하지 않는 아이디");
  }
  

  const createUser = (email, password) => {
    try {
      auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential)=>{
        userCredential.user?.sendEmailVerification();
        auth().signOut();
        alert("Email sent");
      });
    } catch (error) {
      alert(error);
    }
  };

  const signin = (email, password) => {
      auth().signInWithEmailAndPassword(email, password)
      .then(()=>{
        //var user = auth().currentUser;
        console.log(email);
        console.log("존재하는 아이디");
        //openMainPage(user);
      })
      .catch(error =>{
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }
    
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        if (error.code === 'auth/user-not-found') {
          console.log('User-not-found!');
        }

        if (error.code === 'auth/wrong-password') {
          console.log('Wrong-password');
        }
      });
    
  };
  


  const findPassword = (email) =>{
    try{
      console.log(email);
      auth().sendPasswordResetEmail(email);

    }catch(error){
      alert(error);
    }
  };


 // const openMainPage =(user) =>{
    
    if (authenticated) {
      
      if (user.emailVerified){
        console.log("hello");
        return <Authenticated />;
      }else{
        console.log("Not Email Verified");
      }
    }
  //}
  

  return <Authentication  
          signin={signin} 
          createUser={createUser} 
          findPassword={findPassword}
        />;
}