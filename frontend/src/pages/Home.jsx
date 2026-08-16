import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-5 text-center">
      <h1 className="text-5xl font-bold text-slate-800 mb-6">
        Welcome to Note Summarizer
      </h1>

      <p className="text-lg text-gray-600 max-w-xl mb-8">
        Organize your notes efficiently and summarize them using AI. Create,
        manage and review your notes anytime.
      </p>

      <Link
        to="/notes"
        className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition"
      >
        Get Started
      </Link>
    </div>
  );
}

export default Home;
