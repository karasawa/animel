import { memo } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { SnackbarOrigin } from "@mui/material/Snackbar";
import { useSetRecoilState } from "recoil";
import { snackBarState } from "../../recoil/atom";

const UrlCopyButton = memo(() => {
  const Url = "https://github.com/karasawa/animel";

  const setState = useSetRecoilState(snackBarState);

  const copyTextToClipboard = (newState: SnackbarOrigin): any => {
    navigator.clipboard.writeText(Url).then(
      () => {
        console.log("Async: Copying to clipboard was successful!");
        setState({ open: true, ...newState });
      },
      (err) => {
        console.error("Async: Could not copy text: ", err);
      }
    );
  };

  return (
    <Box sx={{ margin: 1, textAlign: "center" }}>
      <Button
        variant="contained"
        sx={{ background: "#6c1df2", "&:hover": { background: "#6c1df2" } }}
        onClick={() =>
          copyTextToClipboard({ vertical: "top", horizontal: "left" })
        }
      >
        URLをコピー
      </Button>
    </Box>
  );
});
export default UrlCopyButton;
