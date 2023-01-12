import { useState, useEffect } from "react";
import React from "react";
import AddForm from "./components/AddForm";
import List from "./components/List";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../utils/firebase";
import "./index.css";

const ListPage = ({ user }) => {
  const [content, setContent] = useState([]);
  useEffect(() => {
    getContent();
  }, []);

  async function getContent() {
    const q = query(collection(db, "memo"), where("userID", "==", user.uid));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      setContent(function (prevContent) {
        return [
          ...prevContent,
          {
            id: data.id,
            note: data.note,
          },
        ];
      });
    });
  }

  return (
    <div className="content">
      <AddForm add={setContent} user={user} />
      <List listContent={content} deleteContent={setContent} />
    </div>
  );
};

export default ListPage;
