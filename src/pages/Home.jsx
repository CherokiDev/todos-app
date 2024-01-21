import { TodoList } from "../components/TodoList";
import { TodoForm } from "../components/TodoForm";
import { useTodos } from "../hooks/useTodos";

export const Home = () => {
  const {
    title,
    setTitle,
    priority,
    setPriority,
    todos,
    handleSubmit,
    handleDelete,
  } = useTodos();

  return (
    <div className="py-12">
      <h2 className="text-center text-4xl font-bold">Tareas</h2>
      <p className="mt-3 text-center">Creador de tareas</p>
      <TodoForm
        title={title}
        setTitle={setTitle}
        priority={priority}
        setPriority={setPriority}
        handleSubmit={handleSubmit}
      />
      <TodoList todos={todos} handleDelete={handleDelete} />
    </div>
  );
};
