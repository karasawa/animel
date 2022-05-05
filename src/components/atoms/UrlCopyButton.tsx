import { memo } from 'react';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";

const UrlCopyButton = memo(() => {
    return(
        <Box sx={{margin: 1, textAlign: 'center'}} >
            <Button variant="contained" sx={{background: '#6c1df2'}} >URLをコピー</Button>
        </Box>
    );
});
export default UrlCopyButton;