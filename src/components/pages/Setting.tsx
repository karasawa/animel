import { memo } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Header from '../organisms/Header';
import ShareMenuDialog from '../organisms/ShareMenuDialog';
import HomeDrawer from '../organisms/HomeDrawer';

const drawerWidth = 240;

const Setting = memo(() => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Header />
      <ShareMenuDialog />
      <HomeDrawer />
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
});
export default Setting;
