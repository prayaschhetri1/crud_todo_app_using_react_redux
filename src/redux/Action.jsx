import {
  GET_TODO,
  ADD_TODO,
  DELETE_TODO,
  SINGLE_TODO,
  TOGGLE_TODO,
  COMPLETED_TODO,
} from "./Action_type";

export const getTodo = (payload) => {
  return {
    type: GET_TODO,
    payload,
  };
};

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

export const singleTodo = (payload) => {
  return {
    type: SINGLE_TODO,
    payload,
  };
};

export const toggleTodo = (payload) => {
  return {
    type: TOGGLE_TODO,
    payload,
  };
};

export const ctodo = () => {
  return {
    type: COMPLETED_TODO,
  };
};
