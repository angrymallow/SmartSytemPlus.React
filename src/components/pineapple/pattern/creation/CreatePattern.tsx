import { Box, Button, Container, Step, StepContent, StepLabel, Stepper, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { PatternBindings } from "../../../../types/interfaces/PatternBinding";
import { PatternDetails } from "../../../../types/interfaces/PatternDetails";
import { Link } from "react-router-dom";
import SetPrimaryDetailsStep from "./steps/primary-details/SetPrimaryDetailsStep";
import SetupBindingStep from "./steps/bindings/SetupBindingStep";
import ReviewPatternStep from "./steps/complete/ReviewPatternStep";
import { CompletedImage } from "../../../../assets/icons";
import { PageNavigation } from "../../../common";
import { LookupContext } from "../../../../context";
import { usePatterns } from "../../../../queries/patterns";
import { IPattern, IPatternPostData } from "../../../../types/interfaces";
import { PatternBindingsService } from "../../../../services/patterns-services";

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

const steps = ["Primary Details", "Pattern Binding", "Review and Save"];
const Content = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [pattern, setPattern] = useState<any>(initialPatternState);
  const [bindings, setBindings] = useState<PatternBindings[]>(new Array<PatternBindings>());
  const [details, setDetails] = useState<PatternDetails>({
    name: "",
    countryId: 0,
    formId: 0,
    patternId: 0,
  });

  const { add, isAdding: submitting, isAdded } = usePatterns();
  const setPrimaryDetails = (countryId: number, name: string, typeId: number, formId: number) => {

    console.log(countryId, name, typeId, formId, "values of primary details on submit")
    setPattern({
      countryId,
      typeId,
      formId,
      name,
    });
    
    // Temporary
    setDetails({
      name,
      countryId,
      formId: formId,
      patternId: typeId,
    })

    handleNext();
  };

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
    const postData: IPatternPostData = {
      patternName: details.name,
      countryId: details.countryId,
      ivsiFormId: details.formId,
      patternTypeId: details.patternId,
      patternValues: bindings.map((binding) => {
        const bindingPostData = {
          headerId: binding.headerId,
          setValueType: binding.option.valueType,
          fixValue: binding.option.valueType === 1 ? binding.option.defaultValue.value : "",
          isSOHeader: binding.option.isSO,
          trim: binding.option.trim,
          prefix: binding.option.prefix,
          isBind: false,
          keyword: "",
          sheetName: "",
          colOffset: 0,
          rowOffset: 0,
        }

        if (binding.option.valueType === 2) {
          const changingValue = binding.option.changingValue;
          bindingPostData.isBind = false;
          bindingPostData.keyword = changingValue.searchKeyword;
          bindingPostData.sheetName = changingValue.findSheet;
          bindingPostData.colOffset = changingValue.offset.column;
          bindingPostData.rowOffset = changingValue.offset.row;
        };

        return bindingPostData;
      })
    };

    console.log(postData); 
    add(postData);
   
  };

  useEffect(() => {
    console.log("details changed", details);
  }, [details])

  useEffect(() => {
    console.log('on load');
  }, []);


  useEffect(() => {
    if (!submitting && isAdded) {
      handleNext();
    }
  }, [isAdded, submitting])

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
                    <SetPrimaryDetailsStep initialState={{ ...pattern }} handleSubmit={setPrimaryDetails} />
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
            </Box>
          </Container>
        )}
      </Box>
    </Box>
  );
};

const CreatePattern = () => {
  const { lookup } = usePatterns();

  if (lookup.loading || !lookup.data) {
    return <p>Loading...</p>;
  }

  return (
    <LookupContext.Provider value={lookup.data}>
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
