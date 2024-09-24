import { Dialog, DialogTitle, Grid, Avatar, Typography, Box } from '@mui/material';

export default function AllPetsModal({ open, onClose }: any) {
  const pets = [
    { id: 1, name: 'Mingau', image: '/mingau.jpg' },
    { id: 2, name: 'Pongo', image: '/pongo.jpg' },
    { id: 3, name: 'Vagabundo', image: '/vagabundo.jpg' },
    { id: 4, name: 'Cesar', image: '/cesar.jpg' },
    { id: 5, name: 'Mingau', image: '/mingau.jpg' },
    { id: 6, name: 'Pongo', image: '/pongo.jpg' },
    { id: 7, name: 'Vagabundo', image: '/vagabundo.jpg' },
    { id: 8, name: 'Cesar', image: '/cesar.jpg' },
    { id: 9, name: 'Mingau', image: '/mingau.jpg' },
    { id: 10, name: 'Pongo', image: '/pongo.jpg' },
    { id: 11, name: 'Vagabundo', image: '/vagabundo.jpg' },
    { id: 12, name: 'Cesar', image: '/cesar.jpg' },
    { id: 13, name: 'Mingau', image: '/mingau.jpg' },
    { id: 14, name: 'Pongo', image: '/pongo.jpg' }
  ];

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Todos os Animais Cadastrados</DialogTitle>
      <Box sx={{ p: 2, maxHeight: 400, overflowY: 'scroll' }}> {/* Adiciona scroll */}
        <Grid container spacing={2}>
          {pets.map((pet) => (
            <Grid item xs={4} key={pet.id}>
              <Avatar src={pet.image} sx={{ width: 80, height: 80, mx: 'auto' }} />
              <Typography variant="subtitle1" textAlign="center">
                {pet.name}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Dialog>
  );
}
