import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: nanoid(),
      text: "Harry",
      value: 0,
    },
  ],
  counter: 0,
  persons: 0,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      if (action.payload.trim() === "") return;
      const newTodo = {
        id: nanoid(),
        text: action.payload,
        value: 0,
      };
      state.todos.push(newTodo);
      state.counter++;
    },

    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
      state.counter--;
    },

    editTodo: (state, action) => {
      const { id, newText } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo && newText.trim() !== "") todo.text = newText;
    },

    incrementValue: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.value += 1;
        state.persons++;
      }
    },

    decrementValue: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.value -= 1;
        state.persons--;
      }
    },
    resetTasks: (state) => {
      (state.todos = []), (state.counter = 0), (state.persons = 0);
    },
    resetPersons: (state) => {
      state.todos.forEach((task) => {
        task.value = 0;
      });
      state.persons = 0;
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  editTodo,
  incrementValue,
  decrementValue,
  resetTasks,
  resetPersons,
} = todoSlice.actions;
export default todoSlice.reducer;
