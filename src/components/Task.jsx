import React from 'react';
import './Task.styles.css';
import { TiDelete } from 'react-icons/ti';

const Task = ({ task }) => {
  return (
    <div className='task'>
      <div className='flex'>
        <h3>{task.text}</h3>
        <p>{task.day}</p>
      </div>

      <TiDelete className='icon' />
    </div>
  );
};

export default Task;
