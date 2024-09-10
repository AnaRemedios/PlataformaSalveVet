'use client';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import { Box, Button, IconButton, TextField, Typography } from '@mui/material';
import { useSession } from 'next-auth/react';
import { useState } from 'react';

interface ProfessionalExperience {
  title: string;
  company: string;
  period: string;
  description: string;
}

interface CardExperienciaProfissionalVetProps {
  id: string; // ID do veterinário
  professionalExperience: ProfessionalExperience[]; // Experiência profissional
  isOwner: boolean; // Indica se é o proprietário
  onSave: (updatedExperience: ProfessionalExperience[]) => void; // Função de salvar as atualizações
}

export default function CardExperienciaProfissionalVet({
  id,
  professionalExperience,
  isOwner,
  onSave,
}: CardExperienciaProfissionalVetProps) {
  const { data: session } = useSession();
  const [isEditing, setIsEditing] = useState(false);
  const [experience, setExperience] = useState<ProfessionalExperience[]>(professionalExperience);

  const handleSave = () => {
    setIsEditing(false);
    onSave(experience); // Chama a função de salvamento passada por props
  };

  const handleExperienceChange = (index: number, field: keyof ProfessionalExperience, value: string) => {
    const updatedExperience = [...experience];
    updatedExperience[index][field] = value;
    setExperience(updatedExperience);
  };

  return (
    <Box sx={{ padding: 3, border: '1px solid #ccc', borderRadius: 2, marginTop: 2 }}>
      <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
        Experiência Profissional
        {isOwner && (
          <IconButton onClick={() => setIsEditing(!isEditing)} sx={{ marginLeft: 2 }}>
            {isEditing ? <SaveIcon onClick={handleSave} /> : <EditIcon />}
          </IconButton>
        )}
      </Typography>

      {experience.length > 0 ? (
        experience.map((exp, index) => (
          <Box key={index} sx={{ marginBottom: 2 }}>
            {isEditing ? (
              <>
                <TextField
                  label="Título"
                  value={exp.title}
                  onChange={(e) => handleExperienceChange(index, 'title', e.target.value)}
                  fullWidth
                  sx={{ marginBottom: 1 }}
                />
                <TextField
                  label="Empresa"
                  value={exp.company}
                  onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
                  fullWidth
                  sx={{ marginBottom: 1 }}
                />
                <TextField
                  label="Período"
                  value={exp.period}
                  onChange={(e) => handleExperienceChange(index, 'period', e.target.value)}
                  fullWidth
                  sx={{ marginBottom: 1 }}
                />
                <TextField
                  label="Descrição"
                  value={exp.description}
                  onChange={(e) => handleExperienceChange(index, 'description', e.target.value)}
                  fullWidth
                  multiline
                  rows={3}
                />
              </>
            ) : (
              <>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                  {exp.title}
                </Typography>
                <Typography variant="body1">{exp.company}</Typography>
                <Typography variant="body2" sx={{ color: 'gray' }}>
                  {exp.period}
                </Typography>
                <Typography variant="body2" sx={{ marginTop: 1 }}>
                  {exp.description}
                </Typography>
              </>
            )}
          </Box>
        ))
      ) : (
        <Typography variant="body2">Nenhuma experiência profissional cadastrada.</Typography>
      )}

      {isEditing && (
        <Button variant="contained" color="primary" onClick={handleSave} sx={{ marginTop: 2 }}>
          Salvar
        </Button>
      )}
    </Box>
  );
}
