import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../Utils/constant";
import { toggleGptSearchView } from "../Utils/gptSlice";
import { changeLanguage } from "../Utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

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

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
    // console.log("toggleGptSearchView");
    dispatch(changeLanguage);
  };
  const handleLanguageChange = (e) => {
    console.log(e.target.value);

    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between ">
      <img
        className=" w-52 cursor-pointer mx-auto md:mx-0 "
        src={LOGO}
        alt="logo"
      />
      {user && (
        <div className="flex p-2 justify-between ">
          {showGptSearch && (
            <select
              className="  sm:mr-4  md:ml-1 m-3 h-10 mt-4 rounded-md px-2 bg-gray-800 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={handleGptSearchClick}
            className=" text-white h-10 mt-4 px-4 mr-4 bg-purple-800 rounded-md"
          >
            {showGptSearch ? "Homepage" : "GPT Search"}
          </button>
          <img
            className=" hidden md:block w-10 h-10  rounded-md my-4 mr-4 cursor-pointer"
            src={user?.photoURL}
            alt="user"
          />
          <button
            onClick={handleSignOut}
            className=" text-xs md:text-lg text-white bg-red-500 shadow-md pb-1 my-4 pt-1  px-3 font-semibold h-10 rounded-lg hover:bg-red-600"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
