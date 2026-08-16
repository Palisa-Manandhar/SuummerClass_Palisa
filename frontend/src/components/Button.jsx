function Button({ text, color, onClick, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${color} text-white px-5 py-2 rounded-lg hover:opacity-90 transition`}
    >
      {text}
    </button>
  );
}

export default Button;
