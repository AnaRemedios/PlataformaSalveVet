import { useState } from 'react';
import { Box, Typography, IconButton, Button, Card, CardContent, CardMedia } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSession } from 'next-auth/react';

interface Certificate {
  name: string;
  url: string;
}

interface CardCertificadosVetProps {
  id: string;
  certificates: Certificate[];
  onSave: (updatedCertificates: Certificate[]) => void;
}

export default function CardCertificadosVet({ id, certificates, onSave }: CardCertificadosVetProps) {
  const { data: session } = useSession();
  const [isEditing, setIsEditing] = useState(false);
  const [certificatesList, setCertificatesList] = useState(certificates || []);
  const [newCertificate, setNewCertificate] = useState<File | null>(null);

  const isOwner = session?.user?.id === id;

  // Adiciona um novo certificado
  const handleAddCertificate = () => {
    if (newCertificate) {
      const newCert: Certificate = {
        name: newCertificate.name,
        url: URL.createObjectURL(newCertificate), // Simula o upload de arquivo, quando o backend estiver pronto isso será substituído
      };
      setCertificatesList([...certificatesList, newCert]);
      setNewCertificate(null);
    }
  };

  // Remove um certificado
  const handleRemoveCertificate = (index: number) => {
    const updatedList = certificatesList.filter((_, i) => i !== index);
    setCertificatesList(updatedList);
  };

  // Salva as alterações
  const handleSave = () => {
    onSave(certificatesList); // Chama a função de salvamento passada por props
    setIsEditing(false);
  };

  return (
    <Card sx={{ width: '100%', padding: 3, marginTop: 2 }}>
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
          Certificados
          {isOwner && (
            <IconButton onClick={() => setIsEditing(!isEditing)} sx={{ marginLeft: 2 }}>
              {isEditing ? <SaveIcon onClick={handleSave} /> : <EditIcon />}
            </IconButton>
          )}
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {certificatesList.length > 0 ? (
            certificatesList.map((cert, index) => (
              <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <CardMedia
                  component="img"
                  src={cert.url}
                  alt={cert.name}
                  sx={{ width: 80, height: 80, objectFit: 'cover', borderRadius: 1 }}
                />
                <Typography variant="body1">{cert.name}</Typography>
                {isEditing && (
                  <IconButton onClick={() => handleRemoveCertificate(index)}>
                    <DeleteIcon />
                  </IconButton>
                )}
              </Box>
            ))
          ) : (
            <Typography variant="body2">Nenhum certificado cadastrado.</Typography>
          )}
        </Box>

        {isEditing && (
          <Box sx={{ marginTop: 2 }}>
            <Button variant="outlined" component="label">
              Adicionar Certificado
              <input type="file" hidden accept="image/*" onChange={(e) => setNewCertificate(e.target.files?.[0] || null)} />
            </Button>
            {newCertificate && (
              <Button variant="contained" color="primary" sx={{ marginLeft: 2 }} onClick={handleAddCertificate}>
                Upload
              </Button>
            )}
          </Box>
        )}
      </CardContent>
    </Card>
  );
}
