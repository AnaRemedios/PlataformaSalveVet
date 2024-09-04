import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import React from 'react';

interface ButtonLoginVetProps {
  variant?: 'text' | 'outlined' | 'contained';
  color?: 'primary' | 'secondary' | 'success' | 'error';
  children?: React.ReactNode;
  disabled?: boolean;
}

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: 8,
  padding: '8px 16px',
  fontWeight: 'bold',
  fontSize: '1rem',
  textTransform: 'none',
  boxShadow: 'none',
  backgroundColor: '#1EE0CC', // cor de fundo inicial
  color: '#000', // cor do texto inicial
  '&:hover': {
    backgroundColor: '#FFB641', // cor de fundo no hover
    color: '#FFFFFF', // cor do texto no hover
    boxShadow: 'none',
  },
  [theme.breakpoints.down('sm')]: { // Ajuste para telas pequenas
    padding: '4px 8px',
    fontSize: '0.8rem',
  },
}));

const ButtonLoginVet: React.FC<ButtonLoginVetProps> = ({
  variant = 'contained',
  color = 'primary',
  children = 'Sou Veterinário SalveVet',
  disabled = false,
}) => {

  return (
    <Link href="/login" passHref>
      <StyledButton
        variant={variant}
        color={color}
        disabled={disabled}
      >
        {children}
      </StyledButton>
    </Link>
  );
};

export default ButtonLoginVet;
