import { Button, Box, Avatar } from '@mui/material';
import { useState } from 'react';

export default function UploadImage() {
  const [image, setImage] = useState<string | undefined>(undefined); // Alteração aqui

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string); // Lê o arquivo e define a imagem
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Avatar src={image} sx={{ width: 100, height: 100, mb: 2 }} /> {/* Use undefined em vez de null */}
      <Button variant="contained" component="label">
        Mudar Imagem
        <input type="file" hidden accept="image/*" onChange={handleImageUpload} />
      </Button>
    </Box>
  );
}
