import { useState, useEffect } from "react";
import toast from "react-hot-toast";

export const useTodos = () => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("low");
  const [todos, setTodos] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const currentTodos = JSON.parse(localStorage.getItem("todos"));
    if (currentTodos) {
      setTodos(currentTodos);
      setIndex(currentTodos.length);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      title,
      priority,
      index,
    };

    if (title.length < 6) {
      toast("El título debe tener al menos 6 caracteres");
      return;
    }

    let currentTodos = localStorage.getItem("todos");

    if (currentTodos) {
      currentTodos = JSON.parse(currentTodos);

      const alreadyExists = currentTodos.find((todo) => todo.title === title);

      if (alreadyExists) {
        toast.error("Ya existe un todo con ese título");
        return;
      }

      currentTodos.push(newTodo);
      localStorage.setItem("todos", JSON.stringify(currentTodos));

      setTodos(currentTodos);
      setIndex(index + 1);
    } else {
      localStorage.setItem("todos", JSON.stringify([newTodo]));
      setTodos([newTodo]);
      setIndex(index + 1);
    }

    setTitle("");
  };

  const handleDelete = (index) => {
    const currentTodos = JSON.parse(localStorage.getItem("todos"));
    currentTodos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(currentTodos));
    setTodos(currentTodos);
    toast.success("Todo eliminado");
  };

  return {
    title,
    setTitle,
    priority,
    setPriority,
    todos,
    handleSubmit,
    handleDelete,
  };
};
