import { Dialog, DialogTitle, Box, Typography, Grid, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import Image from 'next/image'; // Importando o componente Image do Next.js
import AddReminderModal from './AddReminderModal';

export default function PetDetailsModal({ open, onClose, pet }: any) {
  const [openReminderModal, setOpenReminderModal] = useState(false);

  // Simulação de lembretes
  const reminders = [
    { date: '05/06/2024', category: 'Vacina', description: 'Vacina Décupla (V10)' },
    { date: '05/06/2024', category: 'Vacina', description: 'Vacina de Raiva' },
  ];

  // Simulação de histórico
  const history = [
    { date: '18/06/2024', category: 'vacinação', vet: 'Fulano' },
    { date: '02/06/2024', category: 'consulta', vet: 'Ciclano' },
  ];

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Detalhes do Animal</DialogTitle>

      <Box sx={{ p: 2 }}>
        {/* Primeira Parte: Dados do Animal */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Image
            src={pet.image} // Caminho da imagem
            alt={pet.name} // Descrição alternativa
            width={100} // Largura da imagem
            height={100} // Altura da imagem
            style={{ borderRadius: '50%' }} // Estilo para bordas arredondadas
          />
          <Box>
            <Typography variant="h6">Nome: {pet.name}</Typography>
            <Typography variant="body1">Espécie: Felino</Typography>
            <Typography variant="body1">Raça: SRD</Typography>
            <Typography variant="body1">Idade: 4 anos</Typography>
          </Box>
          <Typography
            variant="button"
            onClick={() => setOpenReminderModal(true)}
            sx={{
              color: '#5A32D5', // Cor do link
              textDecoration: 'underline', // Estilo sublinhado para se parecer com link
              cursor: 'pointer',
              display: 'block',
              mt: 2
            }}
          >
            + Adicionar Lembrete
          </Typography>
        </Box>

        {/* Segunda Parte: Lembretes */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6">Lembretes</Typography>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            {reminders.map((reminder, index) => (
              <Grid container key={index} alignItems="center" spacing={2}>
                <Grid item xs={3}>
                  <Typography>{reminder.date}</Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography>{reminder.category}</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography>{reminder.description}</Typography>
                </Grid>
                <Grid item xs={2}>
                  <IconButton>
                    <EditIcon />
                  </IconButton>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Terceira Parte: Histórico */}
        <Box sx={{ mt: 4, maxHeight: 200, overflowY: 'scroll' }}>
          <Typography variant="h6">Histórico</Typography>
          <Grid container spacing={2}>
            {history.map((item, index) => (
              <Grid container key={index} spacing={2}>
                <Grid item xs={3}>
                  <Typography>{item.date}</Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography>{item.category}</Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography>{item.vet}</Typography>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* Modal para adicionar lembrete */}
      <AddReminderModal
        open={openReminderModal}
        onClose={() => setOpenReminderModal(false)}
      />
    </Dialog>
  );
}
