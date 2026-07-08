// function Header() {
//   return (
//     <header className="">
//       <nav className="bg-slate-800 text-white p-6 h-20">
//         <div className="float-left">
//           <a href="http://localhost5173" className="text-2xl">
//             Note Summarizer
//           </a>
//         </div>
//         <div className="float-right mr-5">
//           <a href="#" className="ml-5 text-white hover:text-sky-400">
//             Home
//           </a>
//           <a href="#" className="ml-5 text-white hover:text-sky-400">
//             About
//           </a>
//           <a href="#" className="ml-5 text-white hover:text-sky-400">
//             Contact
//           </a>
//         </div>
//       </nav>
//     </header>
//   );
// }

// export default Header;

// import { Link } from "react-router-dom";

// function Header() {
//   return (
//     <nav className="bg-slate-800 text-white p-5 flex justify-between">
//       <h1 className="text-2xl font-bold">Note Summarizer</h1>

//       <div>
//         <Link to="/" className="mr-6 hover:text-sky-400">
//           Home
//         </Link>

//         <Link to="/notes" className="hover:text-sky-400">
//           Notes
//         </Link>
//       </div>
//     </nav>
//   );
// }

// export default Header;

import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-slate-800 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center p-5">
        <h1 className="text-white text-3xl font-bold">
          <Link to="/">Note Summarizer</Link>
        </h1>

        <div>
          <Link to="/" className="text-white mr-8 hover:text-sky-400">
            Home
          </Link>

          <Link to="/notes" className="text-white hover:text-sky-400">
            Notes
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
