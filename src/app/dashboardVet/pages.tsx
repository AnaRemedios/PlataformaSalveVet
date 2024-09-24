import { useState } from 'react';
import { Button, Typography } from '@mui/material';
import CompleteCadastroModal from '@/components/CompleteCadastroModalVet';
import CardGrid from '@/components/CardGridVet';
import Sidebar from '@/components/SidebarVet';

export default function Dashboard() {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Dashboard Content */}
      <div style={{ flexGrow: 1, padding: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h4">Dashboard</Typography>
          <Button variant="contained" color="secondary" onClick={handleOpenModal}>
            COMPLETE O SEU CADASTRO
          </Button>
        </div>

        {/* Cards Section */}
        <CardGrid />
      </div>

      {/* Modal de Completar Cadastro */}
      <CompleteCadastroModal open={openModal} handleClose={handleCloseModal} />
    </div>
  );
}
