// esta sendo usado dentro do componente navbar
import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface ButtonEntrarProps {
  variant?: 'text' | 'outlined' | 'contained';
  color?: 'primary' | 'secondary' | 'success' | 'error';
  children: React.ReactNode;
  disabled?: boolean;
}

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: 8,
  padding: '8px 16px',
  fontWeight: 'bold',
  fontSize: '1rem',
  textTransform: 'none',
  boxShadow: 'none',
  backgroundColor: '#5C2574', // purple
  color: '#fff', // white
  '&:hover': {
    backgroundColor: '#E29BFF',
    color: '#000',
    boxShadow: 'none',
  },
  [theme.breakpoints.down('sm')]: { // Ajuste para telas pequenas
    padding: '4px 8px',
    fontSize: '0.8rem',
  },
}));

const ButtonEntrar: React.FC<ButtonEntrarProps> = ({
  variant = 'contained',
  color = 'primary',
  children = 'Entrar',
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

export default ButtonEntrar;
