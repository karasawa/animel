import { memo, useState } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Header from '../organisms/Header';
import ShareMenuDialog from '../organisms/ShareMenuDialog';
import HomeDrawer from '../organisms/HomeDrawer';
import SnackBar from '../atoms/SnackBar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import NotificationsOffIcon from '@mui/icons-material/NotificationsOff';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

const drawerWidth = 240;

const Setting = memo(() => {
    const [motivation, setMotivation] = useState(false);
    const [notification, setNotification] = useState(false);

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
        <SnackBar />
        <Box>
        <Typography sx={{fontSize: 20 }}>設定</Typography>
        <Box>
          <List>
            <ListItem>
              <ListItemIcon>
                {notification ? <NotificationsActiveIcon/> : <NotificationsOffIcon />}
              </ListItemIcon>
              <ListItemText primary="Notification" />
              <ListItemSecondaryAction>
                <Switch
                    onChange={() => setNotification(!notification)}
                />
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                {motivation ? <SentimentVerySatisfiedIcon /> : <SentimentVeryDissatisfiedIcon />}
              </ListItemIcon>
              <ListItemText primary="やる気スイッチ" />
              <ListItemSecondaryAction>
                <Switch
                    onChange={() => setMotivation(!motivation)}
                />
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </Box>
        </Box>        
      </Box>
    </Box>
  );
});
export default Setting;
