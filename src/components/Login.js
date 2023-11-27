import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../Utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";
import { BANNER_NETFLIX, USER_AVATAR } from "../Utils/constant";

const Login = () => {
  const [isSignInform, setIsSignInForm] = useState(true);

  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef("Rajesh");

  const handleButtonClick = () => {
    const message = checkValidData(
      email.current.value,
      password.current.value,
      name.current.value
    );

    setErrorMessage(message);

    if (message) return;
    if (!isSignInform) {
      //signup
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //sign in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInform);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className=" h-screen w-screen object-cover  bg-no-repeat bg-auto "
          src={BANNER_NETFLIX}
          alt="banner"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" absolute p-12 bg-black w-full md:w-[500px] my-36  mx-auto right-0 left-0 text-white bg-opacity-80 rounded-md"
      >
        <h1 className=" font-bold text-xl md:text-3xl py-4">
          {isSignInform ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInform && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700 rounded-md"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or phone number"
          className="p-4 my-4 w-full bg-gray-700 rounded-md"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 rounded-md"
        />
        <p className=" text-orange-400">{errorMessage} </p>
        <button
          className="p-4 my-4 bg-red-700 w-full rounded-md text-lg font-medium"
          onClick={handleButtonClick}
        >
          {isSignInform ? "Sign In" : "Sign Up"}
        </button>
        <div className="flex">
          <input className=" w-4" type="checkbox" />
          <p className=" text-sm text-gray-500">Remember me</p>
          <p className="ml-3firebase deploy md:ml-[220px] text-sm text-gray-500 hover:underline cursor-pointer">
            Need help?
          </p>
        </div>
        <p className=" text-gray-500 text-lg mt-20 ">
          {isSignInform ? "New to Netflix?" : "Already registered !"}

          <span
            onClick={toggleSignInForm}
            className=" ml-2 text-xl text-white hover:underline cursor-pointer "
          >
            {isSignInform ? "Sign up now." : "Sign in now"}
          </span>
        </p>
        <p className="text-sm text-gray-500 my-3">
          This page is protected by Google reCAPTCHA to <br /> ensure you're not
          a bot.
          <span className=" text-blue-700 hover:underline cursor-pointer">
            Learn more.
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
