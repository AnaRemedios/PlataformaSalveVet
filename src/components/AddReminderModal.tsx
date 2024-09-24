import { Dialog, DialogTitle, Box, TextField, MenuItem, Button } from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { useState } from 'react';

export default function AddReminderModal({ open, onClose }: any) {
  const [category, setCategory] = useState<string>(''); // Define o tipo de category como string
  const [reminderDate, setReminderDate] = useState<Date | null>(null); // Ajuste do tipo para aceitar `null` como valor

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Adicionar Lembrete</DialogTitle>

      <Box sx={{ p: 2 }}>
        <TextField
          select
          label="Selecione uma categoria"
          value={category}
          onChange={(e) => setCategory(e.target.value)} // e.target.value é uma string
          fullWidth
          sx={{ mb: 2 }}
        >
          <MenuItem value="Vacina">Vacina</MenuItem>
          <MenuItem value="Consulta">Consulta</MenuItem>
        </TextField>

        <TextField label="Nome do Lembrete" fullWidth sx={{ mb: 2 }} />
        
        <TextField label="Descrição" fullWidth multiline rows={3} sx={{ mb: 2 }} />

        <DateTimePicker
          label="Data e hora do lembrete"
          value={reminderDate} // Pode ser `null` para evitar o erro
          onChange={(newValue) => setReminderDate(newValue)} // Tipagem automática para `newValue`
          renderInput={(params: any) => <TextField {...params} fullWidth />} // Permitir `any` para evitar erro de tipagem
        />

        <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Salvar
        </Button>
      </Box>
    </Dialog>
  );
}
