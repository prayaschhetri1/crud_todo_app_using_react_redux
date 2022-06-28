import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { deleteTodo, singleTodo } from "../redux/Action";

const SingleTodo = () => {
  const { id } = useParams();

  const singleItem = useSelector((state) => state.newTodo);

  // console.log(singleItem)

  const dispatch = useDispatch();
  const getData = () => {
    axios(`http://localhost:8080/todos/${id}`).then((res) => {
      dispatch(singleTodo(res.data));
    });
  };

  useEffect(() => {
    getData();
  }, [id]);

  const handleEdit = (id) => {
    dispatch(deleteTodo(id));
    fetch(`http://localhost:8080/todos/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
  };

  return (
    <div>
      <h1>{singleItem.title}</h1>
      <Link to={`/todo/${singleItem.id}/edit`}>
        <button onClick={() => handleEdit(singleItem.id)}>EDIT</button>
      </Link>
    </div>
  );
};

export default SingleTodo;
