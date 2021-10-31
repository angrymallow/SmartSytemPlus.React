import { Box, Button, Container, Step, StepContent, StepLabel, Stepper, Typography } from "@material-ui/core";
import { useState } from "react";
import { PatternBindings } from "../../types/interfaces/PatternBinding";
import { PatternDetails } from "../../types/interfaces/PatternDetails";
import { Link } from "react-router-dom";
import PrimaryDetailsStep from "./pattern/PrimaryDetailsStep";
import SetupBindingStep from "./pattern/SetupBindingStep";
import ReviewPatternStep from "./pattern/ReviewPatternStep";
import { CompletedImage } from "../../assets/icons";
import { PageNavigation } from "../common";
import { LookupContext } from "../../context";
import { useLookup } from "../../queries/patterns";
import { IPattern } from "../../types/interfaces";

const steps = ["Primary Details", "Pattern Binding", "Review and Save"];
const initialPatternState: IPattern = {
  id: 0,
  name: "",
  formId: 0,
  typeId: 0,
  countryId: 0,
  addedBy: 0,
  addedDate: "",
  updatedBy: 0,
  updatedDate: "",
  bindings: [],
};

const Content = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [pattern, setPattern] = useState<IPattern>(initialPatternState);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [bindings, setBindings] = useState<PatternBindings[]>(new Array<PatternBindings>());

  const [details, setDetails] = useState<PatternDetails>({
    name: "",
    countryId: 0,
    formId: 0,
    patternId: 0,
  });

  const setPrimaryDetails = (countryId: number, name: string, typeId: number, formId: number) => {
    setPattern({
      ...pattern,
      countryId,
      typeId,
      formId,
      name,
    });
    handleNext();

    // Temporary
    setDetails({
      name,
      countryId,
      formId: formId,
      patternId: typeId,
    })

    console.log("after set primary details", details);
  };

  // const setBindings2 = (bindings: IPatternBinding[]) => {
  //   setPattern({
  //     ...pattern,
  //     bindings: [...bindings],
  //   });
  // };

  // const setInnerCargo = (innerCargo: number) => {
  //   setPattern({
  //     ...pattern,
  //     innerCargo,
  //   });
  // };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
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
                    <PrimaryDetailsStep initialState={{ ...pattern }} handleSubmit={setPrimaryDetails} />
                  ) : activeStep === 1 ? (
                    <SetupBindingStep initialState={bindings} handleBack={handleBack} details={details} handleNext={handleSavePatternBindings} />
                  ) : (
                    <ReviewPatternStep
                      handleBack={handleBack}
                      handleSubmit={handleSubmitPattern}
                      details={details}
                      bindings={bindings}
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
                <Link to="/pineapple">
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
  const { isLoading, data } = useLookup();

  if (isLoading || !data) {
    return <p>Loading...</p>;
  }

  return (
    <LookupContext.Provider value={{ countries: data?.countries, forms: data?.forms, types: data?.types }}>
      <Container>
        <PageNavigation
          links={{
            to: "/patterns",
            text: "Patterns",
          }}
          current="Create"
        />
        <Content />
      </Container>
    </LookupContext.Provider>
  );
};

export default CreatePattern;
