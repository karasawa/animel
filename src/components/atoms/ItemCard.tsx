import { memo } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AnimeLinkButton from './AnimeLinkButton';
import {
    TwitterShareButton,
    TwitterIcon,
} from 'react-share';


interface Props {
    data: any;
}

const ItemCard: React.VFC<Props> = memo(({data}) => {
    return(
    <Card sx={{ width: 345, marginBottom: 3, borderRadius: 3 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.title_short1}
        </Typography>
        <Typography variant="body2" sx={{color: 'blue'}}>
          #{data.twitter_hash_tag}
        </Typography>
      </CardContent>
      <CardActions sx={{display: 'flex', justifyContent: 'space-evenly'}}>
        <AnimeLinkButton data={data}/>
        <TwitterShareButton
            url=''
            // quote=''
            className=''>
            <TwitterIcon
            size={42}
            round />
        </TwitterShareButton>
      </CardActions>
    </Card>
    );
});
export default ItemCard;