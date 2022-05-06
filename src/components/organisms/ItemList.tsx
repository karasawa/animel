import { allowedNodeEnvironmentFlags } from 'process';
import { memo } from 'react';
import ItemCard from '../atoms/ItemCard';
import { animeState } from '../../recoil/atom';
import { useRecoilValue } from 'recoil';
import Box from "@mui/material/Box";

const ItemList = () => {
    const anime = useRecoilValue(animeState);
    console.log(anime)
    return(
        <Box sx={{display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap'}}>
            {anime.map((data) => (
                <ItemCard data={data}/>
            ))}
        </Box>
    );
};
export default ItemList;