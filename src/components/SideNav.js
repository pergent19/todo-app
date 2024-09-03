import React from 'react'
import './SideNav.css'

export default function SideNav() {
    return (
        <div className="task-list-container">
          <ul className="task-list">
            <li className="task-item">
              <div className="circle" style={{ backgroundColor: '#D2CEFF' }}></div>
              work
            </li>
            <li className="task-item">
              <div className="circle" style={{ backgroundColor: '#D1E5F7' }}></div>
              study
            </li>
            <li className="task-item">
              <div className="circle" style={{ backgroundColor: '#FFCECE' }}></div>
              entertainment
            </li>
            <li className="task-item">
              <div className="circle" style={{ backgroundColor: '#DAF2D6' }}></div>
              family
            </li>
          </ul>
          <div className="hide-completed">
            <label>
              <input
                type="checkbox"
                name="hideCompleted"
              />
              <span>Hide Done Tasks</span>
            </label>
          </div>
        </div>
      );
}
