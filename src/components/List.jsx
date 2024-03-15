import React, { useContext } from 'react';
import { ShopContext } from '../context/Todo';

const List = () => {
    const { todos = [], deleteTodo } = useContext(ShopContext);
    
    return (
        <div className="list-container">
            <div className="container">
                <ul className="todo-list">
                    {todos.map((todo) => (
                        <li key={todo.id} className="todo-item"> 
                            <div className="todo-text">
                                {todo.name} 
                            </div>
                            <button className='btn btn-danger' onClick={() => deleteTodo(todo.id)}>
                                DELETE
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default List;
