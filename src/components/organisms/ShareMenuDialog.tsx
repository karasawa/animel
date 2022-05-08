import { memo } from 'react';
import UrlCopyButton from '../atoms/UrlCopyButton';
import Modal from "@mui/material/Modal";
import { dialogState } from '../../recoil/atom';
import { useRecoilState } from 'recoil';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import {
    FacebookShareButton,
    TwitterShareButton,
    EmailShareButton,
    FacebookIcon,
    TwitterIcon,
    EmailIcon,
  } from 'react-share';
import CloseButton from '../atoms/CloseButton';

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: 270,
    width: 250,
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: 2,
    p: 4,
  };

const ShareMenuDialog = memo(() => {
    const [open, setOpen] = useRecoilState<boolean>(dialogState);

    const shareURL = 'https://github.com/karasawa/animel';
    const title = "Animel | アニメなにみる？";

    return(
        <Modal
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2" sx={{color: '#a7aaab', textAlign: 'center'}}>
                Animelをシェアする
                </Typography>
                <Divider />
                <Box sx={{marginTop: 3, marginBottom: 3, display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap'}}>            
                    <FacebookShareButton
                        url={shareURL}
                        quote={title}
                    >
                        <FacebookIcon
                        size={48}
                        round />
                    </FacebookShareButton>
                    <TwitterShareButton
                        url={shareURL}
                        title={title}
                    >
                        <TwitterIcon
                        size={48}
                        round />
                    </TwitterShareButton>
                    <EmailShareButton
                        url={shareURL}
                        subject={title}
                        body="body"
                    >
                        <EmailIcon
                        size={48}
                        round />
                    </EmailShareButton>
                </Box>                   
                <UrlCopyButton />
                <Divider />
                <CloseButton />           
            </Box>      
        </Modal>
    );
});
export default ShareMenuDialog;