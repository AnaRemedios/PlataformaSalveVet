import { Button, TextField, Box } from '@mui/material';
import { useState } from 'react';

export default function InfoFormTutor({ openEditModal, openAddressModal, openContactModal }: any) {
  return (
    <Box sx={{ display: 'grid', gap: 2 }}>
      <Box>
        <TextField label="Nome" defaultValue="Andrew Smith" fullWidth InputProps={{ readOnly: true }} />
        <TextField label="Sobrenome" defaultValue="Smith" fullWidth InputProps={{ readOnly: true }} sx={{ mt: 2 }} />
      </Box>
      <TextField label="CPF" defaultValue="123.456.789-00" fullWidth InputProps={{ readOnly: true }} />
      <TextField label="RG" defaultValue="MG-12.345.678" fullWidth InputProps={{ readOnly: true }} />

      <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
        <TextField label="CEP" defaultValue="12345-678" fullWidth InputProps={{ readOnly: true }} />
        <TextField label="Endereço" defaultValue="Rua Exemplo, 123" fullWidth InputProps={{ readOnly: true }} />
      </Box>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <TextField label="Número" defaultValue="123" fullWidth InputProps={{ readOnly: true }} />
        <TextField label="Complemento" defaultValue="Apto 101" fullWidth InputProps={{ readOnly: true }} />
      </Box>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <TextField label="Cidade/UF" defaultValue="Belo Horizonte/MG" fullWidth InputProps={{ readOnly: true }} />
        <Button variant="outlined" onClick={openAddressModal}>Alterar Endereço</Button>
      </Box>

      <Box sx={{ display: 'flex', gap: 2 }}>
        <TextField label="E-mail" defaultValue="andrews@example.com" fullWidth InputProps={{ readOnly: true }} />
        <TextField label="WhatsApp" defaultValue="(31) 99999-9999" fullWidth InputProps={{ readOnly: true }} />
      </Box>
      <Button variant="outlined" onClick={openContactModal}>Alterar Contato</Button>
    </Box>
  );
}
