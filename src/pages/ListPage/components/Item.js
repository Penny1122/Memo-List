import React from "react";

const Item = ({ id, note, deleteContent }) => {
  function deleteItem() {
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
