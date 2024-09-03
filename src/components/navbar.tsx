import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Image from 'next/image';
import ButtonEntrar from './buttonentrar';


const pages = ['Home', 'Sobre Nós', 'Serviços', 'Como Funciona', 'Blog'];

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box 
    sx={{ display:'flex', justifyContent:'center', p:4,}}
    >
    <AppBar 
     position="static" 
     sx={{ 
     backgroundColor: '#F4F1E9', // Cor de fundo da AppBar
     width: '80%', // Largura da AppBar
     borderRadius: 2, // Bordas arredondadas para um visual mais agradável
     boxShadow: 3, // Adiciona uma leve sombra
  }}>

      <Container maxWidth="xl">
        <Toolbar disableGutters >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Image
          src="/assets/images/logo.svg" // Caminho para imagem na pasta public
          alt="Logo da Empresa" // Texto alternativo para acessibilidade
          width={180} // Largura 
          height={80} // Altura 
          style={{ display: 'block' }}      
           />
           </Box>
            
         {/* Ícone do Menu (visível apenas em telas pequenas) */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{color:'black'}} // Cor do ícone
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          </Typography>

           {/* Menu Centralizado (visível apenas em telas grandes) */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', alignItems: 'center'   }}>
            {pages.map((page) => (
              <Button
              key={page}
              onClick={handleCloseNavMenu}
              sx={{
                mx: 2, // Adiciona margem horizontal (aumenta o espaço entre os itens) 
                my: 2,
                color: 'black',
                display: 'block',
                fontFamily: 'montserrat',
                fontWeight: 500,
                fontSize: '1.2rem',
                '&:hover': {
                  textDecoration: 'underline', // Adiciona sublinhado no hover
                },
              }}
            >
              {page}
            </Button>
            ))}
          </Box>

          <ButtonEntrar variant="contained" color="primary" >
           Entrar
         </ButtonEntrar>

        </Toolbar>
      </Container>
    </AppBar>

    </Box>
   
  ); } 
