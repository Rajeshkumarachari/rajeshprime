import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../Utils/validate";

const Login = () => {
  const [isSignInform, setIsSignInForm] = useState(true);

  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const handleButtonClick = () => {
    const message = checkValidData(
      email.current.value,
      password.current.value,
      name.current.value
    );

    console.log(
      email.current.value,
      password.current.value,
      name.current.value
    );
    console.log(message);
    setErrorMessage(message);
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInform);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/67033404-2df8-42e0-a5a0-4c8288b4da2c/IN-en-20231120-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="banner"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" absolute p-12 bg-black w-[500px] my-36  mx-auto right-0 left-0 text-white bg-opacity-80 rounded-md"
      >
        <h1 className=" font-bold text-3xl py-4">
          {isSignInform ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInform && (
          <input
            ref={name}
            type="name"
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
          <p className=" ml-[220px] text-sm text-gray-500">Need help?</p>
        </div>
        <p className=" text-gray-500 text-lg my-3">
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
