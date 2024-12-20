import Note from "./Note";

const NoteList = ({ notes, onChange, onDelete }) => {
  return (
    <ul>
      {notes.map((note) => {
       return  <li key={note.id}>
          <Note note={note} onChange={onChange} onDelete={onDelete} />
        </li>;
      })}
    </ul>
  );
};

export default NoteList;
