// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Login from "./pages/Login";

// function App() {
//   return (
//     <>
//       <Header />

//       <div>
//         <Login />
//       </div>

//       <Footer />
//     </>
//   );
// }

// export default App;

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import Notes from "./pages/Notes";

// function App() {
//   return (
//     <BrowserRouter>
//       <Header />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/notes" element={<Notes />} />
//         <Route path="/add-note" element={<AddNote />} />
//       </Routes>

//       <Footer />
//     </BrowserRouter>
//   );
// }

// export default App;

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

  // Fetch all notes from backend
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

  // Temporary add function (we'll connect this to MongoDB next)
  const addNote = (title, content) => {
    const newNote = {
      id: Date.now(),
      title,
      content,
    };

    setNotes([...notes, newNote]);
  };

  // Temporary delete function (we'll connect this to MongoDB next)
  const deleteNote = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this note?",
    );

    if (confirmDelete) {
      setNotes(notes.filter((note) => note.id !== id));
    }
  };

  return (
    <BrowserRouter>
      <Header />

      <main className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/notes"
            element={<Notes notes={notes} deleteNote={deleteNote} />}
          />

          <Route path="/add-note" element={<AddNote addNote={addNote} />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
