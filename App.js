import auth from '@react-native-firebase/auth';
import React, { useState } from 'react';
import Authentication from './screens/Authentication';
import Authenticated from './screens/Authenticated';


export default function App() {
  const [authenticated, setAuthenticated] = useState(false);

  const [authEmailVerified, setauthEmailVerified] = useState(false);

    auth().onAuthStateChanged((user) => {
      if (user) {
        setAuthenticated(true);
      }
      else {
        setAuthenticated(false);
      }
    });

  

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
        
        var user = auth().currentUser;
        if (user.emailVerified){
          setauthEmailVerified(true);
        }else{
          setauthEmailVerified(false);
        }
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

  const hello = () =>{
    console.log("hello");
  }
    
    if (authenticated) { 
      if(authEmailVerified){
        return <Authenticated/>
      }
      else{
        console.log("이메일 인증을 진행해 주세요.");
      }
    }

  return <Authentication  
          signin={signin} 
          createUser={createUser} 
          findPassword={findPassword}
          hello = {hello}
        />;
}