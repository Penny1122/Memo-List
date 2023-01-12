import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";

const NavBar = ({ user }) => {
  const navigate = useNavigate();
  function signOut() {
    auth.signOut();
    navigate("/");
  }

  return (
    <div className="Nav-Bar">
      <h1>Memo List</h1>
      {user && (
        <div className="log-out" onClick={signOut}>
          Log out
        </div>
      )}
    </div>
  );
};

export default NavBar;
