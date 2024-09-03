import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import EspecialidadesEServicos from './especialidadeseservicos';
import Cidades from './cidades';
import SearchIcon from '@mui/icons-material/Search';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import ComputerIcon from '@mui/icons-material/Computer';

export default function CardBuscar() {
    //são usados para controlar se os botões de filtro "Domicilio" e "Online" estão selecionados ou não.
    const [isDomicilioSelected, setIsDomicilioSelected] = React.useState(false);
    const [isOnlineSelected, setIsOnlineSelected] = React.useState(false);
    
  return (
 <Box sx={{ 
        flexGrow: 1, p: 2, 
        border: '1px solid #ddd', 
        borderRadius: 2, 
        boxShadow: 2, 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', // Centraliza o conteúdo verticalmente
        textAlign: 'center',
        backgroundColor: '#1D7263',  
        color: '#ffffff',
        maxWidth: '1000px',
        justifyContent: 'center', // Centraliza o conteúdo horizontalmente
        margin: 'auto', // Centraliza o card na tela
        }}> 
      <Typography variant="h4" component="div" sx={{ mb: 2, fontFamily:'fraunces, serif' }}>
      Encontre veterinários perto de você!
      </Typography>

      <Box sx={{ display: 'flex', gap: 4, mb: 2, flexDirection: { xs: 'column', sm: 'row' }, }}>
          {/* Componentes de Especialidades e Serviços e Cidades */}
      <EspecialidadesEServicos />
      <Cidades />

          {/* Botão de Buscar */}
          <Button variant="contained" startIcon={<SearchIcon />} 
          sx={{ 
            mb: 2, 
            mt: 1, 
            backgroundColor: '#E2FBF9', // Cor de fundo 
            borderColor: '#E2FBF9', // Cor da borda
            color: '#000000', // Cor do texto
            '&:hover': {
              backgroundColor: '#1EE0CC', // Cor de fundo ao passar o mouse
              color: '#ffffff', // Cor do texto ao passar o mouse
            },
            
          }}
          >
        Buscar
      </Button>
      </Box>

      {/* Botões de Filtro: Domicilio e Online */}
      <Box sx={{ display: 'flex', gap: 2, }}>
        <Button
          variant={isDomicilioSelected ? 'contained' : 'outlined'}
          startIcon={<MedicalServicesIcon />} // Ícone de maleta de médico
          onClick={() => setIsDomicilioSelected(!isDomicilioSelected)}
          sx={{
            color: '#ffffff', // Cor do texto e ícone
            borderColor: isDomicilioSelected ? 'transparent' : '#1EE0CC', // Cor da borda em outlined
            backgroundColor: isDomicilioSelected ? '#1EE0CC' : 'transparent', // Cor de fundo em contained
            fontSize: { xs: '0.8rem', sm: '1rem' }, // Tamanho da fonte para telas pequenas
            padding: { xs: '4px 8px', sm: '8px 16px' }, // Padding para telas pequenas
            '&:hover': {
              backgroundColor: isDomicilioSelected ? '#1EE0CC' : 'rgba(30, 224, 204, 0.1)', // Cor ao passar o mouse
            },
          }}
        >
          Domicilio
        </Button>

        <Button
          variant={isOnlineSelected ? 'contained' : 'outlined'}
          startIcon={<ComputerIcon />} // Ícone de computador
          onClick={() => setIsOnlineSelected(!isOnlineSelected)}
          sx={{
            color: '#ffffff', // Cor do texto e ícone
            borderColor: isOnlineSelected ? 'transparent' : '#1EE0CC', // Cor da borda em outlined
            backgroundColor: isOnlineSelected ? '#1EE0CC' : 'transparent', // Cor de fundo em contained
            fontSize: { xs: '0.8rem', sm: '1rem' }, // Tamanho da fonte para telas pequenas
            padding: { xs: '4px 8px', sm: '8px 16px' }, // Padding para telas pequenas
            '&:hover': {
              backgroundColor: isOnlineSelected ? '#1EE0CC' : 'rgba(30, 224, 204, 0.1)', // Cor ao passar o mouse
            },
          }}
        >
          Online
        </Button>

        <Button variant="contained"
         sx={{
            color: '#ffffff', // Cor do texto e ícone
            backgroundColor: '#B40000',
            fontSize: { xs: '0.8rem', sm: '1rem' }, // Tamanho da fonte para telas pequenas
            padding: { xs: '4px 8px', sm: '8px 16px' }, // Padding para telas pequenas
            '&:hover': {
                backgroundColor: '#FF8686',    
              },
          }}
        >
            Urgência/Emergência
        </Button>

     </Box>

 </Box>
);
}
