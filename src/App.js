import React from 'react';
import { useState } from 'react';
import './App.css';

import Header from './components/Header.jsx';
import Tasks from './components/Tasks.jsx';
import AddTask from './components/AddTask';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Finish reading the book', day: 'Oct 20th', reminder: true },
    { id: 2, text: 'Write the feedback', day: 'May 6th', reminder: true },
    { id: 3, text: 'Send Marika text', day: 'Dec 2th', reminder: false },
  ]);

  const deleteTask = (id) => {
    console.log('delete', id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    console.log(id);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className='container'>
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' />
      <link
        href='https://fonts.googleapis.com/css2?family=Zen+Kurenaido&display=swap'
        rel='stylesheet'
      />
      <Header title={'Task Tracker ✎'} />
      <AddTask />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        <p className='empty'>No tasks! 😲</p>
      )}
    </div>
  );
};

export default App;
