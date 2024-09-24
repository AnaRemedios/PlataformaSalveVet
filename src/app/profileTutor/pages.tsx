import { useState } from 'react';
import SidebarTutor from '@/components/SidebarTutor';
import InfoFormTutor from '@/components/InfoFormTutor';
import EditModal from '@/components/EditModal';
import ChangePasswordModal from '@/components/ChangePasswordModal';
import UploadImage from '@/components/UploadImage';
import { Button, Box, Typography } from '@mui/material';

export default function ProfileTutor() {
  // States para controlar abertura dos modais
  const [editOpen, setEditOpen] = useState(false);
  const [addressOpen, setAddressOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [passwordOpen, setPasswordOpen] = useState(false);

  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar do Tutor */}
      <SidebarTutor />

      <Box sx={{ flexGrow: 1, p: 4 }}>
        <Typography variant="h4">Perfil</Typography>

        {/* Seção de Upload de Imagem e Alteração de Senha */}
        <Box sx={{ display: 'flex', gap: 4, mt: 4 }}>
          <UploadImage />
          <Button variant="outlined" onClick={() => setPasswordOpen(true)}>
            Alterar Senha
          </Button>
        </Box>

        {/* Formulário de Informações Pessoais */}
        <Box sx={{ mt: 4 }}>
          <InfoFormTutor
            openEditModal={() => setEditOpen(true)}
            openAddressModal={() => setAddressOpen(true)}
            openContactModal={() => setContactOpen(true)}
          />
        </Box>

        {/* Modais de Edição */}
        <EditModal
          open={editOpen}
          handleClose={() => setEditOpen(false)}
          title="Editar Informações Pessoais"
          fields={[
            { label: "Nome", value: "Andrew Smith" },
            { label: "Sobrenome", value: "Smith" },
            { label: "CPF", value: "123.456.789-00" },
            { label: "RG", value: "MG-12.345.678" }
          ]}
        />

        <EditModal
          open={addressOpen}
          handleClose={() => setAddressOpen(false)}
          title="Editar Endereço"
          fields={[
            { label: "CEP", value: "12345-678" },
            { label: "Endereço", value: "Rua Exemplo, 123" },
            { label: "Número", value: "123" },
            { label: "Complemento", value: "Apto 101" }
          ]}
        />

        <EditModal
          open={contactOpen}
          handleClose={() => setContactOpen(false)}
          title="Editar Contato"
          fields={[
            { label: "E-mail", value: "andrews@example.com" },
            { label: "WhatsApp", value: "(31) 99999-9999" }
          ]}
        />

        {/* Modal de Alteração de Senha */}
        <ChangePasswordModal
          open={passwordOpen}
          handleClose={() => setPasswordOpen(false)}
        />
      </Box>
    </div>
  );
}
