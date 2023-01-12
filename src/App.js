import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import ListPage from "./pages/ListPage";
import { auth } from "./utils/firebase";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
  }, []);

  return (
    <BrowserRouter>
      <div>
        <NavBar user={user} />
        <Routes>
          <Route path="/" element={<HomePage user={user} />} />
          <Route path="/list" element={<ListPage user={user} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
