import { memo } from 'react';
import ItemCard from '../molecules/ItemCard';
import { animeState } from '../../recoil/atom';
import { useRecoilValue } from 'recoil';
import Box from "@mui/material/Box";

const ItemList = memo(() => {
    const anime = useRecoilValue(animeState);
    return(
        <Box sx={{display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap'}}>
            {anime.map((data) => (
                <ItemCard data={data}/>
            ))}
        </Box>
    );
});
export default ItemList;