import { Box, CircularProgress, Typography } from "@material-ui/core";
import { useEffect, useState, FormEvent } from "react";
import { BootstrapInput } from "../../../custom/input";
import usePineappleUniformByDocumentId from "../../../queries/usePineappleUniformByDocumentId";
import { IPineappleUniform } from "../../../types/interfaces/IPineappleUniform";
import PineappleDetails from "./PineappleDetails";

type SearchPineappleProps = {
  documentId: string;
  setPineapple: (pineapple: IPineappleUniform | null) => void;
};

const SearchPineapple = (props: SearchPineappleProps) => {
  const { documentId, setPineapple } = props;
  const [documentToSearch, setDocumentToSearch] = useState<string>(documentId);
  const { isLoading, data: pineappleUniform } = usePineappleUniformByDocumentId(documentToSearch);


  useEffect(() => {
    if (pineappleUniform) {
      setPineapple(pineappleUniform);
    }
  }, [pineappleUniform, setPineapple]);

  const handleRemovePineapple = () => {
    setPineapple(null);
    setDocumentToSearch("");
  }

  return (
    <Box>
      <Typography variant="body2">Select Pineapple Uniform Data or Drag Pineapple File</Typography>
      <BootstrapInput
        id="pattern-name"
        name="name"
        fullWidth
        placeholder="Search Pineapple Document"
        value={documentToSearch}
        onChange={(e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => setDocumentToSearch(e.currentTarget.value)}
        endAdornment={isLoading && <CircularProgress size={24} />}
      />
      {!!pineappleUniform && <PineappleDetails name="Pineapple Uniform Test" pattern={pineappleUniform.pattern} handleRemove={handleRemovePineapple} />}
    </Box>
  );
};

export default SearchPineapple;
