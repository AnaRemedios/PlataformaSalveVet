'use client';
import { useState } from 'react';
import { useSession } from 'next-auth/react'; // Autenticação para verificar se é o dono do perfil
import { useVeterinarian } from '@/hook/useVeterinarian'; // Hook que busca os dados do veterinário
import { Box, Card, CardContent, Typography, TextField, Button, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';

interface CardInfoPessoalVetProps {
  id: string; // ID do veterinário
}

export default function CardInfoPessoalVet({ id }: { id: string }) {
  const { data: session } = useSession(); // Verifica sessão para saber se é o veterinário logado
  const { data: veterinarian, isLoading, error } = useVeterinarian(id);
  const [isEditing, setIsEditing] = useState(false); // Estado para alternar entre edição e visualização
  const [formData, setFormData] = useState({
    bio: veterinarian?.bio || '',
    services: veterinarian?.services?.join(', ') || '', // Converte array de serviços para string separada por vírgulas ou define um valor padrão
    attendanceType: veterinarian?.attendanceType || '',
  });

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  if (error || !veterinarian) {
    return <div>Erro ao carregar os dados do veterinário.</div>;
  }

  // Verifica se o usuário logado é o dono do perfil
  const isOwner = session?.user?.id === id;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    // Lógica para salvar as alterações (pode chamar um hook de atualização aqui)
    console.log('Dados atualizados:', formData);
    setIsEditing(false); // Volta para a visualização após salvar
  };

  return (
    <Card sx={{ width: '100%', maxWidth: 800, margin: '0 auto', padding: 2, position: 'relative' }}>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
            Informações Pessoais
          </Typography>

          {/* Exibe o botão de editar apenas para o dono do perfil */}
          {isOwner && (
            <IconButton onClick={() => setIsEditing(!isEditing)}>
              {isEditing ? <SaveIcon /> : <EditIcon />}
            </IconButton>
          )}
        </Box>

        {/* Versão de Edição */}
        {isEditing ? (
          <Box component="form" mt={2}>
            <TextField
              fullWidth
              name="attendanceType"
              label="Forma de Atendimento"
              value={formData.attendanceType}
              onChange={handleInputChange}
              margin="normal"
            />
            <TextField
              fullWidth
              name="bio"
              label="Sobre"
              value={formData.bio}
              onChange={handleInputChange}
              margin="normal"
              multiline
              rows={4}
            />
            <TextField
              fullWidth
              name="services"
              label="Serviços Prestados (separados por vírgulas)"
              value={formData.services}
              onChange={handleInputChange}
              margin="normal"
            />
            <Button variant="contained" color="primary" onClick={handleSave} sx={{ mt: 2 }}>
              Salvar
            </Button>
          </Box>
        ) : (
          // Versão de Visualização
          <Box mt={2}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 2 }}>
              Forma de Atendimento:
            </Typography>
            <Typography variant="body1">
              {veterinarian.attendanceType === 'domicilio' ? 'Atendimento a Domicílio' : 'Atendimento Online'}
            </Typography>

            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 2 }}>
              Sobre:
            </Typography>
            <Typography variant="body1">{veterinarian.bio || 'Nenhuma informação disponível.'}</Typography>

            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 2 }}>
              Serviços Prestados:
            </Typography>
            <Typography variant="body1">
              {veterinarian.services && veterinarian.services.length > 0
                ? veterinarian.services.join(', ')
                : 'Nenhum serviço cadastrado.'}
            </Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}
