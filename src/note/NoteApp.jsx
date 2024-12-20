import { useImmer } from "use-immer";
import NoteForm from "./Noteform";
import NoteList from "./NoteList";

  let id = 0;
  const initialState = [
    { id: id++, text: "learn react", done: false },
    { id: id++, text: "learn CSS", done: true },
    { id: id++, text: "learn HTML", done: true },
    { id: id++, text: "learn Vue", done: false },
    { id: id++, text: "learn Next", done: false },
  ];
const NoteApp = () => {

  const [notes, setNotes] = useImmer(initialState);

    const handleAddNote = (text) => {
      setNotes(draft => {
         draft.push({ id: id++, text:text, done: false })
      })
  }

  const handleChangeNote = (note) => {
   setNotes(draft => {
      const index = draft.findIndex(item => item.id === note.id)
      draft[index] = note
   })
  }

  const handleDeleteNote = (note) => {
   setNotes(draft => {
      const index = draft.findIndex(item => item.id === note.id)
      draft.splice(index, 1)
   })
  }

  return (
    <div>
      <h1>Note App</h1>
      <NoteForm onAddNote={handleAddNote} />
      <NoteList
        notes={notes}
        onChange={handleChangeNote}
        onDelete={handleDeleteNote}
      />
    </div>
  );
};

export default NoteApp;
