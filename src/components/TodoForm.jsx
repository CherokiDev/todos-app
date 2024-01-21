import PropTypes from "prop-types";

export const TodoForm = ({
  title,
  setTitle,
  priority,
  setPriority,
  handleSubmit,
}) => {
  return (
    <form
      className="mx-auto my-8 max-w-xl border-2 px-6 py-8 shadow-md"
      action=""
    >
      <label htmlFor="title">Tarea</label>
      <input
        className="mt-2 w-full rounded border border-black px-2 py-2"
        name="title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {title.length < 6 && title.length > 0 && (
        <p className="text-red-500">
          La longitud de la tarea deber ser mayor a 5
        </p>
      )}
      <label className="mt-4 inline-block" htmlFor="">
        Prioridad
      </label>
      <select
        className="mt-2 block border border-black px-4 py-2"
        name=""
        id=""
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option className="px-2" value="low">
          Baja
        </option>
        <option className="px-2" value="medium">
          Media
        </option>
        <option className="px-2" value="high">
          Alta
        </option>
      </select>
      <input
        className="mt-6 w-full rounded bg-indigo-600 py-3 text-white"
        type="submit"
        value="Crear tarea"
        onClick={handleSubmit}
        disabled={title.length < 6}
        style={{
          backgroundColor: title.length < 6 && "gray",
          cursor: title.length > 5 ? "pointer" : "not-allowed",
        }}
      />
    </form>
  );
};

TodoForm.propTypes = {
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
  priority: PropTypes.string.isRequired,
  setPriority: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
