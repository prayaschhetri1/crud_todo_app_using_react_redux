import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "../redux/Action";
const TodoInput = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const handleClick = () => {
    let payload = {
      title: input,
      completed: false,
      id: uuidv4(),
    };

    fetch("http://localhost:8080/todos", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json" },
    });

    dispatch(addTodo(payload));
  };
  return (
    <div>
      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Add your task here..."
      />
      <button onClick={handleClick}>ADD</button>
    </div>
  );
};

export default TodoInput;
