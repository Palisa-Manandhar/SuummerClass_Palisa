import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Notes from "./pages/Notes";
import AddNote from "./pages/AddNote";

function App() {
  const [notes, setNotes] = useState([]);

  //Fetch notes from backend
  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      console.log("Fetching notes...");

      const response = await axios.get("http://localhost:5000/notes");

      console.log("Response:", response.data);

      setNotes(response.data);
    } catch (error) {
      console.error("Axios Error:", error);
    }
  };

  //Add a new note
  const addNote = async (title, content) => {
    try {
      const response = await axios.post("http://localhost:5000/notes", {
        title,
        content,
      });

      console.log("Note added:", response.data);

      setNotes((prevNotes) => [...prevNotes, response.data]);

      return true;
    } catch (error) {
      console.error("Error adding note:", error);
      return false;
    }
  };

  //Delete
  const deleteNote = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/notes/${id}`);

      setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));

      console.log("Note deleted successfully");
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  //Update
  const updateNote = (updatedNote) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note._id === updatedNote._id ? updatedNote : note,
      ),
    );
  };

  return (
    <BrowserRouter>
      <Header />

      <main className="min-h-screen bg-slate-50">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/notes"
            element={
              <Notes
                notes={notes}
                deleteNote={deleteNote}
                updateNote={updateNote}
              />
            }
          />

          <Route path="/add-note" element={<AddNote addNote={addNote} />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
