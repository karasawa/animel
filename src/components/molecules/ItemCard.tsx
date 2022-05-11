import { memo } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import AnimeLinkButton from "../atoms/AnimeLinkButton";
import { TwitterShareButton, TwitterIcon } from "react-share";

interface Props {
  data: any;
}

const ItemCard: React.VFC<Props> = memo(({ data }) => {
  return (
    <Card sx={{ width: 345, marginBottom: 3, borderRadius: 3 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.title_short1}
        </Typography>
        <Typography variant="body2" sx={{ color: "blue" }}>
          <a
            href={"https://twitter.com/search?q=%23" + data.twitter_hash_tag}
            target="_blank"
            rel="noopener noreferrer"
          >
            #{data.twitter_hash_tag}
          </a>
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-evenly" }}>
        <AnimeLinkButton data={data} />
        <TwitterShareButton url={data.public_url} title={data.title}>
          <TwitterIcon size={42} round />
        </TwitterShareButton>
      </CardActions>
    </Card>
  );
});
export default ItemCard;
