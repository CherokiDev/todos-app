import PropTypes from "prop-types";

export const TodoCard = ({ todo, handleDelete, index }) => {
  const color =
    todo.priority === "low"
      ? "border-indigo-500"
      : todo.priority === "medium"
      ? "border-orange-500"
      : "border-red-500";

  return (
    <div
      className={`mx-auto w-full max-w-md rounded border ${color} px-3 py-4 flex justify-between items-center`}
    >
      <p>{todo.title}</p>
      <button
        onClick={() => handleDelete(index)}
        className="mt-2 bg-red-500 text-white px-4 py-2 rounded"
      >
        Borrar
      </button>
    </div>
  );
};

TodoCard.propTypes = {
  todo: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};
