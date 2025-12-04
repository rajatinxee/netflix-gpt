import { useState } from "react";
import Header from "./Header";

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  return (
    <>
      <Header />

      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/4ffe3d37-1fc1-4d93-b61a-1fa58c11ccff/web/IN-en-20251124-TRIFECTA-perspective_9f00d07d-f08e-494f-8907-92371138c534_medium.jpg"
          alt="back_ground"
        />
      </div>

      <form
        action=""
        className="absolute p-12 rounded-lg text-white bg-black w-3/12 m-auto right-0 left-0 mt-40 bg-opacity-75"
      >
        <h1 className=" font-bold text-3xl py-4 ">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input
          type="text"
          placeholder="Full Name"
          className="p-4 my-4 w-full bg-gray-700 rounded-md "
        />}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700 rounded-md "
        />
        <input
          type="text"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 rounded-md "
        />
        <button className="p-2 my-6 bg-[rgb(229,9,20)] rounded-md w-full font-bold">
          {isSignInForm? "Sign In" : "Sign Up"}
        </button>
        {isSignInForm? <div className="py-6">
          New to Netflix?{" "}
          <span >
            <button type="button" className="font-bold" onClick={toggleSignInForm}>Sign Up</button>
          </span>{" "}
          Now
        </div>: 
        <div className="py-6">
          Already have Netflix Account?{" "}
          <span >
            <button type="button" className="font-bold" onClick={toggleSignInForm}>Sign In</button>
          </span>{" "}
          Now
        </div>}
      </form>
    </>
  );
};

export default Login;
