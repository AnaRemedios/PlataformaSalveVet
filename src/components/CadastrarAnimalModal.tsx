import { useState } from 'react';
import { Dialog, DialogTitle, Box, TextField, Button, Typography, Avatar } from '@mui/material';
import Image from 'next/image'; // Usando o componente Image do Next.js para otimização

export default function CadastrarAnimalModal({ open, onClose }: any) {
  const [imagePreview, setImagePreview] = useState<string | null>(null); // Para armazenar a imagem de preview
  const [name, setName] = useState<string>(''); // Nome do animal
  const [species, setSpecies] = useState<string>(''); // Espécie do animal
  const [breed, setBreed] = useState<string>(''); // Raça do animal
  const [age, setAge] = useState<string>(''); // Idade do animal

  // Função para manipular o upload da imagem
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string); // Definindo a visualização da imagem
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    // Aqui você pode fazer a lógica de salvar os dados
    console.log({ name, species, breed, age, imagePreview });
    // Fechar o modal após salvar
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Cadastrar Animal</DialogTitle>
      
      <Box sx={{ p: 3 }}>
        {/* Exibir a imagem ou um Avatar padrão */}
        {imagePreview ? (
          <Image
            src={imagePreview}
            alt="Preview do Animal"
            width={100}
            height={100}
            style={{ borderRadius: '50%', objectFit: 'cover' }}
          />
        ) : (
          <Avatar sx={{ width: 100, height: 100, mb: 2 }}>Sem Imagem</Avatar>
        )}
        
        {/* Botão para upload da imagem */}
        <Button
          variant="contained"
          component="label"
          sx={{ display: 'block', margin: '10px auto' }}
        >
          Mudar Imagem
          <input
            type="file"
            hidden
            accept="image/*"
            onChange={handleImageUpload}
          />
        </Button>
        
        {/* Inputs para nome, espécie, raça e idade */}
        <TextField
          label="Nome"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ mb: 2 }}
        />
        
        <TextField
          label="Espécie"
          fullWidth
          value={species}
          onChange={(e) => setSpecies(e.target.value)}
          sx={{ mb: 2 }}
        />
        
        <TextField
          label="Raça"
          fullWidth
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
          sx={{ mb: 2 }}
        />
        
        <TextField
          label="Idade"
          fullWidth
          value={age}
          onChange={(e) => setAge(e.target.value)}
          sx={{ mb: 2 }}
        />
        
        {/* Botão para salvar */}
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSubmit}
        >
          Salvar
        </Button>
      </Box>
    </Dialog>
  );
}
