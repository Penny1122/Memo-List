import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../../utils/firebase";

const SignIn = () => {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState("signup");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    if (activeItem === "signup") {
      createUserWithEmailAndPassword(auth, email, password).then(() => {
        navigate("/list");
      });
    } else if (activeItem === "signin") {
      signInWithEmailAndPassword(auth, email, password).then(() => {
        navigate("/list");
      });
    }
  }

  return (
    <div className="sign-box">
      <div className="sign-button">
        <div
          className={`sign ${activeItem === "signup" ? "active" : ""}`}
          onClick={() => setActiveItem("signup")}
        >
          Sign up
        </div>
        <div
          className={`sign ${activeItem === "signin" ? "active" : ""}`}
          onClick={() => setActiveItem("signin")}
        >
          Login
        </div>
      </div>
      <form onSubmit={onSubmit}>
        <div>
          <input
            className="sign-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="請輸入信箱"
          />
          <br />
          <input
            className="sign-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="請輸入密碼"
            type="password"
          />
          <br />
          <div className="sign-button-block">
            <button>
              {activeItem === "signup" && "註冊"}
              {activeItem === "signin" && "登入"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
