import { Box, Breadcrumbs, Button, Container, Step, StepContent, StepLabel, Stepper, Typography } from "@material-ui/core";
import { NavigateNextOutlined } from "@material-ui/icons";
import { useEffect, useState } from "react";
import useCountries from "../../queries/useCountries";
import useIVSIForms from "../../queries/useForms";
import usePattenTypes from "../../queries/usePatternTypes";
import { PatternBindings } from "../../types/interfaces/PatternBinding";
import { PatternDetails } from "../../types/interfaces/PatternDetails";
import { Link } from "react-router-dom";
import PrimaryDetailsStep from "./pattern/PrimaryDetailsStep";
import SetupBindingStep from "./pattern/SetupBindingStep";
import ReviewPatternStep from "./pattern/ReviewPatternStep";
import { CompletedImage } from "../../assets/icons";

const Nav = () => {
  return (
    <Breadcrumbs separator={<NavigateNextOutlined fontSize="small" />} aria-label="breadcrumb">
      <Link color="primary" to="/patterns">
        <Typography color="primary">Patterns</Typography>
      </Link>
      <Typography color="inherit">New</Typography>
    </Breadcrumbs>
  );
};

const steps = ["Primary Details", "Pattern Binding", "Review and Save"];

const Content = () => {
  const [pageLoading, setPageLoading] = useState<boolean>(true);
  const { isLoading: countryLoading, data: countryData } = useCountries();
  const { isLoading: formLoading, data: formData } = useIVSIForms();
  const { isLoading: patternTypeLoading, data: patternTypeData } = usePattenTypes();
  const [activeStep, setActiveStep] = useState(0);
  const [details, setDetails] = useState<PatternDetails>({
    name: "",
    countryId: 0,
    formId: 0,
    patternId: 0,
  });

  const [submitting, setSubmitting] = useState<boolean>(false);

  const [bindings, setBindings] = useState<PatternBindings[]>(new Array<PatternBindings>());

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSaveDetails = (enteredDetails: PatternDetails) => {
    handleNext();
    setDetails(enteredDetails);
  };

  const handleSavePatternBindings = (patternBindings: PatternBindings[]) => {
    handleNext();
    setBindings(patternBindings);
  };

  const handleSubmitPattern = () => {
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      handleNext();
    }, 3000);
  };

  useEffect(() => {
    setPageLoading(countryLoading && formLoading && patternTypeLoading);
  }, [countryLoading, formLoading, patternTypeLoading]);

  if (pageLoading) {
    return <p>Loading...</p>;
  }

  return (
    <Box marginTop={5}>
      <Typography variant="h4">Create Pattern</Typography>
      <Box marginTop={5}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => {
            return (
              <Step key={label}>
                <StepLabel>
                  <Typography variant="body2">{label}</Typography>
                </StepLabel>
                <StepContent>
                  {activeStep === 0 ? (
                    <PrimaryDetailsStep
                      countries={countryData?.data?.countries}
                      forms={formData?.forms}
                      patternTypes={patternTypeData?.types}
                      initialState={details}
                      handleNext={handleSaveDetails}
                    />
                  ) : activeStep === 1 ? (
                    <SetupBindingStep
                      initialState={bindings}
                      handleBack={handleBack}
                      details={details}
                      countries={countryData?.data?.countries}
                      types={patternTypeData?.types}
                      forms={formData?.forms}
                      handleNext={handleSavePatternBindings}
                    />
                  ) : (
                    <ReviewPatternStep
                      handleBack={handleBack}
                      handleSubmit={handleSubmitPattern}
                      details={details}
                      bindings={bindings}
                      countries={countryData?.data?.countries}
                      types={patternTypeData?.types}
                      forms={formData?.forms}
                      innerLimit={15 - bindings.filter((binding) => binding.option.isSO).length}
                      submitting={submitting}
                    />
                  )}
                </StepContent>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length && (
          <Container>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Typography variant="h6">You've succesfully created a pattern, Bryan!</Typography>
              <Typography variant="body2">It’s time to use the pattern you created. Other users can use it to too!</Typography>
              <Box display="flex" marginY={5}>
                <Link to="/Pineapple">
                  <Button variant="contained" color="primary" style={{ marginRight: 16 }}>
                    Go to Pineapple Uniform
                  </Button>
                </Link>
                <Link to="/">
                  <Button variant="outlined" color="primary">
                    Back to home
                  </Button>
                </Link>
              </Box>
              <CompletedImage />
              {/* <Box width="70%">
              </Box>
              <Box width="30%">
              </Box> */}
            </Box>
          </Container>
        )}
      </Box>
    </Box>
  );
};

const CreatePattern = () => {
  return (
    <Container>
      <Nav />
      <Content />
    </Container>
  );
};

export default CreatePattern;
