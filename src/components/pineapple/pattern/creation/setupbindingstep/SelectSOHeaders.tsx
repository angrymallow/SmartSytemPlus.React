import { Checkbox, FormControlLabel, Grid, Typography, Box } from "@material-ui/core";
import { useEffect, useState } from "react";
import { Header } from "../../../../../types/interfaces/Header";

type SelectSOHeadersProps = {
  headers: Header[];
  selectedSO: Header[];
  soHeaderChanged: (header: Header, isSelected: boolean) => void;
};

function SelectSOHeaders(props: SelectSOHeadersProps) {
  const {headers, soHeaderChanged, selectedSO } = props;

  if (!headers) {
    return <div>Loading...</div>;
  }

  return (
    <Box component="div" marginBottom={3}>
      <Typography variant="body2">Set SO Headers</Typography>
      <Grid container spacing={0}>
        {headers.map((soHeader) => {
          return (
            <Grid item xs={3} key={soHeader.headerId}>
              <FormControlLabel
                control={<Checkbox color="primary" inputProps={{ "aria-label": "controlled" }} />}
                label={soHeader.name}
                checked={selectedSO.map((so) => so.headerId).includes(soHeader.headerId)}
                onChange={(e:any) => {
                  soHeaderChanged(soHeader, e.target.checked);
                }}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default SelectSOHeaders;
