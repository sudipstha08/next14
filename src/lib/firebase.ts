import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyBV_JHu4bcAGptBHUhnbvWqDjw9HnVuq7I",
	authDomain: "next-firebase-71a19.firebaseapp.com",
	projectId: "next-firebase-71a19",
	storageBucket: "next-firebase-71a19.appspot.com",
	messagingSenderId: "476677393196",
	appId: "1:476677393196:web:0a83454d3dbf94da077a89",
	measurementId: "G-4MBJ3CHM19",
};

export const app = initializeApp(firebaseConfig);
export const authProvider = new GoogleAuthProvider();
export const auth = getAuth();
