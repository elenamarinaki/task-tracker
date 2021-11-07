import React from 'react';
import { useState } from 'react';

const Tasks = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Finish reading the book', reminder: true },
    { id: 2, text: 'Write the feedback', reminder: true },
    { id: 3, text: 'Send Marika text', reminder: false },
  ]);
  
  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  );
};

export default Tasks;
