// import Button from "./Button";

// function NoteCard({ note, deleteNote }) {
//   return (
//     <div className="border rounded p-4 mb-4 shadow">
//       <p>{note.text}</p>

//       <div className="flex gap-3 mt-4">
//         <Button
//           text="AI Summary"
//           color="bg-blue-700"
//           onClick={() => alert("AI Summary feature coming soon.")}
//         />

//         <Button
//           text="Delete"
//           color="bg-red-700"
//           onClick={() => deleteNote(note.id)}
//         />
//       </div>
//     </div>
//   );
// }

// export default NoteCard;

import Button from "./Button";

function NoteCard({ note, deleteNote }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 mb-5 hover:shadow-lg transition">
      <h2 className="text-xl font-bold text-slate-800">{note.title}</h2>

      <p className="text-gray-600 mt-2">{note.content.substring(0, 100)}...</p>

      <div className="flex justify-center gap-3 mt-5">
        <Button
          text="AI Summary"
          color="bg-blue-700"
          onClick={() =>
            alert("AI Summary feature will be added in a later week.")
          }
        />

        <Button
          text="Delete"
          color="bg-red-600"
          onClick={() => deleteNote(note.id)}
        />
      </div>
    </div>
  );
}

export default NoteCard;
