import React from 'react';
import { useDispatch } from 'react-redux';
import { showAddModal } from '../features/userProgressSlice';
import './Header.css'


const Header = () => {
    const dispatch = useDispatch();
    
    const handleShowModal = () => {
        dispatch(showAddModal());
      };

  return (
    <>
        <header className="header">
            <div className='icon'>
            <span><img className='icon-todo' src={`${process.env.PUBLIC_URL}/icon-todo.png`} alt="My Icon" /></span>
              <h1 className="title"> 
                todo
              </h1>
            </div>
            <div className="plus-icon" onClick={handleShowModal}>+</div>
        </header>
    </>
  );
};

export default Header;
