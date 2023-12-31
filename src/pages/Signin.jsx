import React, { useEffect } from "react";
import { auth, provider } from "../firebase-config";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import logo from "../assets/icon8.jpg";
import "../styles/signin.scss";

export const Signin = ({ setIsAuth }) => {
  const navigate = useNavigate();

  // Check if the user is already authenticated when the component mounts
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        setIsAuth(true);
        navigate("/");
      } else {
        // No user is signed in
        setIsAuth(false);
      }
    });

    // Cleanup function to unsubscribe from the listener when the component unmounts
    return () => unsubscribe();
  }, [setIsAuth, navigate]);

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // The user is signed in.
        const user = result.user;
        setIsAuth(true);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error signing in with Google:", error.message);
      });
  };

  return (
    <div className="signin-page">
      <img className="picture" src={logo} alt="Logo" height="30" />
      <h1 className="heading">Sign in with Google</h1>
      <button className="btn btn-primary" id="btn" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </div>
  );
};
