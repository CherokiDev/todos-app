import PropTypes from "prop-types";
import { TodoCard } from "./TodoCard";

export const TodoList = ({ todos, handleDelete }) => {
  return (
    <div className="mt-8 px-3">
      <p className="mb-3 text-center">Lista de tareas</p>
      <div className="flex flex-col gap-4">
        {todos.map((todo, index) => {
          return (
            <TodoCard
              todo={todo}
              key={index}
              handleDelete={handleDelete}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
