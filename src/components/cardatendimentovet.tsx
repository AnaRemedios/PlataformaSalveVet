import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import { Box, Button, Card, CardContent, IconButton, List, ListItem, ListItemText, TextField, Typography } from '@mui/material';
import { useState } from 'react';

interface CardAtendimentoVetProps {
  id: string;
  serviceRegions: string[];
  serviceHours: string[];
  onSave: (updatedRegions: string[], updatedHours: string[]) => void;
  isOwner: boolean;
}

export default function CardAtendimentoVet({
  id,
  serviceRegions,
  serviceHours,
  onSave,
  isOwner,
}: CardAtendimentoVetProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [regions, setRegions] = useState(serviceRegions);
  const [hours, setHours] = useState(serviceHours);
  const [newRegion, setNewRegion] = useState('');
  const [newHour, setNewHour] = useState('');

  const handleAddRegion = () => {
    if (newRegion) {
      setRegions([...regions, newRegion]);
      setNewRegion('');
    }
  };

  const handleAddHour = () => {
    if (newHour) {
      setHours([...hours, newHour]);
      setNewHour('');
    }
  };

  const handleSave = () => {
    onSave(regions, hours);
    setIsEditing(false);
  };

  return (
    <Card sx={{ display: 'flex', width: '100%', maxWidth: 800, margin: '0 auto', padding: 2 }}>
      {/* Coluna Esquerda: Regiões e Horários */}
      <CardContent sx={{ flex: 1 }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
          Locais e Horários de Atendimento
        </Typography>

        {!isEditing ? (
          <>
            <Typography variant="h6" sx={{ marginBottom: 1 }}>Regiões de Atendimento:</Typography>
            <List>
              {regions.map((region, index) => (
                <ListItem key={index}>
                  <ListItemText primary={region} />
                </ListItem>
              ))}
            </List>

            <Typography variant="h6" sx={{ marginTop: 2 }}>Horários de Atendimento:</Typography>
            <List>
              {hours.map((hour, index) => (
                <ListItem key={index}>
                  <ListItemText primary={hour} />
                </ListItem>
              ))}
            </List>

            <IconButton onClick={() => setIsEditing(true)} sx={{ marginTop: 2 }}>
              <EditIcon />
            </IconButton>
          </>
        ) : (
          <>
            <Typography variant="h6" sx={{ marginBottom: 1 }}>Editar Regiões de Atendimento:</Typography>
            <List>
              {regions.map((region, index) => (
                <ListItem key={index}>
                  <ListItemText primary={region} />
                  <IconButton onClick={() => setRegions(regions.filter((_, i) => i !== index))}>
                    <DeleteIcon />
                  </IconButton>
                </ListItem>
              ))}
            </List>

            <TextField
              label="Adicionar Região"
              value={newRegion}
              onChange={(e) => setNewRegion(e.target.value)}
              sx={{ marginBottom: 2 }}
            />
            <IconButton onClick={handleAddRegion}>
              <AddIcon />
            </IconButton>

            <Typography variant="h6" sx={{ marginTop: 2 }}>Editar Horários de Atendimento:</Typography>
            <List>
              {hours.map((hour, index) => (
                <ListItem key={index}>
                  <ListItemText primary={hour} />
                  <IconButton onClick={() => setHours(hours.filter((_, i) => i !== index))}>
                    <DeleteIcon />
                  </IconButton>
                </ListItem>
              ))}
            </List>

            <TextField
              label="Adicionar Horário"
              value={newHour}
              onChange={(e) => setNewHour(e.target.value)}
              sx={{ marginBottom: 2 }}
            />
            <IconButton onClick={handleAddHour}>
              <AddIcon />
            </IconButton>

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2 }}>
              <Button variant="contained" onClick={handleSave} startIcon={<SaveIcon />}>
                Salvar
              </Button>
            </Box>
          </>
        )}
      </CardContent>

      {/* Coluna Direita: Google Maps */}
      <Box sx={{ flex: 1, paddingLeft: 2 }}>
        <Typography variant="h6" sx={{ marginBottom: 1 }}>Localização no Mapa:</Typography>
        <iframe
          width="100%"
          height="200"
          loading="lazy"
          src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${regions[0]}`} // Substituir o valor YOUR_GOOGLE_MAPS_API_KEY pelo valor da chave API real.
        ></iframe>
      </Box>
    </Card>
  );
}
