import React from 'react';
import './AddTask.styles.css';

const AddTask = () => {
  return (
    <form className='add-form'>
      <div>
        <label htmlFor='add-task'>Task</label>
        <input type='text' placeholder='Add Task' id='add-task' />
      </div>
      <div>
        <label htmlFor='day-time'>Day & Time</label>
        <input type='text' placeholder='Add Day & Time' id='day-time' />
      </div>
      <div>
        <label htmlFor='reminder'>Set Reminder</label>
        <input type='checkbox' id='reminder' />
      </div>

      <input type='submit' value='Save Task' />
    </form>
  );
};

export default AddTask;
