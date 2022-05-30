import { Box, TextField, Typography } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { Header } from "../../../../../types/interfaces";

const defaulHeaderState: Header = {
  headerId: 0,
  name: "",
};
const SelectHeader = (props: any) => {
  const { headers, header, setHeader, isSO, setIsSO, disabled } = props;

  if (!headers) return null;

  return (
    <>
      <Typography variant="body2">Add Binding</Typography>
      <Box display="flex">
        <Autocomplete
          fullWidth
          disabled={disabled}
          style={{ marginTop: 4, width: "75%" }}
          options={headers}
          value={header}
          onChange={(e: any, value: Header | null) => {
            setHeader(!value ? defaulHeaderState : value);
          }}
          getOptionLabel={(option: Header) => option.name}
          renderInput={(params) => <TextField {...params} variant="outlined" placeholder="Search header to bind" />}
        />
        {/* <FormControlLabel
          style={{ width: "25%", marginLeft: 5 }}
          control={<Checkbox value={isSO} onChange={(e) => setIsSO(e.target.checked)} color="primary" inputProps={{ "aria-label": "controlled" }} />}
          label="S/O Header"
        /> */}
      </Box>
    </>
  );
};

export default SelectHeader;
