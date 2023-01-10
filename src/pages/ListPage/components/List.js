import React from "react";
import Item from "./Item";

const List = ({ listContent, deleteContent }) => {
  return (
    <div className="list">
      {listContent.map((item) => {
        const { note, id } = item;
        return (
          <Item id={id} key={id} note={note} deleteContent={deleteContent} />
        );
      })}
    </div>
  );
};

export default List;
