function Header() {
  return (
    <header className="">
      <nav className="bg-slate-800 text-white p-6 h-[10vh]">
        <div className="float-left mr-5">
          <a href="#" className="ml-5 text-white hover:text-sky-400">
            About
          </a>
        </div>
        <div className="float-right mr-5">
          <a href="#" className="ml-5 text-white hover:text-sky-400">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
