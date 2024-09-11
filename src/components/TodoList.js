import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo } from '../features/todoSlice';
import './TodoList.css';

const tags = [
  { id: 'work', label: 'Work', color: '#D2CEFF' },
  { id: 'study', label: 'Study', color: '#D1E5F7' },
  { id: 'entertainment', label: 'Entertainment', color: '#FFCECE' },
  { id: 'family', label: 'Family', color: '#DAF2D6' }
];

const TodoList = ({ selectedTag, hideCompleted  }) => {
  const todos = useSelector(state => state.todos.todos);
  const dispatch = useDispatch();

  const getTagColor = (tagId) => {
    const tag = tags.find(tag => tag.id === tagId);
    return tag ? tag.color : '#ccc'; // default color if no match found
  };

  const filteredTodos = todos
  .filter(todo => !hideCompleted || !todo.completed) // Hide completed tasks if checkbox is checked
  .filter(todo => !selectedTag || todo.tags.includes(selectedTag)); // Filter by selected tag


  return (
    <>
      {filteredTodos.length === 0 ? (
        <h1 className="no-tasks">No tasks available</h1>
      ) : (
        <ul className="todo-list">
          {filteredTodos.map(todo => (
            <li key={todo.id}>
              <div className="todo-content">
                <h3 className={`todo-title ${todo.completed ? 'completed' : ''}`}>{todo.title}</h3>
                <p className={`todo-description ${todo.completed ? 'completed' : ''}`}>{todo.description}</p>

                {/* Display tags as colored circles */}
                <div className='todo-tags-checkbox-container'>
                  <div className="todo-tags">
                    {todo.tags.map(tagId => (
                      <div
                        key={tagId}
                        className="tag-circle"
                        style={{ backgroundColor: getTagColor(tagId) }}
                      ></div>
                    ))}
                  </div>
                  <div className='done-checkbox-container'>
                    <span className='done-text'>done</span>
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => dispatch(toggleTodo(todo.id))}
                      className="completion-checkbox"
                    />
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default TodoList;
