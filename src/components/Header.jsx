import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/Redux/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/Redux/gptSlice";
import { changeLanguage } from "../utils/Redux/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("Auth state changed:", user);
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
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
        // ...
      } else {
        // User is signed out
        console.log("User signed out, redirecting to login");
        dispatch(removeUser());
        navigate("/"); // Temporarily commented out
        // ...
      }
    });

    // unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleGptSearchToggle = () => {
    // toggle gpt search
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    // console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <>
      <div className="absolute flex flex-col md:flex-row justify-between z-20 w-screen px-8 py-2 bg-gradient-to-b from-black ">
        <img src={LOGO} alt="logo" className="w-44 " />

        {user && (
          <div className="flex p-2 gap-2 items-center ">
            {showGptSearch && (
              <select
                className="p-2 m-2 bg-gray-900 text-white rounded-md cursor-pointer"
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}

            <div>
              <button
                className="py-2 px-4 mx-4 text-white bg-purple-700 rounded-md"
                onClick={handleGptSearchToggle}
              >
                {showGptSearch ? "Home Page" : "GPT Search"}
              </button>
            </div>

            <div className="text-white font-semibold mr-2">
              {user?.displayName ||
                (user?.email ? user.email.split("@")[0] : "User")}
            </div>
            <img
              className="w-12 h-12 rounded-full"
              src={user?.photoURL}
              alt="user-icon"
            />
            <button
              onClick={handleSignOut}
              className="bg-[rgb(229,9,20)] text-white font-bold rounded-md w-20 h-10 "
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
