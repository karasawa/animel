import { memo } from "react";
import Snackbar from "@mui/material/Snackbar";
import { useRecoilState } from "recoil";
import { snackBarState } from "../../recoil/atom";
import Box from "@mui/material/Box";

const SnackBar = memo(() => {
  const [state, setState] = useRecoilState(snackBarState);
  const { vertical, horizontal, open } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <Box>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message="クリップボードにコピーしました"
        key={vertical + horizontal}
      />
    </Box>
  );
});
export default SnackBar;
