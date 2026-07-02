function Header() {
  return (
    <header className="">
      <nav className="bg-slate-800 text-white p-6 h-20">
        <div className="float-left">
          <a href="http://localhost5173" className="text-2xl">
            Note Summarizer
          </a>
        </div>
        <div className="float-right mr-5">
          <a href="#" className="ml-5 text-white hover:text-sky-400">
            Home
          </a>
          <a href="#" className="ml-5 text-white hover:text-sky-400">
            About
          </a>
          <a href="#" className="ml-5 text-white hover:text-sky-400">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
