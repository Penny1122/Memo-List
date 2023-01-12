import React from "react";
import { Link } from "react-router-dom";
import SignIn from "./components/signin";
import "./index.css";

const HomePage = ({ user }) => {
  return (
    <>
      {user && (
        <Link to="/list">
          <div className="click-button">
            <button>Click to Memo!</button>
          </div>
        </Link>
      )}
      {!user && <SignIn />}
    </>
  );
};

export default HomePage;
