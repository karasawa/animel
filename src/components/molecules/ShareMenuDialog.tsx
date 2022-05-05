import { memo } from 'react';
import Modal from "@mui/material/Modal";
import { dialogState } from '../../recoil/atom';
import { useRecoilState } from 'recoil';
import Box from "@mui/material/AppBar";
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
  

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 350,
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
                <Typography id="modal-modal-title" variant="h6" component="h2" sx={{color: '#a7aaab'}}>
                Animelをシェアする
                </Typography>
                <Divider />            
                {/* <div style={{ margin: 10 }}>
                    <TextField
                        id="task"
                        label="task"
                        variant="outlined"
                        size="small"
                        style={{ width: 260 }}
                    />
                </div>   */}
                <FacebookShareButton
                    url=''
                    quote=''
                    className=''>
                    <FacebookIcon
                    size={48}
                    round />
                </FacebookShareButton>
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
            </Box>              
        </Modal>
    );
});
export default ShareMenuDialog;