import { useState } from "react";

const NoteForm = ({ onAddNote }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = () => {
    setText("");
    onAddNote(text);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Add Note"
        onChange={handleChange}
        value={text}></input>
      <button onClick={handleClick}>Add Note</button>
    </>
  );
};

export default NoteForm;
