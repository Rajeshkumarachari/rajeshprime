import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import { LOGO } from "../Utils/constant";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unsubscribe
    return () => unsubscribe();
  }, []);
  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className=" w-52 cursor-pointer " src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-2 ">
          <img
            className="w-10 h-10  rounded-md my-4 mr-4 cursor-pointer"
            src={user?.photoURL}
            alt="user"
          />
          <button
            onClick={handleSignOut}
            className=" text-white bg-red-500 shadow-md pb-1 my-4  px-3 font-semibold h-10 rounded-lg hover:bg-red-600"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
