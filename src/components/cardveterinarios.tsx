// componentes/CardVeterinarios.tsx
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

  console.log("Veterinarian ID:", veterinarian?.id);

  if (isLoading) {
    return <div>Carregando...</div>; //  indicador de carregamento
  }

  if (error || !veterinarian) {
    return <div>Erro ao carregar os dados do veterinário.</div>; // mensagem de erro
  }

  // Verifique se o veterinarian.id está disponível antes de renderizar o Link
  if (!veterinarian?.id) {
    return <div>Erro ao carregar os dados do veterinário. ID não encontrado.</div>;
  }

  return (

    <Link href={`/perfilveterinario/${veterinarian.id}`} passHref>
      <Card
        sx={{
          width: '100%', // Mantém o card com 100% da largura do contêiner
          maxWidth: 280,
          height: '100%', // Certifica que o card ocupa 100% da altura disponível
          cursor: 'pointer',
          textDecoration: 'none',
          border: '2px solid #1EE0CC',
          borderRadius: '8px',
          padding: '14px', // Adiciona padding interno ao Card
          boxShadow: 3,
          position: 'relative', // Garante que o z-index funcione
          zIndex: 1, // Z-index padrão
          transition: 'transform 0.3s, box-shadow 0.3s, border-color 0.3s',
          '&:hover': {
            boxShadow: 6,
            background: '#E2FBF9',
            transform: 'scale(1.05)',
            zIndex: 10, // Trazer o card para frente no hover
          },
          margin: '2% 12% 2% 12%', // Adiciona margem para afastar o card das laterais do carrossel
          display: 'flex',
          flexDirection: 'column', // Para alinhar os conteúdos verticalmente
        }}
      >
        <CardMedia
          component="img"
          alt={`${veterinarian.name}'s profile picture`}
          sx={{ height: 200, width: '100%', margin: '0 auto', paddingTop: '10px' }}
          image={veterinarian.image || '/assets/images/default-profile.svg'} // imagem padrão ou do veterinário
        />
        <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} >
          {/* Nome do Veterinário */}
          <Typography gutterBottom variant="h6" component="div" sx={{ textAlign: 'center' }} >
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
              marginTop: '8px', // Margem superior
              marginBottom: '8px', // Margem inferior
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
