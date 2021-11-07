import React from 'react';
import './Button.styles.css';

const Button = ({ title }) => {
  return <button className='btn'>{title}</button>;
};

export default Button;
