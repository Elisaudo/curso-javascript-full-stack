import React from "react";
import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });
  const [todo, setTodo] = useState("");

  const [isEditing, setIsEditing] = useState(false);

  const [currentTodo, setCurrentTodo] = useState({});

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function handleInputChange(e) {
    setTodo(e.target.value);
  }

  function handleEditInputChange(e) {
    setCurrentTodo({ ...currentTodo, text: e.target.value });
    console.log(currentTodo);
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    if (todo !== "") {
      setTodos([
        ...todos,
        {
          id: todos.length + 1,
          text: todo.trim(),
        },
      ]);
    }

    setTodo("");
  }

  function handleEditFormSubmit(e) {
    e.preventDefault();

    handleUpdateTodo(currentTodo.id, currentTodo);
  }

  function handleDeleteClick(id) {
    const removeItem = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(removeItem);
  }

  function handleUpdateTodo(id, updatedTodo) {
    const updatedItem = todos.map((todo) => {
      return todo.id === id ? updatedTodo : todo;
    });

    setIsEditing(false);

    setTodos(updatedItem);
  }

  function handleEditClick(todo) {
    setIsEditing(true);

    setCurrentTodo({ ...todo });
  }

  return (
    <div className="App">
      {isEditing ? (
        <form className="form-editar" onSubmit={handleEditFormSubmit}>
          <div className="titulo-editar">
            <h2>Editar Tarefa</h2>
          </div>

          <label htmlFor="editTodo">Editar tarefa: </label>

          <input
            name="editTodo"
            type="text"
            placeholder="Edit todo"
            value={currentTodo.text}
            onChange={handleEditInputChange}
          />

          <button className="btn btn-atualizar" type="submit">
            Atualizar
          </button>

          <button
            className="btn btn-cancelar"
            onClick={() => setIsEditing(false)}
          >
            Cancelar
          </button>
        </form>
      ) : (
        <form className="form-adicionar" onSubmit={handleFormSubmit}>
          <div className="titulo-adicionar">
            <h2>Adicionar tarefa</h2>
          </div>

          <label htmlFor="todo">Adicionar tarefa: </label>
          <input
            name="todo"
            type="text"
            placeholder="Crie uma nova tarefa"
            value={todo}
            onChange={handleInputChange}
          />
          <button className="btn btn-adicionar" type="submit">
            Adicionar
          </button>
        </form>
      )}

      <ul className="todo-list">
        {todos.map((todo) => (
          <li className="todo" key={todo.id}>
            {todo.text}
            <span className="btn-todo">
              <button
                className="btn btn-editar"
                onClick={() => handleEditClick(todo)}
              >
                Editar
              </button>
              <button
                className="btn btn-deletar"
                onClick={() => handleDeleteClick(todo.id)}
              >
                Deletar
              </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
