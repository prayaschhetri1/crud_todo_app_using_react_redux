import { loadData, saveData } from "../utils/LocalStorage";
import { GET_TODO, ADD_TODO, DELETE_TODO, SINGLE_TODO, TOGGLE_TODO, COMPLETED_TODO } from "./Action_type";

const initialState = {
  todo: loadData("todos") || [],
  newTodo: {},
  completedTodo : []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODO: {
      return { ...state, todo: action.payload };
    }
    case ADD_TODO: {

    const updatedData = { ...state, todo: [...state.todo, action.payload] };
    saveData("todos" , updatedData);
    return {
      ...state,
      todo : updatedData
    }
    }

    case DELETE_TODO: {
      let finalTodo = state.todo.filter((item) => {
        return item.id != action.payload;
      });
      return { ...state, todo: finalTodo };
    }

    case SINGLE_TODO: {
      return { ...state, newTodo: action.payload  }
    }

    case COMPLETED_TODO : {
      let newFilterTodo = state.todo.filter((elem) => {
        return elem.completed === true;
      });
      return {...state,completedTodo:newFilterTodo}
    }


    
    case TOGGLE_TODO: {
      let newTodoArr = state.todo.map((elem) => {
        if (elem.id == action.payload) {
          return { ...elem,  completed: !elem.completed };
        } else {
          return elem;
        }
      });
      return {...state,todo:newTodoArr}
      }

    default: {
      return state;
    }
  }
};
