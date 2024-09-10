'use client';
import { useVeterinarian } from '@/hook/useVeterinarian'; // Hook que busca os dados do veterinário
import { Card, CardContent, CardMedia, Typography, Box, Avatar, Button, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ComputerIcon from '@mui/icons-material/Computer';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CameraAltIcon from '@mui/icons-material/CameraAlt'; // Ícone de câmera
import EditIcon from '@mui/icons-material/Edit'; // Ícone de caneta
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react'; // Para verificar a sessão do usuário
import { useState } from 'react';

interface CardImagemVetProps {
  id: string; // ID do veterinário
}

export default function CardImagemVet({ id }: { id: string }) {
  const { data: veterinarian, isLoading, error } = useVeterinarian(id);
  const router = useRouter();
  const { data: session } = useSession(); // Obtém os dados da sessão do usuário
  const [isEditing, setIsEditing] = useState(false); // Controla o modo de edição

  // Verifica se o usuário logado é o próprio veterinário
  const isOwner = session?.user?.id === id;

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  if (error || !veterinarian) {
    return <div>Erro ao carregar os dados do veterinário.</div>;
  }

  // Função para alternar o modo de edição
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
          image={veterinarian.coverImage || '/assets/images/default-cover.svg'} // Imagem de capa simulada ou default
          alt="Imagem de capa"
        />
        {/* Ícone para trocar imagem de capa (aparece apenas no modo de edição) */}
        {isOwner && isEditing && (
          <IconButton
            sx={{ position: 'absolute', top: 8, right: 8 }}
            onClick={() => console.log('Alterar imagem de capa')}
          >
            <CameraAltIcon />
          </IconButton>
        )}
      </Box>

      {/* Avatar e informações principais */}
      <Box sx={{ position: 'relative', top: '-40px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Foto de perfil */}
        <Avatar
          alt={veterinarian.name}
          src={veterinarian.image || '/assets/images/default-profile.svg'}
          sx={{ width: 120, height: 120, border: '3px solid white' }} // Ajusta o tamanho e a borda da foto de perfil
        />

        {/* Ícone para trocar foto de perfil (aparece apenas no modo de edição) */}
        {isOwner && isEditing && (
          <IconButton
            sx={{ position: 'absolute', top: 80, right: 'calc(50% - 60px)' }}
            onClick={() => console.log('Alterar foto de perfil')}
          >
            <CameraAltIcon />
          </IconButton>
        )}

        {/* Nome e Badge */}
        <Typography variant="h5" sx={{ mt: 2, fontWeight: 'bold' }}>
          {veterinarian.name}
        </Typography>
        <Typography variant="subtitle1" sx={{ color: 'gray' }}>
          {veterinarian.badge}
        </Typography>

        {/* Localização e Tipo de Atendimento */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
          <LocationOnIcon fontSize="small" />
          <Typography variant="body2">{veterinarian.location}</Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
          {veterinarian.attendanceType === 'domicilio' ? (
            <HomeIcon fontSize="small" />
          ) : (
            <ComputerIcon fontSize="small" />
          )}
          <Typography variant="body2">
            {veterinarian.attendanceType === 'domicilio' ? 'Atendimento a Domicílio' : 'Atendimento Online'}
          </Typography>
        </Box>
      </Box>

      {/* Botão para "Fale com este profissional" */}
      <Box sx={{ textAlign: 'center', mt: 3 }}>
        <Button variant="contained" color="primary" onClick={() => router.push(`/contato/${veterinarian.id}`)}>
          Fale com este profissional
        </Button>
      </Box>

      {/* Ícone para editar o perfil (aparece apenas se o usuário for o proprietário do perfil) */}
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
