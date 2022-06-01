import React from "react";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

const LogoutButton = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
        // Sign-out successful.
          }).catch((error) => {
        // An error happened.
          });
    return(
    <Link to="/" />
    )
};

export default LogoutButton;