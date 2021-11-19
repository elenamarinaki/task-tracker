import React from 'react';
// import Button from './Button';
import './Header.styles.css';
import { Button } from '@mui/material';

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button
        variant='outlined'
        color={showAdd ? 'secondary' : 'primary'}
        // text={showAdd ? 'Close' : 'Add'}
        onClick={onAdd}
      >
        {showAdd ? 'Close' : 'Add'}
      </Button>
    </header>
  );
};

export default Header;
