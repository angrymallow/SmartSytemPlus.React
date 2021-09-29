import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  Container,
  createStyles,
  FormControlLabel,
  makeStyles,
  MenuItem,
  Paper,
  Step,
  StepLabel,
  Stepper,
  Table,
  TableCell,
  TableContainer,
  TextField,
  Theme,
  Toolbar,
  Typography,
  TableHead,
  TableBody,
  TableRow,
} from "@material-ui/core";
import {
  CheckCircleOutline,
  ErrorOutlineOutlined,
  FileCopyOutlined,
} from "@material-ui/icons";
import { useCallback, useContext, useEffect, useState } from "react";
import { SearchContext } from "../context/SearchContext";
import { Link } from "react-router-dom";
import useCountries from "../queries/useCountries";
import { useQuery } from "react-query";
import {
  getPatternByCountry,
  getPatternInfoById,
  processRawData,
} from "../queries/mockdata";
import { useDropzone } from "react-dropzone";
import { colors } from "../themes/variables";
import { ExcelIcon } from "../assets/icons/index";
import { createTableDataFromObject } from "../helpers/grid-helpers";

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    box: {
      border: "1px solid #FBC97E",
      backgroundColor: "#FFF9F0",
      height: "70px",
    },
    stepAction: {
      marginTop: theme.spacing(2),
      marginRight: theme.spacing(2),
    },
    dropZone: {
      border: "1px solid #E0E0E0",
      backgroundColor: "#FAFAFA",
      height: "60px",
      padding: "15px",
      display: "flex",
      alignItems: "center",
      marginTop: theme.spacing(5),
      cursor: "pointer",
    },
    dropZoneActive: {
      backgroundColor: colors.primaryLight,
      border: "1px solid",
      borderColor: colors.primary,
    },
    fileInfo: {
      "& > *": {
        marginRight: "15px",
      },
    },
    completeContainer: {
      height: "97px",
      backgroundColor: colors.primaryLight,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "20px",
    },
    stepHeader: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
    }
  });
});

const SelectCountry = (props: any) => {
  const { country, setCountry } = props;
  const { isLoading: countryLoading, data: countryData } = useCountries();

  if (countryLoading)
    return (
      <Box>
        <CircularProgress size={18} style={{ marginRight: 10 }} />
        <span>Loading Countries...</span>
      </Box>
    );

  return (
    <TextField
      id="country"
      style={{ width: "100%" }}
      label="Country"
      variant="filled"
      value={country}
      onChange={(e) => setCountry(+e.target.value)}
      select
    >
      {countryData.data.countries.map((country: any) => (
        <MenuItem key={country.id} value={country.id}>
          {country.name}
        </MenuItem>
      ))}
    </TextField>
  );
};

const SelectPattern = (props: any) => {
  const { country, pattern, setPattern } = props;

  const { isLoading: patternLoading, data: patternData } = useQuery<any>(
    ["patterns", country],
    () => getPatternByCountry(country)
  );

  if (patternLoading)
    return (
      <Box>
        <CircularProgress size={18} style={{ marginRight: 10 }} />
        <span>Loading Patterns...</span>
      </Box>
    );
  return (
    <TextField
      id="pattern"
      label="Pineapple Pattern"
      variant="filled"
      value={pattern}
      onChange={(e) => setPattern(+e.target.value)}
      fullWidth
      select
    >
      {patternData.patterns.map((pattern: any) => (
        <MenuItem key={pattern.id} value={pattern.id}>
          {pattern.name}
        </MenuItem>
      ))}
    </TextField>
  );
};

