import React from 'react';
import { useState } from 'react';

import Header from './components/Header.jsx';
import Tasks from './components/Tasks.jsx';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Finish reading the book', day: 'Oct 20th', reminder: true },
    { id: 2, text: 'Write the feedback', day: 'May 6th', reminder: true },
    { id: 3, text: 'Send Marika text', day: 'Dec 2th',reminder: false },
  ]);

  return (
    <div className='container'>
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' />
      <link
        href='https://fonts.googleapis.com/css2?family=Zen+Kurenaido&display=swap'
        rel='stylesheet'
      />
      <Header title={'Task Tracker ✎'} />
      <Tasks tasks={tasks} />
    </div>
  );
};

export default App;
