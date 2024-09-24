import { useState } from 'react';
import { Button, Typography } from '@mui/material';
import SidebarTutor from '@/components/SidebarTutor';
import CardGridTutor from '@/components/CardGridTutor';
import CompleteCadastroModalTutor from '@/components/CompleteCadastroModalTutor';

export default function DashboardTutor() {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar do Tutor */}
      <SidebarTutor />

      {/* Dashboard Content */}
      <div style={{ flexGrow: 1, padding: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h4">Home</Typography>
          <Button variant="contained" color="secondary" onClick={handleOpenModal}>
            COMPLETE O SEU CADASTRO
          </Button>
        </div>

        {/* Cards Section */}
        <CardGridTutor />
      </div>

      {/* Modal de Completar Cadastro Tutor */}
      <CompleteCadastroModalTutor open={openModal} handleClose={handleCloseModal} />
    </div>
  );
}
