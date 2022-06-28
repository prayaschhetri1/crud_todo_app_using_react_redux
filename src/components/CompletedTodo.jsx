import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ctodo } from "../redux/Action";

const CompletedTodo = () => {
  const dispatch = useDispatch();
  const completedItem = useSelector((state) => state.completedTodo);

  const handleAdd = () => {
    dispatch(ctodo());
    console.log(ctodo());
  };

  return (
    <div>
      <button onClick={handleAdd}>completed todos</button>
      {completedItem?.map((item) => {
        return (
          <div key={item.id}>
            <h4>{item.title}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default CompletedTodo;
