'use client';
import { useState } from 'react';
import { Box, Card, CardContent, Typography, TextField, Button, IconButton } from '@mui/material';
import { Edit, Save, Add } from '@mui/icons-material';
import { useSession } from 'next-auth/react';

interface CardFormacaoAcademicaVetProps {
  id: string;
  academicBackground?: string[]; // Lista de formações acadêmicas
  onSave: (newFormacao: string[]) => void; // Função para salvar alterações
}

export default function CardFormacaoAcademicaVet({
  id,
  academicBackground = [],
  onSave,
}: CardFormacaoAcademicaVetProps) {
  const { data: session } = useSession();
  const [isEditing, setIsEditing] = useState(false);
  const [formacoes, setFormacoes] = useState(academicBackground); // Estado local para armazenar as formações

  // Verifica se o veterinário logado é o proprietário do perfil
  const isOwner = session?.user?.id === id;

  const handleSave = () => {
    onSave(formacoes); // Chama a função para salvar as alterações
    setIsEditing(false); // Sai do modo de edição
  };

  const handleAddFormacao = () => {
    setFormacoes([...formacoes, '']); // Adiciona uma nova formação vazia
  };

  const handleEditFormacao = (index: number, value: string) => {
    const newFormacoes = [...formacoes];
    newFormacoes[index] = value;
    setFormacoes(newFormacoes);
  };

  return (
    <Card sx={{ width: '100%', maxWidth: 800, margin: '0 auto', padding: 2, position: 'relative' }}>
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
          Formação Acadêmica
        </Typography>

        {/* Exibição de formação acadêmica ou modo de edição */}
        {isEditing ? (
          <Box>
            {formacoes.map((formacao, index) => (
              <TextField
                key={index}
                label={`Formação ${index + 1}`}
                value={formacao}
                onChange={(e) => handleEditFormacao(index, e.target.value)}
                fullWidth
                sx={{ mb: 2 }}
              />
            ))}

            <IconButton onClick={handleAddFormacao} sx={{ mb: 2 }}>
              <Add /> Adicionar Formação
            </IconButton>

            <Button variant="contained" color="primary" onClick={handleSave}>
              <Save /> Salvar
            </Button>
          </Box>
        ) : (
          <Box>
            {formacoes.length > 0 ? (
              formacoes.map((formacao, index) => (
                <Typography key={index} variant="body1" sx={{ marginBottom: 1 }}>
                  {formacao}
                </Typography>
              ))
            ) : (
              <Typography variant="body2" sx={{ color: 'gray' }}>
                Nenhuma formação cadastrada.
              </Typography>
            )}
          </Box>
        )}

        {/* Botão de edição se o usuário for o dono do perfil */}
        {isOwner && !isEditing && (
          <Box sx={{ textAlign: 'right', marginTop: 2 }}>
            <IconButton onClick={() => setIsEditing(true)}>
              <Edit /> Editar
            </IconButton>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}
