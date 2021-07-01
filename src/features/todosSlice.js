import { createSlice } from "@reduxjs/toolkit";





const options = {
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            if (action.payload !== '') {
                return [...state, {
                    id: incrementCount(state),
                    text: action.payload,
                    completed: false
                }]
            }
        },

        removeTodo: (state, action) => {
            return state.filter(todo => todo.id !== action.payload.id);
        },

        toggleTodo: (state, action) => {
            const index = state.findIndex(todo => todo.id === action.payload.id);
            state[index].completed = action.payload.completed;

        },


    }
}

const todosSlice = createSlice(options);



//Selectors
export const selectTodos = (state) => state.todos;
export const selectTasksCompleted = (state) => state.todos.filter(todo => todo.completed === true).length;




//Helper Function
const incrementCount = (state) => {
    const lastIdx = state.length - 1;
    if (state.length < 1) {
        return 0
    } else {
        return state[lastIdx].id + 1
    }
}


//Export Statements
export const { addTodo, removeTodo, toggleTodo } = todosSlice.actions;
export default todosSlice.reducer;