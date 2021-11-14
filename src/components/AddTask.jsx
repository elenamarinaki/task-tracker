import React from 'react';
import { useState } from 'react';
import './AddTask.styles.css';

const AddTask = () => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState('');

  return (
    <form className='add-form'>
      <div className='input-field'>
        <label htmlFor='add-task'>Task</label>
        <input
          type='text'
          placeholder='Add Task'
          id='add-task'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className='input-field'>
        <label htmlFor='day-time'>Day & Time</label>
        <input
          type='text'
          placeholder='Add Day & Time'
          id='day-time'
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className='input-check'>
        <label htmlFor='reminder'>Set Reminder</label>
        <input
          type='checkbox'
          id='reminder'
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input type='submit' value='Save Task' className='btn-add' />
    </form>
  );
};

export default AddTask;