const PatternInfo = (props: any) => {
  const { details } = props;
  return (
    <Box
      marginTop={2}
      width="100%"
      display="flex"
      flexWrap="wrap"
      height="100px"
    >
      <div style={{ width: "50%" }}>
        <Typography variant="caption" component="div">
          Country
        </Typography>
        <Typography variant="body1">{details.country}</Typography>
      </div>
      <div style={{ width: "50%" }}>
        <Typography variant="caption" component="div">
          Pattern Name
        </Typography>
        <Typography variant="body1">{details.name}</Typography>
      </div>
      <div style={{ width: "50%" }}>
        <Typography variant="caption" component="div">
          IVSI Form
        </Typography>
        <Typography variant="body1">{details.form}</Typography>
      </div>
      <div style={{ width: "50%" }}>
        <Typography variant="caption" component="div">
          Pattern Type
        </Typography>
        <Typography variant="body1">{details.type}</Typography>
      </div>
    </Box>
  );
};

const SetupPineapple = (props: any) => {
  const { handleNext, initialState } = props;
  const [name, setName] = useState<string>("");
  const [country, setCountry] = useState<number>(0);
  const [pattern, setPattern] = useState<number>(0);
  const [canNext, setCanNext] = useState<boolean>(false);

  const { isLoading: patternDetailsLoading, data: patternDetails } =
    useQuery<any>(
      ["patterndetails", pattern],
      () => getPatternInfoById(pattern, country)
      // { cacheTime: 0 }
    );

  useEffect(() => {
    if (country <= 0) setPattern(0);
  }, [country]);

  useEffect(() => {
    setCanNext(pattern > 0);
  }, [pattern]);

  useEffect(() => {
    if (name.length <= 0) setCountry(0);
  }, [name]);

  useEffect(() => {
    if (!!initialState) {
      setName(initialState.name);
      setCountry(initialState.country);
      setPattern(initialState.pattern.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const classes = useStyles();

  const handlePatternDetailsSave = () => {
    handleNext({
      name,
      country,
      pattern: {
        ...patternDetails.info,
        country: patternDetails.info.country,
        form: patternDetails.info.form,
        type: patternDetails.info.type,
      },
    });
  };
  return (
    <>
      <Typography className={classes.stepHeader} variant="h6">Setup Pineapple Pattern</Typography>
      <Box
        flexGrow="1"
        marginY={3}
        display="flex"
        alignItems="center"
        padding={1}
        className={classes.box}
      >
        <ErrorOutlineOutlined color="secondary" />
        <Box component="div" marginLeft={1}>
          <Typography variant="body2">Need a new pattern?</Typography>
          <Link to="/pineapple">
            <Typography variant="caption" color="primary">
              Go to Pattern Creation
            </Typography>
          </Link>
        </Box>
      </Box>
      <Box width="60%">
        <Box component="form"></Box>
        <TextField
          id="name"
          label="Pineapple Uniform Name"
          variant="filled"
          helperText="Enter a descriptive name"
          autoComplete="off"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="flex-start"
          width="100%"
          marginTop="2ch"
        >
          <Box display="flex" alignItems="center" width="40%" height={75}>
            {name.length > 0 ? (
              <SelectCountry country={country} setCountry={setCountry} />
            ) : null}
          </Box>

          <Box display="flex" alignItems="center" width="55%" height={75}>
            {country > 0 ? (
              <SelectPattern
                country={country}
                pattern={pattern}
                setPattern={setPattern}
              />
            ) : null}
          </Box>
        </Box>
        {pattern > 0 ? (
          patternDetailsLoading ? (
            <Box>
              <CircularProgress size={18} style={{ marginRight: 10 }} />
              <span>Loading Pattern Details</span>
            </Box>
          ) : (
            <PatternInfo details={patternDetails.info} />
          )
        ) : null}
      </Box>

      <Button
        className={classes.stepAction}
        variant="contained"
        disabled={!canNext}
        color="primary"
        onClick={handlePatternDetailsSave}
      >
        Next
      </Button>
    </>
  );
};

const ProcessRawDataStep = (props: any) => {
  const { details, patternName, handleNext, handleBack } = props;
  const [canNext, setCanNext] = useState<boolean>(false);
  const [splitConsignee, setSplitConsignee] = useState<boolean>(false);
  const [splitNotifyParty, setSplitNotifyParty] = useState<boolean>(false);
  const [fileUploaded, setFileUploaded] = useState<boolean>(false);
  const [rawFile, setRawFile] = useState<any>();

  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles, "acceptedfiles");
    acceptedFiles.forEach((e: any) => {
      setRawFile({ name: e.name, path: e.path, size: e.path });
    });
    if (acceptedFiles.length > 0) {
      setFileUploaded(true);
    } else {
      setFileUploaded(false);
    }
  }, []);

  const handleRemoveFile = useCallback(() => {
    setRawFile(null);
    setFileUploaded(false);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    maxFiles: 1,
  });

  const handleSplitConsigneeChange = (e: any) => {
    setSplitConsignee(e.target.checked);
  };
  const handleSplitNotifyPartyChange = (e: any) => {
    setSplitNotifyParty(e.target.checked);
  };

  const handleProcessRawData = () => {
    handleNext({ splitConsignee, splitNotifyParty }, rawFile);
  };

  useEffect(() => {
    setCanNext(fileUploaded);
  }, [fileUploaded]);

  const classes = useStyles();
  return (
    <Box>
      <Typography className={classes.stepHeader} variant="h6">Upload and Process Raw Data</Typography>
      <Box width="80%">
        <Typography variant="body1" color="primary" style={{ marginBottom: 5 }}>
          Pineapple Details
        </Typography>
        <Typography variant="caption">Pineapple Name</Typography>
        <Typography>{patternName}</Typography>
        <PatternInfo details={details} />
        <Box marginTop={4}>
          <Typography variant="body1" color="primary">
            Split Address
          </Typography>
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                checked={splitConsignee}
                onChange={handleSplitConsigneeChange}
                inputProps={{ "aria-label": "controlled" }}
              />
            }
            label="Split Consignee - 5 Columns"
          />
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                checked={splitNotifyParty}
                onChange={handleSplitNotifyPartyChange}
                inputProps={{ "aria-label": "controlled" }}
              />
            }
            label="Split Notify Party - 5 Columns"
          />
        </Box>
        <Box
          className={`${classes.dropZone} ${
            isDragActive || fileUploaded ? classes.dropZoneActive : ""
          }`}
        >
          {fileUploaded ? (
            <Box
              display="flex"
              alignItems="center"
              className={classes.fileInfo}
            >
              <ExcelIcon />
              <Typography variant="body2" style={{ fontWeight: 400 }}>
                {rawFile.name}
              </Typography>
              <Button color="secondary" onClick={handleRemoveFile}>
                Remove
              </Button>
            </Box>
          ) : (
            <div {...getRootProps()} style={{ width: "100%" }}>
              <input {...getInputProps()}></input>
              {isDragActive ? (
                <Typography variant="caption">Drop file here...</Typography>
              ) : (
                <Typography variant="caption" color="primary">
                  Drag or select file to upload raw data...
                </Typography>
              )}
            </div>
          )}
        </Box>
      </Box>
      <Box width="25%" display="flex" alignItems="space-around">
        <Button
          className={classes.stepAction}
          variant="outlined"
          color="primary"
          onClick={handleBack}
        >
          Back
        </Button>
        <Button
          className={classes.stepAction}
          variant="contained"
          disabled={!canNext}
          color="primary"
          onClick={handleProcessRawData}
        >
          Process
        </Button>
      </Box>
    </Box>
  );
};

