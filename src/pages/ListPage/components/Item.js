import React from "react";
import {
  doc,
  deleteDoc,
  query,
  where,
  collection,
  getDocs,
} from "firebase/firestore";
import { db } from "../../../utils/firebase";

const Item = ({ id, note, deleteContent }) => {
  async function deleteItem() {
    // const q = query(collection(db, "memo"), where("id", "==", id));
    // const querySnapshot = await getDocs(q);
    // querySnapshot.forEach(async (doc) => {
    //   deleteDoc(doc.ref);
    // });

    const ref = doc(db, "memo", id);
    await deleteDoc(ref);

    deleteContent(function (prev) {
      return prev.filter((item) => item.id !== id);
    });
  }

  return (
    <div className="item-content">
      <div className="note">{note}</div>
      <button onClick={deleteItem}>Delete</button>
    </div>
  );
};

export default Item;
