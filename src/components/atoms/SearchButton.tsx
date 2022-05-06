import { memo, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from "@mui/material";
import { yearState, courState, animeState } from '../../recoil/atom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { getAnime } from '../../api/api';

const SearchButton = memo(() => {
    const year = useRecoilValue(yearState);
    const cour = useRecoilValue(courState);
    const setAnime = useSetRecoilState(animeState);

    useEffect(() => {
        getAnimeHandle()
    }, []);

    const getAnimeHandle = async() => {
        const animes = await getAnime(year, cour);
        setAnime(animes);
    };

    return(
        <IconButton
        edge="end"
        aria-label="search"
        onClick={getAnimeHandle}
        sx={{m: 1, background: '#6c1df2', color: '#fff', '&:hover': {background: '#6c1df2'}}}
        >
            <SearchIcon />
        </IconButton>    
    );
});
export default SearchButton;