import { useState } from "react";
import axios from "axios";
import Button from "./Button";

function NoteCard({ note, deleteNote, updateNote }) {
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(note.title);
  const [editContent, setEditContent] = useState(note.content);

  //Controls the delete confirmation popup
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const summarizeNote = async () => {
    try {
      setLoading(true);
      setError("");
      setSummary("");

      const response = await axios.post(
        `http://localhost:5000/notes/${note._id}/summarize`,
      );

      setSummary(response.data.summary);
    } catch (error) {
      console.error("Summary Error:", error);
      setError("Failed to generate summary. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async () => {
    if (!editTitle.trim() || !editContent.trim()) {
      setError("Title and content cannot be empty.");
      return;
    }

    try {
      setError("");

      const response = await axios.put(
        `http://localhost:5000/notes/${note._id}`,
        {
          title: editTitle,
          content: editContent,
        },
      );

      updateNote(response.data);
      setIsEditing(false);
      setSummary("");
    } catch (error) {
      console.error("Update Error:", error);
      setError("Failed to update note.");
    }
  };

  //Confirm deletion
  const handleDelete = () => {
    deleteNote(note._id);
    setShowDeleteModal(false);
  };

  return (
    <>
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
        {isEditing ? (
          /*Editing*/
          <div className="p-6">
            <h2 className="text-lg font-bold text-slate-800 mb-5">Edit Note</h2>

            <input
              type="text"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              placeholder="Note title"
              className="w-full border border-slate-300 rounded-xl p-3
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              value={editContent}
              onChange={(e) => setEditContent(e.target.value)}
              placeholder="Write your note..."
              rows="7"
              className="w-full border border-slate-300 rounded-xl p-3 mt-4
                         resize-none
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {error && <p className="text-red-500 text-sm mt-3">{error}</p>}

            <div className="flex justify-end gap-3 mt-5">
              <Button
                text="Cancel"
                color="bg-slate-500 hover:bg-slate-600"
                onClick={() => {
                  setIsEditing(false);
                  setError("");
                  setEditTitle(note.title);
                  setEditContent(note.content);
                }}
              />

              <Button
                text="Save Changes"
                color="bg-green-600 hover:bg-green-700"
                onClick={handleUpdate}
              />
            </div>
          </div>
        ) : (
          /*View*/
          <div className="p-6">
            <h2 className="text-xl font-bold text-slate-800 line-clamp-1">
              {note.title}
            </h2>

            <p className="text-slate-500 mt-3 leading-relaxed min-h-[72px]">
              {note.content.length > 150
                ? `${note.content.substring(0, 150)}...`
                : note.content}
            </p>

            <div className="border-t border-slate-100 my-5"></div>

            <div className="flex flex-wrap gap-2">
              <Button
                text={loading ? "Summarizing..." : "AI Summary"}
                color="bg-blue-600 hover:bg-blue-700"
                onClick={summarizeNote}
              />

              <Button
                text="Edit"
                color="bg-amber-500 hover:bg-amber-600"
                onClick={() => {
                  setIsEditing(true);
                  setError("");
                }}
              />

              <Button
                text="Delete"
                color="bg-red-600 hover:bg-red-700"
                onClick={() => setShowDeleteModal(true)}
              />
            </div>

            {/*AI Summary*/}
            {summary && (
              <div className="mt-5 bg-blue-50 border border-blue-100 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">✨</span>

                  <h3 className="font-bold text-blue-800">AI Summary</h3>
                </div>

                <p className="text-slate-700 text-sm leading-relaxed">
                  {summary}
                </p>
              </div>
            )}

            {/*Error*/}
            {error && (
              <div className="mt-4 bg-red-50 border border-red-100 rounded-lg p-3">
                <p className="text-red-600 text-sm">{error}</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/*Delete Confirmation*/}
      {showDeleteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
            <div className="text-center">
              <h2 className="text-xl font-bold text-slate-800">
                Are you sure you want to delete this note?
              </h2>
            </div>

            <div className="flex justify-center gap-3 mt-6">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-5 py-2 rounded-lg
                           bg-slate-200 hover:bg-slate-300
                           text-slate-700 font-medium
                           transition"
              >
                Cancel
              </button>

              <button
                onClick={handleDelete}
                className="px-5 py-2 rounded-lg
                           bg-red-600 hover:bg-red-700
                           text-white font-medium
                           transition"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default NoteCard;
