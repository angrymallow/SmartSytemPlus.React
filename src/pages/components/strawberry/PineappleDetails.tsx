import { Box, Button, Typography } from "@material-ui/core";
import { useContext, useEffect, useState } from "react";
import LabeledText from "../../../components/textdisplay/LabeledText";
import { LookupContext } from "../../../context";
import { IPattern, IPatternDto } from "../../../types/interfaces";

type PineappleDetailsType = {
  name: string,
  pattern: IPattern;
  handleRemove: () => void;
};

const patternViewInitialState: IPatternDto = {
  id: 0,
  country: "",
  ivsiForm: "",
  patternName: "",
  patternType: "",
  uploadInfo: {
    fullName: "",
    stamp: "",
  }
};
const PineappleDetails = (props: PineappleDetailsType) => {
  const { name, pattern, handleRemove } = props;
  const lookup = useContext(LookupContext);
  const [details, setDetails] = useState<IPatternDto>(patternViewInitialState);

  useEffect(() => {
    const formType = lookup?.forms.find((form) => form.id === pattern.formId)?.name;
    const patternType = lookup?.types.find((type) => type.id === pattern.typeId)?.name;
    const country = lookup?.countries.find((country) => country.id === pattern.countryId)?.name;

    setDetails({
      patternName: pattern.name,
      country: !!country ? country : "",
      ivsiForm: "",
      patternType: !!patternType ? patternType : "",
      uploadInfo: {
        fullName: "",
        stamp: "",
      },
      id: 0,
    });
  }, [lookup, pattern]);

  if (!lookup) {
    return <p>Loading details...</p>;
  }
  return (
    <Box>
      <Box display="flex">
        <Typography variant="h6" style={{ marginRight: "2ch" }}>
          {name}
        </Typography>
        <Button onClick={handleRemove}>
          <Typography variant="body2" color="error">
            Remove
          </Typography>
        </Button>
      </Box>
      <Box display="flex" width="100%" justifyContent="space-between">
        <LabeledText label="Country" text={details.country} />
        <LabeledText label="Pattern Name" text={details.patternName} />
        <LabeledText label="IVSI Form" text={details.ivsiForm} />
        <LabeledText label="Pattern Type" text={details.patternType} />
      </Box>
    </Box>
  );
};

export default PineappleDetails;
