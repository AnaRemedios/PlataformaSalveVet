import { Box, Grid, Typography, TextField, Button, MenuItem } from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { useState } from 'react';
import SidebarTutor from '@/components/SidebarTutor'; // Sidebar do tutor já criada

export default function AgendarConsultaPage() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedPet, setSelectedPet] = useState('');
  const [veterinarian, setVeterinarian] = useState('Helena Souza');

  // Simulação de pets cadastrados
  const pets = [
    { id: 1, name: 'Mingau' },
    { id: 2, name: 'Pongo' },
    { id: 3, name: 'Vagabundo' },
    { id: 4, name: 'Cesar' }
  ];

  const handleDateChange = (newDate: Date | null) => {
    setSelectedDate(newDate);
  };

  const handleSubmit = () => {
    // Função de agendar consulta
    console.log('Agendar consulta com:', selectedDate, selectedPet, veterinarian);
  };

  return (
    <Grid container>
      {/* Sidebar */}
      <Grid item xs={2}>
        <SidebarTutor />
      </Grid>

      {/* Conteúdo principal */}
      <Grid item xs={5} sx={{ p: 4 }}>
        <Typography variant="h5" sx={{ mb: 4 }}>
          Agende uma Consulta
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Selecione data, horário e informe o nome do veterinário para criar o agendamento.
        </Typography>

        {/* Campo Data */}
        <DateTimePicker
          label="Data"
          value={selectedDate}
          onChange={handleDateChange}
          renderInput={(params) => <TextField {...params} fullWidth sx={{ mb: 3 }} />}
        />

        {/* Seleção de Pet */}
        <TextField
          select
          label="Escolha o Pet"
          value={selectedPet}
          onChange={(e) => setSelectedPet(e.target.value)}
          fullWidth
          sx={{ mb: 3 }}
        >
          {pets.map((pet) => (
            <MenuItem key={pet.id} value={pet.name}>
              {pet.name}
            </MenuItem>
          ))}
        </TextField>

        {/* Veterinário */}
        <TextField
          label="Veterinário"
          value={veterinarian}
          onChange={(e) => setVeterinarian(e.target.value)}
          fullWidth
          sx={{ mb: 3 }}
        />

        {/* Botão de Agendar */}
        <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>
          Agendar
        </Button>
      </Grid>

      {/* Google Calendar */}
      <Grid item xs={5} sx={{ p: 4, backgroundColor: '#f7f7f7' }}>
        <iframe
          src="https://calendar.google.com/calendar/embed?src=seu-email@gmail.com&ctz=America/Sao_Paulo"
          style={{ border: 0, width: '100%', height: '600px' }}
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </Grid>
    </Grid>
  );
}
