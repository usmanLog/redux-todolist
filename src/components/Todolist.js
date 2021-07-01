import React from 'react';
import { removeTodo } from '../features/todosSlice';
import { toggleTodo } from '../features/todosSlice';
import { useDispatch } from 'react-redux';

export function Todolist({ id, text, completed }) {

    const dispatch = useDispatch();

    const handleChange = () => {
        dispatch(toggleTodo({
            id: id,
            completed: !completed
        }))
    }

    const handleClick = () => {
        dispatch(removeTodo({ id: id }));
    }

    return (
        <div className="flex flex-row h-12 w-100 border-b-2 border-gray-300 text-xl items-center">
            <label className="flex items-center justify-center">
                <input onChange={handleChange} type="checkbox" className=" mx-1" />
            </label>
            <p className={`${completed && 'text-red-500 line-through'}`}>{text}</p>
            <button onClick={handleClick} className="hover:opacity-100 opacity-0 ml-1 bg-red-600 text-white h-6 w-3">x</button>
        </div>
    )
}


