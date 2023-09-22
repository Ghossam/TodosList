/*steps to make a todo's List
make 2 input tag
add button
button ko eak function pass karo to show the upper gven inputs
eak delete button under every todos
delete button ki functionality to delete the following todo
*/
import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Front from "./Components/Front";
import AddTodo from "./Components/AddTodo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => { 
        return e!== todo;
      }));
      localStorage.setItem("todos",JSON.stringify(todos));
    }
    const addTodo = (title, desc) => {
      let sno;
      const myTodo = {  
        sno: sno,
        title: title,
        desc: desc,
      };
      setTodos([...todos, myTodo]);
      console.log(myTodo);
    };

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  return (
    <>
      
        <Navbar title="Todo's List" searchBar={true}/>
        <AddTodo addTodo={addTodo}/>
        <Front todos={todos} onDelete={onDelete} />
        <Footer/>
      
    </>
  );
}
export default App;
