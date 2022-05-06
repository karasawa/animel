import { memo } from 'react';
import LinkIcon from '@mui/icons-material/Link';
import { IconButton } from "@mui/material";

interface Props {
    data: any;
}

const AnimeLinkButton: React.VFC<Props> = memo(({data}) => {
    return(
        <IconButton
        edge="end"
        aria-label="search"
        href={data.public_url}
        sx={{m: 1, background: '#6c1df2', color: '#fff', '&:hover': {background: '#6c1df2'}}}
        >
            <LinkIcon />
        </IconButton>    
    );
});
export default AnimeLinkButton;