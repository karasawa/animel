import { memo } from 'react';
import UrlCopyButton from '../atoms/UrlCopyButton';
import Modal from "@mui/material/Modal";
import { dialogState } from '../../recoil/atom';
import { useRecoilState } from 'recoil';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    EmailShareButton,
    TumblrShareButton,
  
    FacebookIcon,
    TwitterIcon,
    LinkedinIcon,
    TumblrIcon,
    EmailIcon,
  } from 'react-share';
import CloseButton from '../atoms/CloseButton';
  

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 290,
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: 2,
    p: 4,
  };

const ShareMenuDialog = memo(() => {
    const [open, setOpen] = useRecoilState<boolean>(dialogState);

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
                <Box sx={{ margin: 1 }}>
                    <FacebookShareButton
                        url=''
                        quote=''
                        className=''>
                        <FacebookIcon
                        size={48}
                        round />
                    </FacebookShareButton>
                </Box>
                {/* <TwitterShareButton
                    url=''
                    quote=''
                    className=''>
                    <TwitterIcon
                    size={48}
                    round />
                </TwitterShareButton>
                <LinkedinShareButton
                    url=''
                    quote=''
                    windowWidth={750}
                    windowHeight={600}
                    className=''>
                    <LinkedinIcon
                    size={48}
                    round />
                </LinkedinShareButton>
                <TumblrShareButton
                    url={shareUrl}
                    title={title}
                    windowWidth={660}
                    windowHeight={460}
                    className={classes.snsShareButton}>
                    <TumblrIcon
                    size={48}
                    round />
                </TumblrShareButton>
                <EmailShareButton
                    url={shareUrl}
                    subject={title}
                    body="body"
                    className={classes.snsShareButton}>
                    <EmailIcon
                    size={48}
                    round />
                </EmailShareButton>                 */}
                <UrlCopyButton />
                <Divider />
                <CloseButton />           
            </Box>              
        </Modal>
    );
});
export default ShareMenuDialog;