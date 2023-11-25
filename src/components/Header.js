import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className=" w-52 cursor-pointer "
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && (
        <div className="flex p-2 ">
          <img
            className="w-12 h-12  rounded-md mr-2"
            src={user?.photoURL}
            alt="user_icon"
          />
          <button
            onClick={handleSignOut}
            className=" text-green-800 bg-orange-300 shadow-md  px-3 py-1 h-10 rounded-md text-lg hover:bg-orange-500"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
