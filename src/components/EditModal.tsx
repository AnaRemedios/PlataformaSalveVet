import { Modal, Box, Button, TextField } from '@mui/material';

const modalStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

export default function EditModal({ open, handleClose, title, fields }: any) {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={modalStyle}>
        <h2>{title}</h2>
        <form>
          {fields.map((field: any, index: number) => (
            <TextField
              key={index}
              label={field.label}
              defaultValue={field.value}
              fullWidth
              sx={{ mt: 2 }}
            />
          ))}
          <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={handleClose}>
            Salvar
          </Button>
        </form>
      </Box>
    </Modal>
  );
}
