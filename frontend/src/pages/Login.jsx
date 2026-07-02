function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className="bg-white p-6 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter email"
            className="w-full border p-2 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            className="w-full border p-2 rounded"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-slate-800 text-white p-2 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
