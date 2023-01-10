import { useState } from "react";
import React from "react";
import AddForm from "./components/AddForm";
import List from "./components/List";
import NavBar from "../../components/NavBar";
import "./index.css";

const ListPage = () => {
  const [content, setContent] = useState([]);

  return (
    <div className="content">
      <NavBar />
      <AddForm add={setContent} />
      <List listContent={content} deleteContent={setContent} />
    </div>
  );
};

export default ListPage;
