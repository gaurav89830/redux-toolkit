import { createSlice, nanoid } from "@reduxjs/toolkit";
// nanoid generates unique IDs

// now create a initial state
const initialState = {
  todos: [{ id: 1, text: "hello world" }],
};

// now create slice

export const todoSlice = createSlice({
  // btw iski functionality ko alag se export krna padta hai
  name: "todo",
  initialState,
  //reducers mein property and func aate hai
  // yeh niche state and acthion milta hi hai
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      // now todo toh bnn gya ab state bhi toh update krni hai
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    // ab update wala bna

    updateTodo: (state, action) => {},
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

// now store ko bhi aware krna hai inn func k baare mein to maintain

export default todoSlice.reducer;
