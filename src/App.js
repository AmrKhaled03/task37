import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Todo from "./context/Todo";
import List from "./components/List";

function App() {
  return (
    <>
      <Todo>
        <Navbar />
        <Form />
          <List />  
      </Todo>
  
    </>
  );
}

export default App;
