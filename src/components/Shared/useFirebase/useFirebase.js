import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import initializeAuthentication from "../Firebase/Firebase.initialize";

initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});

  const auth = getAuth();

  const googleAuthProvider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleAuthProvider)
      .then((result) => {
        const userdata = result.user;
        setUser(userdata);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return { signInWithGoogle, user };
};

export default useFirebase;
