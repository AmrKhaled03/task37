import React, { createContext,  useState } from "react";
export const ShopContext = createContext();
const Todo = (props) => {
  const [todos, setTodos] = useState([]);
  const [inputvalue, setInputvalue] = useState("");

  const addTodo = () => {
    const newTodo = {
      id: Date.now(),
      name: inputvalue,
    };
    if (inputvalue.trim().length > 0) {
      setTodos(prevTodos => [...prevTodos, newTodo]);
      setInputvalue("");
     
    } else {
      alert("Please Add Text");
    }
};




  const deleteTodo = (id) => {
    const newTodo = todos.filter((todo) => todo.id !== id);
    setTodos(newTodo);
  };
  const values = {
    inputvalue,
    addTodo,
    deleteTodo,
    todos,
    setInputvalue,
  };
  return (
    <div>
      <ShopContext.Provider value={values}>
        {props.children}
      </ShopContext.Provider>
    </div>
  );
};

export default Todo;
