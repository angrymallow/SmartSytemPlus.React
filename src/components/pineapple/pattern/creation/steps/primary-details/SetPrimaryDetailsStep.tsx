import {
  Box,
  Button,
  CircularProgress,
  createStyles,
  FormControl,
  IconButton,
  InputAdornment,
  makeStyles,
  MenuItem,
  Select,
  Theme,
  Typography,
} from "@material-ui/core";
import { useContext } from "react";
import { BootstrapInput, StyledInputLabel } from "../../../../../../custom/input";
import { CheckCircleOutlined, EditOutlined, ErrorOutlineOutlined } from "@material-ui/icons";
import LabeledText from "../../../../../textdisplay/LabeledText";
import { colors } from "../../../../../../themes/variables";
import { LookupContext } from "../../../../../../context";
import useDuplicatePatterns from "../../../../../../queries/patterns/useDuplicatePatterns";
import Description from "../../../../../description/Description";
import { useFormik } from "formik";
import * as Yup from "yup";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    form: {
      "& >*": {
        marginBottom: theme.spacing(3),
      },
    },
    groupContainer: {
      backgroundColor: colors.background,
      height: "auto",
      display: "flex",
      padding: theme.spacing(3),
      flexDirection: "column",
      justifyContent: "center",
    },
  })
);

const DuplicateIcon = (props: any) => {
  const { hasDuplicate } = props;

  if (hasDuplicate) {
    return <ErrorOutlineOutlined color="error" />;
  } else {
    return <CheckCircleOutlined color="primary" />;
  }
};

const PrimaryDetailsView = (props: any) => {
  const { canEdit, handleEdit, details } = props;
  const classes = useStyles();

  return (
    <Box className={classes.groupContainer}>
      <Box display="flex" alignItems="center">
        <Typography variant="h5" color="primary">
          {details.name}
        </Typography>{" "}
        {canEdit ? (
          <IconButton onClick={handleEdit}>
            <EditOutlined color="inherit" />
          </IconButton>
        ) : null}
      </Box>
      <Box display="flex" width="100%" justifyContent="space-between">
        <LabeledText label="Country" text={details.country} />
        <LabeledText label="IVSI Form" text={details.form} />
        <LabeledText label="Pattern Type" text={details.patternType} />
      </Box>
    </Box>
  );
};

type DuplicateAdornmentProps = {
  loading: boolean;
  duplicate: boolean;
};

const DuplicateAdornment = (props: DuplicateAdornmentProps) => {
  const { loading, duplicate } = props;
  return <InputAdornment position="end">{loading ? <CircularProgress size={24} /> : <DuplicateIcon hasDuplicate={duplicate} />}</InputAdornment>;
};

const PatternDetailsSchema = Yup.object({
  country: Yup.number().required().min(1),
  name: Yup.string().required(),
  form: Yup.number().required().min(1),
  type: Yup.number().required().min(1),
});

type SetPrimaryDetailsProps = {
  initialState: {
    countryId: number;
    name: string;
    formId: number;
    typeId: number;
  };
  handleSubmit(countryId: number, name: string, formId: number, typeId: number): void;
};

const SetPrimaryDetailsStep = (props: SetPrimaryDetailsProps) => {
  const { initialState, handleSubmit } = props;
  const lookup = useContext(LookupContext);
  
  const formik = useFormik({
    initialValues: {
      name: initialState.name,
      country: initialState.countryId,
      form: initialState.formId,
      type: initialState.typeId,
    },
    validationSchema: PatternDetailsSchema,
    validateOnMount: true, 
    onSubmit: (values) => {
      handleSubmit(values.country, values.name, values.form, values.type);
    },
  });

  const { isLoading: isDuplicateChecking, data: dupResult } = useDuplicatePatterns(formik.values.name, formik.values.country);
  const classes = useStyles();

  return (
    <Box marginTop={5} maxWidth="70%">
      <Description
        description="Enter Patterm Primary Details"
        caption=">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, corporis quam quidem minima fugit distinctio exercitationem?"
      />
      <Box marginTop={5} component="form" className={classes.form}>
        <FormControl fullWidth>
          <StyledInputLabel shrink htmlFor="pattern-country">
            Country
          </StyledInputLabel>
          <Select
            id="pattern-country"
            name="country"
            fullWidth
            input={<BootstrapInput />}
            value={formik.values.country}
            onChange={formik.handleChange}
          >
            {lookup?.countries?.map((country: any) => (
              <MenuItem key={country.id} value={country.id}>
                {country.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <StyledInputLabel shrink htmlFor="pattern-name">
            Pattern Name
          </StyledInputLabel>
          <BootstrapInput
            id="pattern-name"
            name="name"
            fullWidth
            placeholder="Enter Pattern Name"
            endAdornment={formik.values.name.length > 0 && formik.values.country > 0 && <DuplicateAdornment loading={isDuplicateChecking} duplicate={dupResult?.isDuplicate} />}
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          {dupResult?.isDuplicate && !isDuplicateChecking ? (
            <Typography variant="caption" color="error">
              Pattern name is already used, edit instead?
            </Typography>
          ) : null}
        </FormControl>
        <FormControl fullWidth>
          <StyledInputLabel shrink htmlFor="pattern-form">
            IVSI Form
          </StyledInputLabel>
          <Select
            id="pattern-form"
            name="form"
            fullWidth
            input={<BootstrapInput />}
            value={formik.values.form}
            onChange={formik.handleChange}
          >
            {lookup?.forms?.map((form: any) => (
              <MenuItem key={form.id} value={form.id}>
                {form.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <StyledInputLabel shrink htmlFor="pattern-type">
            Pattern Type
          </StyledInputLabel>
          <Select
            id="pattern-type"
            name="type"
            fullWidth
            input={<BootstrapInput />}
            value={formik.values.type}
            onChange={formik.handleChange}
          >
            {lookup?.types?.map((type: any) => (
              <MenuItem key={type.id} value={type.id}>
                {`${type.name} (${type.code})`}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button variant="contained" color="primary" disabled={!formik.isValid || dupResult?.isDuplicate || isDuplicateChecking} onClick={() => formik.handleSubmit()}>
          Next
        </Button>
      </Box>
    </Box>
  );
};

export { PrimaryDetailsView };
export default SetPrimaryDetailsStep;
