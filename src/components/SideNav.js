import React, { useState } from 'react';
import './SideNav.css';

const tags = [
  { id: 'work', label: 'Work', color: '#D2CEFF' },
  { id: 'study', label: 'Study', color: '#D1E5F7' },
  { id: 'entertainment', label: 'Entertainment', color: '#FFCECE' },
  { id: 'family', label: 'Family', color: '#DAF2D6' }
];

export default function SideNav({ selectedTag, setSelectedTag, hideCompleted, setHideCompleted }) {
  const [activeTag, setActiveTag] = useState(null);

  const handleClick = (tagId) => {
    // Toggle active state
    setActiveTag(prevTag => (prevTag === tagId ? null : tagId));
    // Notify parent component of the selection
    setSelectedTag(tagId === activeTag ? null : tagId);
  };

  const handleHideCompletedChange = (event) => {
    setHideCompleted(event.target.checked);
  };

  return (
    <div className="task-list-container">
      <ul className="task-list">
        {tags.map(tag => (
          <li
            key={tag.id}
            className={`task-item ${selectedTag === tag.id ? 'active' : ''}`} // Apply active class if selected
            onClick={() => handleClick(tag.id)}
          >
            <div className="circle" style={{ backgroundColor: tag.color }}></div>
            {tag.label}
          </li>
        ))}
      </ul>
      <div className="hide-completed">
        <label>
          <input
            className='completion-checkbox'
            type="checkbox"
            name="hideCompleted"
            checked={hideCompleted}
            onChange={handleHideCompletedChange}
          />
          <span>Hide Done Tasks</span>
        </label>
      </div>
    </div>
  );
}
