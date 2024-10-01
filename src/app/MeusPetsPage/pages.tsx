import { Box, Button, Dialog, Fab, Grid, Avatar, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import PetCard from '@/components/PetCard';
import AllPetsModal from '@/components/AllPetsModal';
import RegisterPetModal from '@/components/RegisterPetModal';
import PetDetailsModal from '@/components/PetDetailsModal';
import CadastrarAnimalModal from '@/components/CadastrarAnimalModal';

export default function MeusPetsPage() {
  const [openAllPets, setOpenAllPets] = useState(false);
  const [openRegisterModal, setOpenRegisterModal] = useState(false);
  const [openPetDetails, setOpenPetDetails] = useState(false);
  const [selectedPet, setSelectedPet] = useState(null);

  // Simulação de dados dos pets
  const pets = [
    { id: 1, name: 'Mingau', image: '/mingau.jpg' },
    { id: 2, name: 'Pongo', image: '/pongo.jpg' },
    { id: 3, name: 'Vagabundo', image: '/vagabundo.jpg' },
    { id: 4, name: 'Cesar', image: '/cesar.jpg' }
  ];

  const handleOpenPetDetails = (pet: any) => {
    setSelectedPet(pet);
    setOpenPetDetails(true);
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4">Meus Pets</Typography>

      {/* Grid de Cards dos Pets */}
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {pets.map((pet) => (
          <Grid item xs={3} key={pet.id}>
            <PetCard pet={pet} onClick={() => handleOpenPetDetails(pet)} />
          </Grid>
        ))}
      </Grid>

      {/* Botão de Cadastrar Animal */}
      <Button
        variant="contained"
        color="secondary"
        sx={{ mt: 4 }}
        onClick={() => setOpenRegisterModal(true)}
      >
        Cadastrar Animal
      </Button>

      {/* Floating Action Button (FAB) */}
      <Fab
        color="primary"
        aria-label="add"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
        onClick={() => setOpenAllPets(true)}
      >
        <AddIcon />
      </Fab>

      {/* Modal de Todos os Animais Cadastrados */}
      <AllPetsModal open={openAllPets} onClose={() => setOpenAllPets(false)} />

       {/* Modal de Cadastro de Animal */}
       <CadastrarAnimalModal
        open={openRegisterModal}
        onClose={() => setOpenRegisterModal(false)}
      />

      {/* Modal de Detalhes do Animal */}
      {selectedPet && (
        <PetDetailsModal
          open={openPetDetails}
          onClose={() => setOpenPetDetails(false)}
          pet={selectedPet}
        />
      )}
    </Box>
  );
}
