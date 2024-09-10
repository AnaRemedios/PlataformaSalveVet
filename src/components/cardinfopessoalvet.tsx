'use client';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import { Box, Button, Card, CardContent, IconButton, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

interface CardInfoPessoalVetProps {
  id: string; // ID do veterinário
  bio?: string; // Biografia do veterinário
  services?: string[]; // Serviços prestados pelo veterinário
  isOwner: boolean; // Verifica se o usuário é o proprietário do perfil
  onSave: (updatedData: any) => void; // Função de salvamento
}

export default function CardInfoPessoalVet({
  id,
  bio = '',
  services = [],
  isOwner,
  onSave,
}: CardInfoPessoalVetProps) {
  const [isEditing, setIsEditing] = useState(false); // Estado para alternar entre edição e visualização
  const [formData, setFormData] = useState({
    bio,
    services: services.join(', '), // Converte array de serviços para string separada por vírgulas
    attendanceType: '', // Atualize isso com a lógica correta
  });

  useEffect(() => {
    setFormData({
      bio,
      services: services.join(', '), // Atualiza o estado local quando o componente for montado
      attendanceType: '', // Atualize isso com a lógica correta
    });
  }, [bio, services]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onSave(formData); // Chama a função de salvamento passada por props
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
              {isEditing ? <SaveIcon onClick={handleSave} /> : <EditIcon />}
            </IconButton>
          )}
        </Box>

        {/* Versão de Edição */}
        {isEditing ? (
          <Box component="form" mt={2}>
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
              Sobre:
            </Typography>
            <Typography variant="body1">{bio || 'Nenhuma informação disponível.'}</Typography>

            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 2 }}>
              Serviços Prestados:
            </Typography>
            <Typography variant="body1">
              {services && services.length > 0 ? services.join(', ') : 'Nenhum serviço cadastrado.'}
            </Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}
