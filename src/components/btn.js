import React from 'react';
import Button from '@mui/material/Button';

const Btn = ({ onClick, label, variant = 'contained', color = 'primary' }) => {
  return (
    <Button variant={variant} color={color} onClick={onClick}>
      {label}
    </Button>
  );
};

export default Btn;
