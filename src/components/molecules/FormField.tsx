import { memo } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { yearState, courState } from "../../recoil/atom";
import { useRecoilState } from "recoil";
import SearchButton from "../atoms/SearchButton";

const FormField = memo(() => {
  const [year, setYear] = useRecoilState(yearState);
  const [cour, setCour] = useRecoilState(courState);

  return (
    <Box sx={{ paddingTop: 3, paddingBottom: 3, alignItems: "center" }}>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label1">西暦</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label1"
          id="demo-simple-select-standard1"
          value={year}
          onChange={(e: SelectChangeEvent) => {
            setYear(e.target.value);
          }}
          label="西暦"
        >
          <MenuItem value={"2022"}>2022</MenuItem>
          <MenuItem value={"2021"}>2021</MenuItem>
          <MenuItem value={"2020"}>2020</MenuItem>
          <MenuItem value={"2019"}>2019</MenuItem>
          <MenuItem value={"2018"}>2018</MenuItem>
          <MenuItem value={"2017"}>2017</MenuItem>
          <MenuItem value={"2016"}>2016</MenuItem>
          <MenuItem value={"2015"}>2015</MenuItem>
          <MenuItem value={"2014"}>2014</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label2">クール</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label2"
          id="demo-simple-select-standard2"
          value={cour}
          onChange={(e: SelectChangeEvent) => {
            setCour(e.target.value);
          }}
          label="クール"
        >
          <MenuItem value={"1"}>1期（冬期）</MenuItem>
          <MenuItem value={"2"}>2期（春期）</MenuItem>
          <MenuItem value={"3"}>3期（夏期）</MenuItem>
          <MenuItem value={"4"}>4期（秋期）</MenuItem>
        </Select>
      </FormControl>
      <SearchButton />
    </Box>
  );
});
export default FormField;
