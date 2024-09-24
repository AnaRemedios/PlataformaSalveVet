import { Dialog, DialogTitle, TextField, Box, Button } from '@mui/material';

export default function RegisterPetModal({ open, onClose }: any) {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Cadastrar Animal</DialogTitle>
      <Box sx={{ p: 2 }}>
        <TextField label="Nome" fullWidth sx={{ mb: 2 }} />
        <TextField label="Espécie" fullWidth sx={{ mb: 2 }} />
        <TextField label="Raça" fullWidth sx={{ mb: 2 }} />
        <TextField label="Idade" fullWidth sx={{ mb: 2 }} />

        <Button variant="contained" color="primary" fullWidth>
          Salvar
        </Button>
      </Box>
    </Dialog>
  );
}
