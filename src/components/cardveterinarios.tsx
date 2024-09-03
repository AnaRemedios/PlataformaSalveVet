import * as React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Chip } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeIcon from '@mui/icons-material/Home';
import ComputerIcon from '@mui/icons-material/Computer';
import EditIcon from '@mui/icons-material/Edit';
import Link from 'next/link';
import { useVeterinarian } from '@/hook/useVeterinarian'; // Importe o hook

export default function CardVeterinarios({ id }: { id: string }) {
  const { data: veterinarian, isLoading, error } = useVeterinarian(id);

  if (isLoading) {
    return <div>Carregando...</div>; // Ou qualquer indicador de carregamento
  }

  if (error || !veterinarian) {
    return <div>Erro ao carregar os dados do veterinário.</div>; // Ou qualquer mensagem de erro
  }

  return (
    <Link href={`/veterinarios/${veterinarian.id}`} passHref>
      <Card sx={{ maxWidth: 345, cursor: 'pointer', textDecoration: 'none', '&:hover': { boxShadow: 6 } }}>
        <CardMedia
          component="img"
          alt={`${veterinarian.name}'s profile picture`}
          height="200"
          image={veterinarian.image || '/static/images/avatar/default-profile.png'} // Imagem do veterinário
        />
        <CardContent>
          {/* Nome do Veterinário */}
          <Typography gutterBottom variant="h5" component="div">
            {veterinarian.name}
          </Typography>

          {/* Chip */}
          <Chip label={veterinarian.badge || 'Especialidade'} variant="outlined" />

          {/* Localidade */}
          <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
            <LocationOnIcon sx={{ mr: 1 }} />
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {veterinarian.location}
            </Typography>
          </Box>

          {/* Atendimento (domicílio ou online) */}
          <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
            {veterinarian.attendanceType === 'domicilio' ? (
              <HomeIcon sx={{ mr: 1 }} />
            ) : (
              <ComputerIcon sx={{ mr: 1 }} />
            )}
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {veterinarian.attendanceType === 'domicilio' ? 'Atendimento a Domicílio' : 'Atendimento Online'}
            </Typography>
          </Box>

          {/* Texto de Apresentação */}
          <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
            <EditIcon sx={{ mr: 1 }} />
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {veterinarian.presentationText || 'Nenhuma apresentação disponível.'}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Link>
  );
}
