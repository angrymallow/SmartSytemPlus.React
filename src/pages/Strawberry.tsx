import { Box, Container, Typography, TextField, RadioGroup, FormControlLabel, Radio, Button } from "@material-ui/core";
import { useContext, useState } from "react";
import { StrawberryImage } from "../assets/icons";
import { AppContext, LookupContext } from "../context";
import { useLookup } from "../queries/patterns";
import { IPineappleUniform } from "../types/interfaces/IPineappleUniform";
import SearchPineapple from "./components/strawberry/SearchPineapple";

const Strawberry = () => {
  // const { isLoading, data } = useLookup();
  const { maxRow, setMaxRow } = useContext(AppContext);
  const [pineapple, setPineapple] = useState<IPineappleUniform | null>(null);
  const [initialDocumentId ] = useState<string>("");
  const [documentType, setDocumentType] = useState<string>("");

  const [componentKey] = useState<number>(0);

  console.log(pineapple);

  // if (isLoading || !data) {
  //   return <p>Strawberry Loading...</p>;
  // }

  const handleSelectDocumentType = (e: any) => {
    console.log(e.target.value, "selected doc type")
    setDocumentType(e.target.value);
  }

  return (
    // <LookupContext.Provider value={{ countries: data?.countries, forms: data?.forms, types: data?.types }}>
      <Container>
        <Typography variant="h4">Strawberry Uniform</Typography>
        <Box display="flex" alignItems="center">
          <Box width="80%">
            <Typography variant="body2">Place here description about Strawberry Uniform.</Typography>

            <TextField
              variant="filled"
              label="Set Strawberry Max Row"
              fullWidth
              helperText="Set strawberry max row to process"
              value={maxRow}
              onChange={(e: any) => setMaxRow(e.currentTarget.value)}
            ></TextField>
          </Box>
          <Box width="20%">
            <StrawberryImage />
          </Box>
        </Box>
        <Box width="80%">
          <SearchPineapple key={componentKey} documentId={initialDocumentId} setPineapple={setPineapple} />
        </Box>
        <Box width="80%" marginTop={4}>
          <Typography variant="h6">Create Document</Typography>
          <div>
            <RadioGroup row aria-label="value-type" name="value-type" value={documentType} onChange={handleSelectDocumentType}>
              <FormControlLabel value="1" control={<Radio color="primary" />} label="IV/SI"/>
              <FormControlLabel value="2" control={<Radio color="primary" />} label="S/IV" labelPlacement="end" />
              <FormControlLabel value="3" control={<Radio color="primary" />} label="S/SI" labelPlacement="end" />
              <FormControlLabel value="4" control={<Radio color="primary" />} label="IV/SI/AT" labelPlacement="end" />
              <FormControlLabel value="5" control={<Radio color="primary" />} label="R-FORM" labelPlacement="end" />
            </RadioGroup>
          </div>
          <Box marginTop={4}>
            <Button variant="contained" color="primary">Create Strawberry Uniform</Button>
          </Box>
        </Box>
      </Container>
    // </LookupContext.Provider>
  );
};

export default Strawberry;
