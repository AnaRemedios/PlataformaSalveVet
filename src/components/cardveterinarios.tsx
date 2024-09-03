'use client';
import { useVeterinarian } from '@/hook/useVeterinarian'; // Importe o hook
import ComputerIcon from '@mui/icons-material/Computer';
import EditIcon from '@mui/icons-material/Edit';
import HomeIcon from '@mui/icons-material/Home';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Box, Card, CardContent, CardMedia, Chip, Typography } from '@mui/material';
import Link from 'next/link';

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
      <Card
        sx={{
          maxWidth: 200,
          cursor: 'pointer',
          textDecoration: 'none',
          border: '2px solid #1EE0CC',
          borderRadius: '8px',
          padding: '16px', // Adiciona padding interno ao Card
          boxShadow: 3,
          transition: 'transform 0.3s, box-shadow 0.3s, border-color 0.3s',
          '&:hover': {
            boxShadow: 6,
            background: '#E2FBF9',
            transform: 'scale(1.05)',
          },
          margin: '0 8px', // Adiciona margem para afastar o card das laterais do carrossel
        }}
      >
        <CardMedia
          component="img"
          alt={`${veterinarian.name}'s profile picture`}
          sx={{ height: 150, width: '93%', margin: '0 auto', paddingTop: '10px' }}
          image={veterinarian.image || '/assets/images/default-profile.svg'} // imagem padrão ou do veterinário
        />
        <CardContent >
          {/* Nome do Veterinário */}
          <Typography gutterBottom variant="h6" component="div">
            {veterinarian.name}
          </Typography>

          {/* Chip (badge) */}
          <Chip label={veterinarian.badge || 'Especialidade'}
            variant="outlined"
            sx={{
              fontSize: 10, // Tamanho do texto menor
              height: 20,   // Altura menor
              padding: '0 2px', // Ajuste de padding
              borderColor: '#1EE0CC', // Cor da borda
              borderWidth: '2px', // Espessura da borda
            }}
          />

          {/* Localidade */}
          <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
            <LocationOnIcon sx={{ mr: 1, fontSize: 18 }} />
            <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: 12 }}>
              {veterinarian.location}
            </Typography>
          </Box>

          {/* Atendimento (domicílio ou online) */}
          <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
            {veterinarian.attendanceType === 'domicilio' ? (
              <HomeIcon sx={{ mr: 1, fontSize: 18 }} />
            ) : (
              <ComputerIcon sx={{ mr: 1, fontSize: 18 }} />
            )}
            <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: 12 }}>
              {veterinarian.attendanceType === 'domicilio' ? 'Atendimento a Domicílio' : 'Atendimento Online'}
            </Typography>
          </Box>

          {/* Texto de Apresentação */}
          <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
            <EditIcon sx={{ mr: 1, fontSize: 18 }} />
            <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: 12 }}>
              {veterinarian.presentationText || 'Nenhuma apresentação disponível.'}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Link>

  );
}
