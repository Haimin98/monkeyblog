import { signOut } from "firebase/auth";
import { auth } from "firebasedb/firebase-config";
import React from "react";

const HomePage = () => {
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default HomePage;
