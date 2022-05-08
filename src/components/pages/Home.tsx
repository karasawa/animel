import { memo } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Header from '../organisms/Header';
import FormField from '../molecules/FormField';
import ItemList from '../organisms/ItemList';
import SnackBar from '../atoms/SnackBar';
import GrainIcon from '@mui/icons-material/Grain';
import ShareMenuDialog from '../organisms/ShareMenuDialog';
import HomeDrawer from '../organisms/HomeDrawer';

const drawerWidth = 240;

const Home = memo(() => {
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
});
export default Home;