const ReviewAndCompleteStep = (props: any) => {
  const { file, handleProcessStrawberry, handleNew } =
    props;
  const classes = useStyles();
  const [pineapple, setPineapple] = useState<any>();

  const { isLoading, data } = useQuery<any>(
    ["pineappledata", file],
    () => processRawData(file),
    { cacheTime: 0 }
  );

  useEffect(() => {
    if (!!data) {
      const result = createTableDataFromObject(data.data);
      setPineapple(result);
    }
  }, [data]);

  if (isLoading) {
    return (
      <Box
        display="flex"
        height={500}
        justifyContent="center"
        alignItems="center"
      >
        <CircularProgress style={{ marginRight: 10 }} />
        <span>Processing Raw Data, please wait...</span>
      </Box>
    );
  }

  return (
    <Box minHeight={500}>
      <Box marginTop={3} className={classes.completeContainer}>
        <Box display="flex">
          <CheckCircleOutline color="primary" />
          <Typography variant="h6">
            Awesome! You succesfully created pineapple uniform
          </Typography>
        </Box>
        <Box display="flex">
          <Typography variant="caption">
            You can copy this document number to search in the pineapple list
          </Typography>
          <FileCopyOutlined style={{ height: "16px", color: colors.primary }} />
          <Typography variant="body2" color="primary">
            PN12300001
          </Typography>
        </Box>
      </Box>
      <Box marginTop={3}>
        <Paper elevation={0}>
          <Toolbar disableGutters>
            <Typography variant="h5">Pineapple Uniform Data</Typography>
            <Button color="primary">Download</Button>
          </Toolbar>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  {pineapple?.header.map((header: string) => (
                    <TableCell key={header}>{header}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {pineapple?.data.map((data: any) => {
                  return (
                    <TableRow key={data.chassisNo}>
                      <TableCell>
                        <Typography>{data.date}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography>{data.chassisNo}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography>{data.refNo}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography>{data.model}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography>{data.color}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography>{data.mileage}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography>{data.engineNo}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography>{data.country}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography>{data.incoTerms}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography>{data.currency}</Typography>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
      <Box width="100%" display="flex" marginTop={10}>
        <Button
          className={classes.stepAction}
          variant="outlined"
          color="primary"
          onClick={handleNew}
        >
          Create New
        </Button>
        <Button
          className={classes.stepAction}
          variant="contained"
          color="primary"
          onClick={handleProcessStrawberry}
        >
          Process Strawberry
        </Button>
      </Box>
    </Box>
  );
};

const PineappleSteps = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [details, setDetails] = useState<any>();
  const [splitAddressOptions, setSplitAddressOptions] = useState<any>();
  const [file, setFile] = useState<any>();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSaveDetails = (patternDetails: any) => {
    setDetails(patternDetails);
    handleNext();
  };

  const handleProcessData = (splitOption: any, file: any) => {
    setSplitAddressOptions(splitOption);
    setFile(file);
    handleNext();
  };

  const handleCreateNew = () => {
    setDetails(null);
    setSplitAddressOptions(null);
    setFile(null);
    setActiveStep(0);
  };

  return (
    <Box marginTop={3}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          return (
            <Step key={label}>
              <StepLabel>
                <Typography variant="body2">{label}</Typography>
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === 0 ? (
        <SetupPineapple
          initialState={details}
          handleNext={(details: any) => handleSaveDetails(details)}
        />
      ) : activeStep === 1 ? (
        <ProcessRawDataStep
          patternName={details.name}
          details={details.pattern}
          handleNext={(splitOption: any, file: any) =>
            handleProcessData(splitOption, file)
          }
          handleBack={handleBack}
        />
      ) : (
        <ReviewAndCompleteStep
          splitAddressOption={splitAddressOptions}
          file={file}
          handleProcessStrawberry={() => console.log("process strawberry")}
          handleNew={handleCreateNew}
        />
      )}
    </Box>
  );
};

const steps = [
  "Setup Pineapple Details",
  "Process Raw Data",
  "Review and Complete",
];

const Pineapple = () => {
  const { setSearchPlaceholder } = useContext(SearchContext);

  useEffect(() => {
    setSearchPlaceholder("Search Pineapple Pattern...");
  }, [setSearchPlaceholder]);

  return (
    <Container>
      <Typography variant="h4">Create Pineapple Uniform</Typography>

      <PineappleSteps />
    </Container>
  );
};
export default Pineapple;
