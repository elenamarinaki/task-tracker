import React from 'react';
import Header from './components/Header.jsx';
import Tasks from './components/Tasks.jsx';

const App = () => {
  return (
    <div className='container'>
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' />
      <link
        href='https://fonts.googleapis.com/css2?family=Zen+Kurenaido&display=swap'
        rel='stylesheet'
      />
      <Header title={'Task Tracker ✎'} />
      <Tasks />
    </div>
  );
};

export default App;
