import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import NoteCard from "../components/NoteCard";

function Notes({ notes, deleteNote, updateNote }) {
  return (
    <div className="max-w-7xl mx-auto py-10 px-5">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
        <Link
          to="/add-note"
          className="fixed bottom-8 right-8
             bg-blue-600 hover:bg-blue-700
             text-white
             w-16 h-16
             rounded-full
             flex items-center justify-center
             text-2xl
             shadow-lg hover:shadow-xl
             hover:scale-105
             transition-all duration-200
             z-40"
          title="Add New Note"
        >
          <FaPlus />
        </Link>
      </div>

      {notes.length === 0 ? (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-12 text-center">
          <div className="text-5xl mb-4">📝</div>

          <h2 className="text-2xl font-bold text-slate-800">No notes yet</h2>

          <p className="text-slate-500 mt-2 mb-6">
            Create your first note and start organizing your thoughts.
          </p>

          <Link
            to="/add-note"
            className="inline-flex items-center gap-2
                       bg-blue-600 hover:bg-blue-700
                       text-white font-semibold
                       px-5 py-3 rounded-xl transition"
          >
            <FaPlus />
            Create Note
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {notes.map((note) => (
            <NoteCard
              key={note._id}
              note={note}
              deleteNote={deleteNote}
              updateNote={updateNote}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Notes;
