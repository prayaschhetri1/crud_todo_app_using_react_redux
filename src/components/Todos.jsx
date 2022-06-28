import React from "react";
import TodoInput from "./TodoInput";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getTodo } from "../redux/Action";
import TodoItem from "./TodoItem";
import CompletedTodo from "./CompletedTodo";
import { useState } from "react";

const Todos = () => {
  const todo = useSelector((state) => state.todo);

  const dispatch = useDispatch();
  const getData = () => {
    axios(`http://localhost:8080/todos`).then((res) => {
      dispatch(getTodo(res.data));
    });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div>
        <h4>TODO APP</h4>
        <TodoInput />
        {todo.map((item) => {
          return (
            <div key={item.id}>
              {" "}
              <TodoItem item={item} />{" "}
            </div>
          );
        })}
      </div>

      <CompletedTodo />
    </>
  );
};

export default Todos;
