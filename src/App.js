import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import { AddTodo } from './AddTodo';
import { About } from './MyComponents/About';
import Footer from './MyComponents/Footer';
import './App.css';

function App() {
  let initTodo;
  if (localStorage.getItem('todos') === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem('todos'));
  }

  const onDelete = (todo) => {
    setTodos(todos.filter((e) => e !== todo));
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    let sno;
    if (todos.length === 0) {
      sno = 1;
    } else sno = todos[todos.length - 1].sno + 1;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
  };

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <BrowserRouter>
        <Header title="MyTodosList.com" searchBar={false} />
        <h1 className="text-center my-3">Todos List</h1>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddTodo addTodo={addTodo} />
                <hr />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
