import auth from '@react-native-firebase/auth'; //인증
import React, { useState, useEffect } from 'react';
import Authentication from './screens/Authentication';
import Authenticated from './screens/Authenticated';
import firestore from '@react-native-firebase/firestore'; //DB

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



    // 조회
    const todos = firestore().collection('todos').get();
    function Todo() {
      
          firestore()
          .collection('todos')
          //.where("title","==","hello")
          .get()
          .then(querySnapshot => {
            console.log('Total users: ', querySnapshot.size);

            querySnapshot.forEach(documentSnapshot => {
              console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
            });
          });
    }

    // 
    const ref = firestore().collection('todos');
    async function addTodo() {
      await ref.add({
        title: todo,
        complete: false,
      });
      setTodo('');
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
  
  //  1. 로그인 auth                     email
  //  2. 회원가입은 auth, firestore        
  //  비밀번호 찾기 firestore
  //  3. 조회 firestore                  email -> data

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
    //audrbs1028@naver.com
  return <Authentication  
          signin={signin} 
          createUser={createUser} 
          findPassword={findPassword}
          hello = {hello}
          Todo = {Todo}
        />;
}