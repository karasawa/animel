import { memo } from 'react';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import { dialogState } from '../../recoil/atom';
import { useSetRecoilState } from 'recoil';

const CloseButton = memo(() => {
    const setOpen = useSetRecoilState(dialogState);
    return(
        <Box sx={{margin: 1, textAlign: 'right'}} >
            <Button sx={{color: '#6c1df2'}} onClick={() => setOpen(false)} >閉じる</Button>
        </Box>
    );
});
export default CloseButton;