'use client';
import CameraAltIcon from '@mui/icons-material/CameraAlt'; // Ícone de câmera
import ComputerIcon from '@mui/icons-material/Computer';
import EditIcon from '@mui/icons-material/Edit'; // Ícone de caneta
import HomeIcon from '@mui/icons-material/Home';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Avatar, Box, Card, CardMedia, IconButton, Typography } from '@mui/material';
import { useState } from 'react';

interface CardImagemVetProps {
  id: string;
  coverImage?: string;
  profileImage?: string;
  name: string;
  badge?: string;
  location: string;
  attendanceType: 'domicilio' | 'online';
  isOwner: boolean;
  onSave: (updatedData: any) => void;
}

export default function CardImagemVet({
  id,
  coverImage,
  profileImage,
  name,
  badge,
  location,
  attendanceType,
  isOwner,
  onSave,
}: CardImagemVetProps) {
  const [isEditing, setIsEditing] = useState(false); // Controla o modo de edição

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  return (
    <Card sx={{ width: '100%', maxWidth: 800, margin: '0 auto', padding: 2, position: 'relative' }}>
      {/* Imagem de capa */}
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          height="200"
          image={coverImage || '/assets/images/default-cover.svg'}
          alt="Imagem de capa"
        />
        {isOwner && isEditing && (
          <IconButton sx={{ position: 'absolute', top: 8, right: 8 }} onClick={() => console.log('Alterar imagem de capa')}>
            <CameraAltIcon />
          </IconButton>
        )}
      </Box>

      {/* Avatar e informações principais */}
      <Box sx={{ position: 'relative', top: '-40px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Avatar
          alt={name}
          src={profileImage || '/assets/images/default-profile.svg'}
          sx={{ width: 120, height: 120, border: '3px solid white' }}
        />

        {isOwner && isEditing && (
          <IconButton sx={{ position: 'absolute', top: 80, right: 'calc(50% - 60px)' }} onClick={() => console.log('Alterar foto de perfil')}>
            <CameraAltIcon />
          </IconButton>
        )}

        {/* Nome e Badge */}
        <Typography variant="h5" sx={{ mt: 2, fontWeight: 'bold' }}>
          {name}
        </Typography>
        <Typography variant="subtitle1" sx={{ color: 'gray' }}>
          {badge || 'Nenhuma especialidade'}
        </Typography>

        {/* Localização e Tipo de Atendimento */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
          <LocationOnIcon fontSize="small" />
          <Typography variant="body2">{location}</Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
          {attendanceType === 'domicilio' ? (
            <HomeIcon fontSize="small" />
          ) : (
            <ComputerIcon fontSize="small" />
          )}
          <Typography variant="body2">
            {attendanceType === 'domicilio' ? 'Atendimento a Domicílio' : 'Atendimento Online'}
          </Typography>
        </Box>
      </Box>

      {isOwner && (
        <Box sx={{ textAlign: 'center', mt: 2 }}>
          <IconButton onClick={toggleEditMode}>
            <EditIcon />
          </IconButton>
        </Box>
      )}
    </Card>
  );
}
