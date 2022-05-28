import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useState } from "react";
import initializeAuthentication from "../Firebase/Firebase.initialize";

initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});

  const auth = getAuth();

  const googleAuthProvider = new GoogleAuthProvider();
  const githubAuthProvider = new GithubAuthProvider();

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

  const signInWithGithub = () => {
    signInWithPopup(auth, githubAuthProvider).then((result) => {
      const res = result.user;
      setUser(res);
      console.log(result.user);
    });
  };

  return { signInWithGoogle, user, signInWithGithub };
};

export default useFirebase;
