// src/App.js
import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import Header from './components/Header';
import SideNav from './components/SideNav';
import './App.css';

function App() {
  const [selectedTag, setSelectedTag] = useState(null);
  const [hideCompleted, setHideCompleted] = useState(false);

  return (
    <div className='app-contaniner'>
     <Header />
     <div className='app'>
        <TodoInput />
        <div className='container'>
          <SideNav 
          setSelectedTag={setSelectedTag} 
          selectedTag={selectedTag}
          hideCompleted={hideCompleted}
          setHideCompleted={setHideCompleted}
          />
          <TodoList 
          selectedTag={selectedTag}
          hideCompleted={hideCompleted}/>
        </div>
     </div>
    </div>
  );
}

export default App;
