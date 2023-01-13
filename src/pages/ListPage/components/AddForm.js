import React from "react";
import { useState } from "react";
import { v4 } from "uuid";
import { db } from "../../../utils/firebase";
import { collection, addDoc } from "firebase/firestore";

const AddForm = ({ add, user }) => {
  const [note, setNote] = useState("");

  function noteChange(e) {
    setNote(e.target.value);
  }

  async function addItem() {
    const data = {
      userID: user.uid,
      // id: v4(),
      note: note,
    };
    try {
      const docRef = await addDoc(collection(db, "memo"), data);
      console.log("Document written with ID: ", docRef.id);
      add(function (prevContent) {
        return [
          ...prevContent,
          {
            id: docRef.id,
            note: data.note,
          },
        ];
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <div>
      <div className="new-memo">Let's add a new note</div>
      <input
        className="note-input"
        type="text"
        value={note}
        onChange={noteChange}
        placeholder="enter a memo"
      ></input>
      <button onClick={addItem}>Add</button>
    </div>
  );
};

export default AddForm;
