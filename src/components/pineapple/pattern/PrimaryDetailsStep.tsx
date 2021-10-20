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
import { useEffect, useState } from "react";
import { BootstrapInput, StyledInputLabel } from "../../../custom/input";
import { PatternDetails } from "../../../types/interfaces/PatternDetails";
import { CheckCircleOutlined, EditOutlined, ErrorOutlineOutlined } from "@material-ui/icons";
import { useQuery } from "react-query";
import { getDuplicatePatternByNameAndCountry } from "../../../queries/mockdata";
import LabeledText from "../../textdisplay/LabeledText";
import { colors } from "../../../themes/variables";

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

//TODO: Apply redirect to edit

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

const PrimaryDetailsStep = (props: any) => {
  const { countries, forms, patternTypes, initialState, handleNext } = props;
  const [details, setDetails] = useState<PatternDetails>(initialState);
  const [canSave, setCanSave] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [country, setCountry] = useState<number>(0);
  const [isDuplicate, setIsDuplicate] = useState<boolean>(false);

  const { isLoading: isDuplicateChecking, data: dupResult } = useQuery<any>(
    ["duplicatePattern", { name, country }],
    () => getDuplicatePatternByNameAndCountry(name, country),
    { cacheTime: 0, enabled: name.length > 0 && country > 0 }
  );

  useEffect(() => {
    if (!isDuplicateChecking) {
      if (dupResult?.result?.isDuplicate) {
        setIsDuplicate(true);
      } else {
        setIsDuplicate(false);
        setDetails({ ...details, name: name, countryId: country });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dupResult]);

  useEffect(() => {
    setName(initialState.name);
    setCountry(initialState.countryId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSelectCountry = (e: any) => {
    setCountry(e.target.value);
  };

  const handleInputName = (e: any) => {
    setName(e.target.value);
  };

  const handleSelectForm = (e: any) => {
    setDetails({ ...details, formId: e.target.value });
  };

  const handleSelectType = (e: any) => {
    setDetails({ ...details, patternId: e.target.value });
  };

  const handleSaveDetails = () => {
    handleNext(details);
  };

  useEffect(() => {
    const allowSave =
      details?.name.length > 0 && details?.countryId > 0 && details?.formId > 0 && details?.patternId > 0 && !isDuplicateChecking && !isDuplicate;
    setCanSave(allowSave);
  }, [details, isDuplicateChecking, isDuplicate]);

  const classes = useStyles();

  return (
    <Box marginTop={5} maxWidth="50%">
      <Typography variant="body1">Enter Pattern Primary Details</Typography>
      <Box marginTop={5} component="form" className={classes.form}>
        <FormControl fullWidth>
          <StyledInputLabel shrink htmlFor="pattern-country">
            Country
          </StyledInputLabel>
          <Select id="pattern-country" fullWidth input={<BootstrapInput />} value={country} onChange={handleSelectCountry} name="countryId">
            {countries?.map((country: any) => (
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
            fullWidth
            placeholder="Enter Pattern Name"
            id="pattern-name"
            endAdornment={
              name.length <= 0 || country <= 0 ? null : isDuplicateChecking ? (
                <InputAdornment position="end">
                  <CircularProgress size={24} />{" "}
                </InputAdornment>
              ) : (
                <InputAdornment position="end">
                  <DuplicateIcon hasDuplicate={isDuplicate} />
                </InputAdornment>
              )
            }
            value={name}
            onChange={handleInputName}
          />
          {isDuplicate && !isDuplicateChecking ? (
            <Typography variant="caption" color="error">
              Pattern name is already used, edit instead?
            </Typography>
          ) : null}
        </FormControl>
        <FormControl fullWidth>
          <StyledInputLabel shrink htmlFor="pattern-form">
            IVSI Form
          </StyledInputLabel>
          <Select id="pattern-form" fullWidth input={<BootstrapInput />} value={details?.formId} onChange={handleSelectForm}>
            {forms?.map((form: any) => (
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
          <Select id="pattern-type" fullWidth input={<BootstrapInput />} value={details?.patternId} onChange={handleSelectType}>
            {patternTypes?.map((type: any) => (
              <MenuItem key={type.id} value={type.id}>
                {" "}
                {`${type.name} (${type.code})`}{" "}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button variant="contained" color="primary" disabled={!canSave} onClick={handleSaveDetails}>
          Next
        </Button>
      </Box>
    </Box>
  );
};

export { PrimaryDetailsView };
export default PrimaryDetailsStep;
