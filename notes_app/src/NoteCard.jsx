import React from "react";

function NoteCard(props) {
  function handleClick() {
    props.onDelete(props.id);
  }
  function handleEdit() {
    props.onEdit(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        Delete
      </button>
      <button onClick={handleEdit}>
        Edit
      </button>
    </div>
  );
}

export default NoteCard;
