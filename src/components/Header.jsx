import React from 'react';
// import Button from './Button';
import './Header.styles.css';
import { Button } from '@mui/material';

const Header = ({ title }) => {
  const onClick = () => {
    
  }
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button variant='outlined' color='secondary'>
        ADD
      </Button>
    </header>
  );
};

export default Header;
