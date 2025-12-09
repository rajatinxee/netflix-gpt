import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { removeUser } from "../utils/Redux/userSlice";

const Header = () => {
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);

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

  return (
    <>
      <div className="absolute flex justify-between z-20 w-screen px-8 py-2 bg-gradient-to-b from-black">
        <img
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-12-03/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
          className="w-44 "
        />

        {user && (
          <div className="flex p-2 gap-2 items-center ">
            <img
              className="w-12 h-12 "
              // src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp"
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
