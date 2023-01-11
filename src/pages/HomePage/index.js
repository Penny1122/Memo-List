import React from "react";
import { Link } from "react-router-dom";
import SignIn from "./components/signin";
import NavBar from "../../components/NavBar";
import "./index.css";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <SignIn />
      {/* <Link to="/list">
        <button>Click to Memo!</button>
      </Link> */}
    </div>
  );
};

export default HomePage;
