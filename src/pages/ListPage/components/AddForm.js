import React from "react";
import { useState } from "react";
import { v4 } from "uuid";

const AddForm = ({ add }) => {
  const [note, setNote] = useState("");

  function noteChange(e) {
    setNote(e.target.value);
  }

  function addItem() {
    add(function (prevContent) {
      return [
        ...prevContent,
        {
          id: v4(),
          note,
        },
      ];
    });
  }

  return (
    <div>
      <div className="new-memo">Add a new note</div>
      <input
        className="note-input"
        type="text"
        value={note}
        onChange={noteChange}
      ></input>
      <button onClick={addItem}>Add</button>
    </div>
  );
};

export default AddForm;
