import { memo } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Header from '../organisms/Header';
import ShareMenuDialog from '../organisms/ShareMenuDialog';
import HomeDrawer from '../organisms/HomeDrawer';
import SnackBar from '../atoms/SnackBar';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const drawerWidth = 240;

const Introduction = memo(() => {
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
        <Typography sx={{fontSize: 30 }}>Animelについて</Typography>
        <Box>
            <Paper elevation={1} sx={{textAlign: 'left', padding: 2, m: 1}}>
                <Typography variant="h5" component="div">
                Animelとは
                </Typography>
                <Typography variant="subtitle2" component="div">
                今期のアニメから過去のアニメまで、情報を一覧表示するアプリ。各クールのアニメのタイトル・サブタイトル・ハッシュタグ・Twitter・公式サイトを一覧に表示します。2014年以降のアニメに対応しております。
                </Typography>
            </Paper>
            
            <Paper elevation={1} sx={{textAlign: 'left', padding: 2, m: 1}}>
                <Typography variant="h5" component="div">
                構成要素
                </Typography>
                <Typography variant="subtitle2" component="div">
                本アプリでは下記技術を用いており、各サービスの仕様変更ならびに障害発生時には、本アプリの提供・公開を中断する場合もございます。予めご了承下さい。
                </Typography>
                <Typography component="div">
                <ul>
                    <li>Firebase Hosting</li>
                    <li>ShangriLa Anime API V1</li>
                    <li>React・Recoil・Material-UI</li>
                </ul>
                </Typography>
            </Paper>
        </Box>
        </Box>        
      </Box>
    </Box>
  );
});
export default Introduction;
