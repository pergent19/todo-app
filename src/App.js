// src/App.js
import React from 'react';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import Header from './components/Header';
import SideNav from './components/SideNav';
import './App.css';

function App() {
  return (
    <div className='app-contaniner'>
     <Header />
     <div className='app'>
        <TodoInput />
        <div className='container'>
          <SideNav />
          <TodoList />
        </div>
     </div>
    </div>
  );
}

export default App;
