import React from 'react';
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";

const Todolist = ()=> {
    const dispatch  = useDispatch();
    const todos = useSelector((state)=> state.todos);
    const handleDelete = (id) =>{
        dispatch({type:'DELETE_TODO', payload:id})
    }
    return (
        <>
            <ul>
                {todos.map((todo, i )=>(
                    <li key={i} onClick={()=>handleDelete(todo.id)}>{todo.label}</li>
                ))}
            </ul>
        </>
    );
}

export default Todolist;