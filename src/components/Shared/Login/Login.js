import React from "react";
import GoogleImage from "../image/search.png";
import useFirebase from "../useFirebase/useFirebase";

const Login = () => {
  const { signInWithGoogle, user } = useFirebase();

  const googleSign = () => {
    signInWithGoogle();
  };

  return (
    <div>
      <h1 className="littleabout_title mt-5">Sign In</h1>
      <img
        width={60}
        src={GoogleImage}
        onClick={googleSign}
        alt="google-icon"
      />
    </div>
  );
};

export default Login;
