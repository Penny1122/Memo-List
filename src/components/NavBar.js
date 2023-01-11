import React from "react";
import { useState, useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
// import { onAuthStateChanged } from "firebase/auth";
import "./NavBar.css";

const NavBar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
  }, []);

  return (
    <div className="Nav-Bar">
      <h1>Memo List</h1>
      {user ? (
        <div className="log-out" onClick={() => auth.signOut()}>
          Log out
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default NavBar;
