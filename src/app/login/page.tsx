"use client"

import React from 'react'
import {  signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { auth, authProvider } from '@/lib';
import { useRouter } from 'next/navigation'
import { useAuthState } from '@/hooks';

const LoginPage = () => {
 const {user, isLoading} = useAuthState()
  const router = useRouter()

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, authProvider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      console.log("token", token)
    }).catch((error) => {
      console.log({ error })
    });
  }

    if(user?.uid && !isLoading) {
      router.push("/")
    }

  return (
    <main className='flex justify-center items-center h-[100vh]'>
      <button onClick={handleGoogleSignIn} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Sign in with google
      </button>
    </main>
  )
}

export default LoginPage