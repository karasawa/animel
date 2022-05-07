import { memo } from 'react';
import ShareIcon from '@mui/icons-material/Share';
import { IconButton } from "@mui/material";
import { dialogState } from '../../recoil/atom';
import { useSetRecoilState } from 'recoil';

const ShareMenuButton = memo(() => {
    const setOpen = useSetRecoilState(dialogState);
    return(
        <IconButton
        edge="end"
        aria-label="share"
        onClick={() => setOpen(true)}
        >
            <ShareIcon />
        </IconButton>    
    );
});
export default ShareMenuButton;