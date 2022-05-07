import { memo, useState } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Header from '../organisms/Header';
import SideMenu from '../organisms/SideMenu';
import FormField from '../molecules/FormField';
import ItemList from '../organisms/ItemList';
import SnackBar from '../atoms/SnackBar';
import GrainIcon from '@mui/icons-material/Grain';

const drawerWidth = 240;

interface Props {
  window?: () => Window;
}

export default function Home(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <SideMenu />
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Header />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Box>            
                <GrainIcon sx={{fontSize: 85, color: '#6c1df2'}} />
            </Box>
            <Box>
                <Typography sx={{fontSize: 80, color: '#6c1df2'}} >
                    Animel
                </Typography>
            </Box>
        </Box>    
        <Typography variant="h5" component="h2" sx={{color: '#6c1df9'}} >アニメなにみる？</Typography>
        <FormField />
        <ItemList />
        <SnackBar />
      </Box>
    </Box>
  );
}
