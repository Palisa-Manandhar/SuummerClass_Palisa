import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddNote({ addNote }) {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !content) {
      alert("Please fill all fields.");
      return;
    }

    addNote(title, content);

    navigate("/notes");
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white p-8 rounded-xl shadow">
      <h1 className="text-3xl font-bold mb-6">Add New Note</h1>

      <form onSubmit={handleSubmit}>
        <label className="font-semibold">Topic</label>

        <input
          type="text"
          placeholder="Enter Note Topic"
          className="w-full border p-3 rounded mb-5 mt-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label className="font-semibold">Note</label>

        <textarea
          rows="8"
          placeholder="Write your note..."
          className="w-full border p-3 rounded mt-2"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button
          type="submit"
          className="mt-6 bg-green-700 text-white px-6 py-3 rounded hover:bg-green-800"
        >
          Save Note
        </button>
      </form>
    </div>
  );
}

export default AddNote;
