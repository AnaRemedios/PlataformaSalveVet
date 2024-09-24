import { Modal, Box, Typography, IconButton, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

const modalStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

export default function CompleteCadastroModal({ open, handleClose }: { open: boolean, handleClose: () => void }) {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={modalStyle}>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{ position: 'absolute', right: 8, top: 8, color: (theme) => theme.palette.grey[500] }}
        >
          <CloseIcon />
        </IconButton>
        <Typography variant="h6" component="h2" gutterBottom>
          Completar Cadastro
        </Typography>

        <Typography variant="body1" gutterBottom>
          Veterinário, complete o seu cadastro para acessar todas as funcionalidades da plataforma!
        </Typography>

        <form>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
            <input placeholder="Nome" />
            <input placeholder="Sobrenome" />
            <input placeholder="CPF" />
            <input placeholder="RG" />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px', marginTop: '16px' }}>
            <input placeholder="CEP" />
            <input placeholder="Endereço" />
            <input placeholder="Número" />
            <input placeholder="Complemento" />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px', marginTop: '16px' }}>
            <input placeholder="E-mail" />
            <input placeholder="WhatsApp" />
          </div>

          <Button variant="contained" color="primary" style={{ marginTop: '16px' }}>
            Próximo
          </Button>
        </form>
      </Box>
    </Modal>
  );
}
