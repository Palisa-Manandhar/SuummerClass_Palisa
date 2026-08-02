// import { useState } from "react";
// import NoteForm from "../components/NoteForm";
// import NoteCard from "../components/NoteCard";

// function Notes() {
//   const [notes, setNotes] = useState([]);

//   const addNote = (text) => {
//     const newNote = {
//       id: Date.now(),
//       text,
//     };

//     setNotes([...notes, newNote]);
//   };

//   const deleteNote = (id) => {
//     const updatedNotes = notes.filter((note) => note.id !== id);

//     setNotes(updatedNotes);
//   };

//   return (
//     <div className="max-w-3xl mx-auto mt-10">
//       <h2 className="text-3xl font-bold mb-5">My Notes</h2>

//       <NoteForm addNote={addNote} />

//       {notes.length === 0 ? (
//         <p>No notes yet.</p>
//       ) : (
//         notes.map((note) => (
//           <NoteCard key={note.id} note={note} deleteNote={deleteNote} />
//         ))
//       )}
//     </div>
//   );
// }

// export default Notes;

import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import NoteCard from "../components/NoteCard";

function Notes({ notes, deleteNote }) {
  console.log(notes);
  return (
    <div className="max-w-5xl mx-auto py-10 px-5">
      <h1 className="text-4xl font-bold mb-8">My Notes</h1>

      {notes.length === 0 ? (
        <p>No Notes Available.</p>
      ) : (
        notes.map((note) => (
          <NoteCard key={note._id} note={note} deleteNote={deleteNote} />
        ))
      )}

      <Link
        to="/add-note"
        className="fixed bottom-8 right-8 bg-slate-800 w-16 h-16 rounded-full flex justify-center items-center text-white text-2xl shadow-xl hover:bg-green-800"
      >
        <FaPlus />
      </Link>
    </div>
  );
}

export default Notes;
