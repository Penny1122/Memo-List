import React from "react";
import Item from "./Item";
import { Link } from "react-router-dom";

const List = ({ listContent, deleteContent }) => {
  return (
    <div className="list">
      {listContent.map((item) => {
        console.log(item);
        const { note, id } = item;
        return (
          <Item id={id} key={id} note={note} deleteContent={deleteContent} />
        );
      })}
      <div className="home-block">
        <Link to="/">
          <button className="home">Home</button>
        </Link>
      </div>
    </div>
  );
};

export default List;
