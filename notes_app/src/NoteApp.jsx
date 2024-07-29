// import "./Note.css";
import React, { useState } from "react";
// import AddIcon from "@material-ui/icons/Add";
import NoteCard from "./NoteCard";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import EditIcon from "@material-ui/icons/Edit";

export default function NoteApp() {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [values, setvalues] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!note.title || !note.content) {
      toast.error("Please fill in the field");
      return;
    }

    if (editIndex === -1) {
      setvalues((prevVal) => {
        return [...prevVal, note];
      });
    } else {
      // Updating an existing item
      const updatedItem = [...values];
      updatedItem[editIndex] = {
        title: note.title,
        content: note.content
      };
      setvalues(updatedItem);
      setEditIndex(-1);
    }

    setNote({
      title: "",
      content: ""
    });
  };

  const deleteNote = (id) => {
    setvalues((prevNote) => {
      return prevNote.filter((noteItem, index) => {
        return index !== id;
      });
    });
  };

  const EditNote = (id) => {
    setEditIndex(id);
    setNote({
      title: values[id].title,
      content: values[id].content
    });
  };

  return (
    <div className="main">
      <div className="header">
        <h1 className="notes__title">Add Notes</h1>
      </div>

      <div>
        <form className="create-note" action="">
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
            type="text"
          />
          <textarea
            name="content"
            onChange={handleChange}
            value={note.content}
            placeholder="Take a note..."
            rows={3}
            type="text"
          />

          <button onClick={handleSubmit}>
            {editIndex === -1 ? 'Add' : 'Edit'}
          </button>
        </form>
      </div>

      {values &&
        values.map((item, index) => {
          return (
            <NoteCard
              key={index}
              id={index}
              title={item.title}
              content={item.content}
              onDelete={deleteNote}
              onEdit={() => EditNote(index)}
            />
          );
        })}

      {/* <ToastContainer autoClose={1000} /> */}
    </div>
  );
}

const data = [
    {
        key: 0,
        title: "Html",
        content: "HyperText MarkUp Language",
    },
    { key: 1, title: "CSS", content: "StyleSheet" },
    {
        key: 2,
        title: "JavaScript",
        content: "Scripting language for web",
    },
    {
        key: 3,
        title: "React",
        content: "JavaScript framework",
    },
];
 
