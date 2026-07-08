// const button = () => {
//   return (
//     <button
//       class="text-white bg-green-800  hover:bg-green-700
// text-md px-4 py-2 rounded-md"
//     >
//       Add New
//     </button>
//   );
// };
// export default button;

// function Button({ text, onClick, color }) {
//   return (
//     <button
//       onClick={onClick}
//       className={`${color} text-white px-4 py-2 rounded`}
//     >
//       {text}
//     </button>
//   );
// }

// export default Button;

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
