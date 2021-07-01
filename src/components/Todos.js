import React, { useState } from 'react';
import { Todolist } from './Todolist';
import { selectTodos } from '../features/todosSlice';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from '../features/todosSlice';
import { selectTasksCompleted } from '../features/todosSlice';

export function Todos() {

    const [text, setText] = useState('');

    const todos = useSelector(selectTodos);
    const dispatch = useDispatch();

    const tasksCompleted = useSelector(selectTasksCompleted);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo(text))
        e.target[0].value = '';
        setText('');
    }



    return (
        <main className="h-todo w-todo bg-purple-200 rounded-lg shadow-md">
            <section className="w-full text-center">
                <h1 className="text-5xl">Redux Todolist App</h1>
                <form onSubmit={handleSubmit} className="w-full flex flex-row mt-9">
                    <input onChange={({ target }) => setText(target.value)} type="text" className=" border border-black h-8 w-4/5 m-1 text-xl" />
                    <button type="submit" className=" bg-indigo-600 text-white shadow-md w-32 h-10 text-lg hover:bg-indigo-800">Add Todo</button>
                </form>
            </section>
            <section>
                {todos.map(todo => {
                    return (
                        <Todolist
                            key={todo.id}
                            id={todo.id}
                            completed={todo.completed}
                            text={todo.text} />
                    )
                })}
            </section>
            <p className="text-center">Total Tasks Completed: {tasksCompleted}</p>
        </main>
    )
}

