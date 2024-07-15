import React, { useState, useRef } from 'react';
import Header from './Header';
import { checkValidData } from "../utils/validate.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase.js';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice.js';
import { HOME_IMG, USER_AVATAR } from '../utils/constant.js';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true); // Initialized to true assuming sign-in form by default
    const [errorMessage, setErrorMessage] = useState(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const dispatch = useDispatch()

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
        setErrorMessage(null); // Clear any existing error message when toggling forms
    }

    const handleButtonClick = () => {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        // Validate the form data 
        const message = checkValidData(email, password);
        setErrorMessage(message);

        if (message) return;
        // Sign in or sign up logic 
        if (!isSignInForm) {
            // Sign up Logic 
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed up successfully
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: "name.current,value",
                        photoURL: USER_AVATAR
                    }).then(() => {
                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        dispatch(
                            addUser({
                                uid: uid,
                                email: email,
                                displayName: displayName,
                                photoURL: photoURL
                            })
                        );
                    }).catch((error) => {
                        setErrorMessage(errorMessage);
                    });

                    console.log("Signed up:", user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(`${errorCode} - ${errorMessage}`);
                });

        } else {
            // Sign in Logic 
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in successfully
                    const user = userCredential.user;
                    console.log("Signed in:", user);
                    // navigate("/browse"); // Navigate to browse page after sign-in
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(`${errorCode} - ${errorMessage}`);
                });
        }

    }


    return (
        <div>
            <Header />
            <div className='absolute h-screen w-full'>
                <img className='w-full h-full object-cover' src={HOME_IMG }
                    alt="background" />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className='w-full  md:w-3/12 rounded-md bg-opacity-70 text-white w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0' >
                <h1 className='font-bold text-3xl py-4'>
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h1>
                {!isSignInForm && <input
                    placeholder="Enter Your Name"
                    type='text'
                    className='p-4 my-4 w-full bg-gray-700 rounded-md' />}
                <input
                    placeholder="Enter Your Email"
                    type='text'
                    ref={emailRef}
                    className='p-4 my-4 w-full bg-gray-700 rounded-md' />
                <input
                    placeholder='Enter Your Password'
                    type='password'
                    ref={passwordRef}
                    className='p-4 my-4 w-full bg-gray-700 rounded-md' />
                {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
                <button
                    onClick={handleButtonClick}
                    className='py-4 my-6 bg-red-700 w-full rounded-md'>
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>
                <p className='py-4 cursor-pointer'
                    onClick={toggleSignInForm}>
                    {isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now."}
                </p>
            </form>
        </div>
    )
}

export default Login;
