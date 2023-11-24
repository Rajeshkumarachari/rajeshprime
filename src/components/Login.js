import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/67033404-2df8-42e0-a5a0-4c8288b4da2c/IN-en-20231120-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="banner"
        />
      </div>
      <form className=" absolute p-12 bg-black w-[500px] my-36  mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className=" font-bold text-3xl py-4">Sign In </h1>
        <input
          type="text"
          placeholder="Email or phone number"
          className="p-4 my-4 w-full bg-gray-700 rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 rounded-md"
        />
        <button className="p-4 my-4 bg-red-700 w-full rounded-md text-lg font-medium">
          Sign In
        </button>
        <div className="flex">
          <input type="checkbox" />
          <p className=" text-sm text-gray-500">Remember me</p>
          <p className=" ml-[220px] text-sm text-gray-500">Need help?</p>
        </div>
        <p className=" text-gray-500 text-lg my-3">
          New to Netflix?
          <span className=" ml-2 text-xl text-white hover:underline cursor-pointer ">
            Sign up now.
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
