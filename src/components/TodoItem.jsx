import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTodo } from "../redux/Action";
import { toggleTodo } from "../redux/Action";

const TodoItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));

    fetch(`http://localhost:8080/todos/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
  };

  const handleChange = (id) => {
    dispatch(toggleTodo(id));
    // console.log(item)
  };

  return (
    <div className="singleProduct">
      <input onChange={() => handleChange(item.id)} type="checkbox" />
      <Link
        style={{ textDecoration: "none", color: "black" }}
        to={`/todos/${item.id}`}
      >
        <h4>{item.title}</h4>
        <h4>STATUS : {item.completed ? "True" : "False"}</h4>
      </Link>
      <button onClick={() => handleDelete(item.id)}>DELETE</button>
    </div>
  );
};

export default TodoItem;
