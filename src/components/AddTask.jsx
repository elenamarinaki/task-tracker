import React from 'react';
import './AddTask.styles.css';

const AddTask = () => {
  return (
    <form className='add-form'>
      <div className='input-field'>
        <label htmlFor='add-task'>Task</label>
        <input type='text' placeholder='Add Task' id='add-task' />
      </div>
      <div className='input-field'>
        <label htmlFor='day-time'>Day & Time</label>
        <input type='text' placeholder='Add Day & Time' id='day-time' />
      </div>
      <div className='input-check'>
        <label htmlFor='reminder'>Set Reminder</label>
        <input type='checkbox' id='reminder' />
      </div>

      <input type='submit' value='Save Task' className='btn-add'/>
    </form>
  );
};

export default AddTask;
