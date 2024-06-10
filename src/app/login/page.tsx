"use client"

import React, { useEffect } from 'react'
import {  signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, authProvider } from '@/lib';

const LoginPage = () => {

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, authProvider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      console.log("toke", token)
      // The signed-in user info.
      const user = result.user;
      console.log("user", user)
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  }

  return (
    <main>
      <button onClick={handleGoogleSignIn}>
        Sing in with google
      </button>
    </main>
  )
}

export default LoginPage