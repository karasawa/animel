import { memo } from "react";
import ShareMenuButton from '../atoms/ShareMenuButton';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ShareMenuDialog from "../molecules/ShareMenuDialog";
import GrainIcon from '@mui/icons-material/Grain';

const Header = memo(() => {
  const drawerWidth = 240;

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        background: '#6c1df2',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }} >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          <GrainIcon sx={{m: -0.3, fontSize: 20}}/>
          Animel
        </Typography>
        <ShareMenuButton />
        <ShareMenuDialog />
      </Toolbar>
    </AppBar>
);
});
export default Header;