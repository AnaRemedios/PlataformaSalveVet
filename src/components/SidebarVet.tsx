import { Drawer, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ChatIcon from '@mui/icons-material/Chat';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { useState } from 'react';

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <Drawer
      variant="permanent"
      open={sidebarOpen}
      sx={{
        width: sidebarOpen ? 240 : 60,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: sidebarOpen ? 240 : 60,
          boxSizing: 'border-box',
          transition: 'width 0.3s',
        },
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'center', padding: '16px' }}>
        <IconButton onClick={toggleSidebar}>
          <MenuIcon />
        </IconButton>
      </div>

      <div>
        <IconButton><DashboardIcon /></IconButton>
        <IconButton><AccountCircleIcon /></IconButton>
        <IconButton><MedicalServicesIcon /></IconButton>
        <IconButton><CalendarMonthIcon /></IconButton>
        <IconButton><AttachMoneyIcon /></IconButton>
        <IconButton><ChatIcon /></IconButton>
        <IconButton><PersonAddIcon /></IconButton>
      </div>
    </Drawer>
  );
}
