import { Box, createStyles, IconButton, makeStyles, Theme, Typography } from "@material-ui/core";
import { EditOutlined } from "@material-ui/icons";
import { useContext, useEffect, useState } from "react";
import { LookupContext } from "../../../../context";
import { colors } from "../../../../themes/variables";
import { IPattern, IPatternDto } from "../../../../types/interfaces";
import LabeledText from "../../../textdisplay/LabeledText";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      backgroundColor: colors.background,
      height: "auto",
      display: "flex",
      padding: theme.spacing(3),
      flexDirection: "column",
      justifyContent: "center",
    },
  })
);

const patternViewInitialState: IPatternDto = {
  id: 0,
  country: "",
  formType: "",
  patternName: "",
  patternType: "",
  addedBy: "",
  addedDate: "",
}

type PrimaryDetailsViewProps = {
  handleEdit: () => void,
  canEdit: boolean,
  pattern: IPattern,
}
const PrimaryDetailsView = (props: PrimaryDetailsViewProps) => {
  const { canEdit, handleEdit, pattern } = props;
  const [details, setDetails] = useState<IPatternDto>(patternViewInitialState);
  const lookup = useContext(LookupContext);
  const classes = useStyles();

  useEffect(() => {
    const formType = lookup?.forms.find((form) => form.id === pattern.formId)?.name;
    const patternType = lookup?.types.find((type) => type.id === pattern.typeId)?.name;
    const country = lookup?.countries.find((country) => country.id === pattern.countryId)?.name;

    setDetails({
      patternName: pattern.name,
      country: !!country ? country : "",
      formType: !!formType ? formType: "",
      patternType: !!patternType ? patternType: "",
      addedBy: "",
      addedDate: "",
      id: 0,
    })
  
  }, [lookup, pattern])
  return (
    // <p>TODO: project Primary Details View and Continue working on binding refactor</p>
    // TODO: 
    <Box className={classes.container}>
      <Box display="flex" alignItems="center">
        <Typography variant="h5" color="primary">
          {details.patternName}
        </Typography>
        {canEdit ? (
          <IconButton onClick={handleEdit}>
            <EditOutlined color="inherit" />
          </IconButton>
        ) : null}
      </Box>
      <Box display="flex" width="100%" justifyContent="space-between">
        <LabeledText label="Country" text={details.country} />
        <LabeledText label="IVSI Form" text={details.formType} />
        <LabeledText label="Pattern Type" text={details.patternType} />
      </Box>
   </Box>
  );
};

export default PrimaryDetailsView