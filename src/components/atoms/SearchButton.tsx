import { memo } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from "@mui/material";
import { yearState, courState } from '../../recoil/atom';
import { useRecoilValue } from 'recoil';

const SearchButton = memo(() => {
    const getAnimeHandle = () => {
        console.log('click')
    }
    return(
        <IconButton
        edge="end"
        aria-label="search"
        onClick={getAnimeHandle}
        sx={{background: '#6c1df2', color: '#fff'}}
        >
            <SearchIcon />
        </IconButton>    
    );
});
export default SearchButton;