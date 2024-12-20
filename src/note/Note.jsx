import { useState } from "react";

const Note = ({ note, onChange, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  let component;

  const handleChangeText = (e) => {
    const newNote = { ...note, text: e.target.value };
    onChange(newNote);
  };

  if (isEditing) {
    component = (
      <>
        <input type="text" onChange={handleChangeText} />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    component = (
      <>
        {note.text}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }

  const handleChangeDone = (e) => {
    const newNote = { ...note, done: e.target.checked };
    onChange(newNote);
  };

  return (
    <label>
      <input type="checkbox" checked={note.done} onChange={handleChangeDone}/> 
      {component}
      <button onClick={() => onDelete(note)}>Delete</button>
    </label>
  );
};

export default Note;
