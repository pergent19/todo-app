import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../features/todoSlice';
import { hideModal } from '../features/userProgressSlice';
import ModalComponent from "../UI/ModalComponent"
import './TodoInput.css'

const tags = [
  { id: 'work', label: 'work', color: '#D2CEFF' },
  { id: 'study', label: 'study', color: '#D1E5F7' },
  { id: 'entertainment', label: 'entertainment', color: '#FFCECE' },
  { id: 'family', label: 'family', color: '#DAF2D6' }
];

const TodoInput = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const dispatch = useDispatch();
  const userProgress = useSelector(state => state.userProgress.modalType);

  const handleTagChange = (tagId) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tagId)
        ? prevTags.filter((id) => id !== tagId)
        : [...prevTags, tagId]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && description.trim()) {
      dispatch(addTodo({title, description, tags: selectedTags}));
      dispatch(hideModal())
      setTitle('');
      setDescription('');
      setSelectedTags([]);
    }
  };

  return (
    <ModalComponent open={userProgress === 'Add'}>
      <form onSubmit={handleSubmit} className="todo-input">
      <div className="modal-actions">
          <span className="cancel-btn" onClick={() => dispatch(hideModal())}>Cancel</span>
          <button className="add-btn" type="submit">Add Todo</button>
        </div>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="add a title ..."
          className='modal-input'
        />
        <label>Description</label>
        <textarea
        placeholder="add a description ..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="modal-input"
        />
        <label>Tags</label>

        <div className="tags-container">
          {tags.map((tag) => (
            <div
              key={tag.id}
              className={`tag-item ${selectedTags.includes(tag.id) ? 'selected' : ''}`}
              onClick={() => handleTagChange(tag.id)}
            >
              <input
                type="checkbox"
                id={tag.id}
                checked={selectedTags.includes(tag.id)}
                onChange={() => handleTagChange(tag.id)}
                style={{ display: 'none' }}
              />
              <div className="circle" style={{ backgroundColor: tag.color }}></div>
              <label htmlFor={tag.id} className="tag-label">{tag.label}</label>
            </div>
          ))}
        </div>
      </form>
    </ModalComponent>
  );
};

export default TodoInput;

