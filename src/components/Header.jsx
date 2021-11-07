import React from 'react';
import Button from './Button';
import './Header.styles.css';

const Header = ({ title }) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button title={'Add'} />
    </header>
  );
};

export default Header;
