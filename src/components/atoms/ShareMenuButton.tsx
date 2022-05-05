import { memo } from 'react';
import LinearScaleIcon from '@mui/icons-material/LinearScale';
import { IconButton } from "@mui/material";
import { dialogState } from '../../recoil/atom';
import { useSetRecoilState } from 'recoil';

const ShareMenuButton = memo(() => {
    const setOpen = useSetRecoilState(dialogState);
    return(
        <IconButton
        edge="end"
        aria-label="linearScale"
        onClick={() => setOpen(true)}
        >
            <LinearScaleIcon />
        </IconButton>    
    );
});
export default ShareMenuButton;