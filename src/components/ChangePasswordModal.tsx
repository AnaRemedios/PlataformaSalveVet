import { Modal, Box, Button, TextField } from '@mui/material';

export default function ChangePasswordModal({ open, handleClose }: any) {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', p: 4, borderRadius: 2 }}>
        <h2>Alterar Senha</h2>
        <form>
          <TextField label="Senha Atual" fullWidth sx={{ mt: 2 }} />
          <TextField label="Nova Senha" fullWidth sx={{ mt: 2 }} />
          <TextField label="Confirmar Nova Senha" fullWidth sx={{ mt: 2 }} />
          <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={handleClose}>
            Salvar
          </Button>
        </form>
      </Box>
    </Modal>
  );
}
