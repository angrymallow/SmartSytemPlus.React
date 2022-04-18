import { Box, Button, Container, Step, StepContent, StepLabel, Stepper, Typography } from "@material-ui/core";
import { useEffect, useState, createContext } from "react";
import { PatternBindings } from "../../../../types/interfaces/PatternBinding";
import { PatternDetails } from "../../../../types/interfaces/PatternDetails";
import { Link, useParams } from "react-router-dom";
import SetPrimaryDetailsStep from "./steps/primary-details/SetPrimaryDetailsStep";
import SetupBindingStep from "./steps/bindings/SetupBindingStep";
import ReviewPatternStep from "./steps/complete/ReviewPatternStep";
import { CompletedImage } from "../../../../assets/icons";
import { PageNavigation } from "../../../common";
import { LookupContext } from "../../../../context";
import { usePatterns } from "../../../../queries/patterns";
import { IPattern, IPatternPostData } from "../../../../types/interfaces";
import { usePattern } from "../../../../queries/patterns/usePatterns";
import { ValueTypeEnum } from "../../../../types/enums/ValueTypeEnum";

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

// Improve this line of code into lazy loading... this was generated on application load.

const CreatePatternContext = createContext<any>(null);
const { Provider } = CreatePatternContext;

// const PatternProvider = (props: any) => {
//   console.log("Pattern Provider Loaded")
//   const [readonly, setReadonly] = useState<boolean>(false);
//   return <Provider value={{readonly, setReadonly}}>{props.children}</Provider>
// }

// const Content = () => {
//   const [activeStep, setActiveStep] = useState(0);
//   const [pattern, setPattern] = useState<any>(initialPatternState);
//   const [bindings, setBindings] = useState<PatternBindings[]>(new Array<PatternBindings>());
//   const [details, setDetails] = useState<PatternDetails>({
//     name: "",
//     countryId: 0,
//     formId: 0,
//     patternId: 0,
//   });

//   const { add, isAdding: submitting, isAdded } = usePatterns();
//   const setPrimaryDetails = (countryId: number, name: string, typeId: number, formId: number) => {

//     setPattern({
//       countryId,
//       typeId,
//       formId,
//       name,
//     });
    
//     // Temporary
//     setDetails({
//       name,
//       countryId,
//       formId: formId,
//       patternId: typeId,
//     })

//     handleNext();
//   };

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleSavePatternBindings = (patternBindings: PatternBindings[]) => {
//     handleNext();
//     setBindings(patternBindings);
//   };

//   const handleSubmitPattern = () => {
//     const postData: IPatternPostData = {
//       patternName: details.name,
//       countryId: details.countryId,
//       ivsiFormId: details.formId,
//       patternTypeId: details.patternId,
//       patternValues: bindings.map((binding) => {
//         const bindingPostData = {
//           headerId: binding.headerId,
//           setValueType: binding.option.valueType,
//           fixValue: binding.option.valueType === 1 ? binding.option.defaultValue.value : "",
//           isSOHeader: binding.option.isSO,
//           trim: binding.option.trim,
//           prefix: binding.option.prefix,
//           isBind: false,
//           keyword: "",
//           sheetName: "",
//           colOffset: 0,
//           rowOffset: 0,
//         }

//         if (binding.option.valueType === 2) {
//           const changingValue = binding.option.changingValue;
//           bindingPostData.isBind = false;
//           bindingPostData.keyword = changingValue.searchKeyword;
//           bindingPostData.sheetName = changingValue.findSheet;
//           bindingPostData.colOffset = changingValue.offset.column;
//           bindingPostData.rowOffset = changingValue.offset.row;
//         };

//         return bindingPostData;
//       })
//     };

//     console.log(postData); 
//     add(postData);
   
//   };

//   useEffect(() => {
//     console.log("details changed", details);
//   }, [details])

//   useEffect(() => {
//     console.log('on load');
//   }, []);


//   useEffect(() => {
//     if (!submitting && isAdded) {
//       handleNext();
//     }
//   }, [isAdded, submitting])

//   return (
//     <Box marginTop={5}>
//       <Typography variant="h4">Create Pattern</Typography>
//       <Box marginTop={5}>
//         <Stepper activeStep={activeStep} orientation="vertical">
//           {steps.map((label, index) => {
//             return (
//               <Step key={label}>
//                 <StepLabel>
//                   <Typography variant="body2">{label}</Typography>
//                 </StepLabel>
//                 <StepContent>
//                   {activeStep === 0 ? (
//                     <SetPrimaryDetailsStep initialState={{ ...pattern }} handleSubmit={setPrimaryDetails} />
//                   ) : activeStep === 1 ? (
//                     <SetupBindingStep initialState={bindings} handleBack={handleBack} details={details} handleNext={handleSavePatternBindings} />
//                   ) : (
//                     <ReviewPatternStep
//                       handleBack={handleBack}
//                       handleSubmit={handleSubmitPattern}
//                       details={details}
//                       bindings={bindings}
//                       innerLimit={15 - bindings.filter((binding) => binding.option.isSO).length}
//                       submitting={submitting}
//                     />
//                   )}
//                 </StepContent>
//               </Step>
//             );
//           })}
//         </Stepper>
//         {activeStep === steps.length && (
//           <Container>
//             <Box display="flex" flexDirection="column" alignItems="center">
//               <Typography variant="h6">You've succesfully created a pattern, Bryan!</Typography>
//               <Typography variant="body2">It’s time to use the pattern you created. Other users can use it to too!</Typography>
//               <Box display="flex" marginY={5}>
//                 <Link to="/pineapple">
//                   <Button variant="contained" color="primary" style={{ marginRight: 16 }}>
//                     Go to Pineapple Uniform
//                   </Button>
//                 </Link>
//                 <Link to="/">
//                   <Button variant="outlined" color="primary">
//                     Back to home
//                   </Button>
//                 </Link>
//               </Box>
//               <CompletedImage />
//             </Box>
//           </Container>
//         )}
//       </Box>
//     </Box>
//   );
// };


type PatternProps = {
  mode: "Edit" | "Add" | "View",
  projectComponent: any,
}

const Pattern = (props: PatternProps) => {
  const { mode, projectComponent } = props; 
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
          current={mode}
        />
        {projectComponent}
        {/* TODO: Add Create or Edit Pattern Component here. */}
      </Container>
    </LookupContext.Provider>
  );
}


type PatternBindingDetailsProps = {
  mode: "Edit" | "Add",
  data: { details: PatternDetails, bindings: PatternBindings[] }, //TODO: handle initial state for add just add an empty object value
  onSubmitPattern: Function,
  isSubmitting: boolean,
}


const CreatePattern = () => {
  const { add, isAdding: submitting, isAdded } = usePatterns();
  
  return (
    <>
      <Pattern mode="Add" projectComponent={
        <PatternBindingDetails mode="Add" onSubmitPattern={add} data={{
          details: {
            id: 0,
            name: "",
            countryId: 0,
            patternId: 0,
            formId: 0,
          },
          bindings: new Array<PatternBindings>()
        }}
        isSubmitting={submitting}/>
      }/>
      {
        isAdded && (
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
        )
      }
    </>

  );
};

const EditPattern = () => {
  const { id } = useParams<{id: string}>();
  const { update, isUpdating: submitting, isUpdated, isLoading, pattern } = usePattern(id);

  if (isLoading || !pattern) {
    return <div>Loading...</div>;
  } 

  const patternData = {
    details: { 
        id: pattern.id,
        countryId: pattern.countryId,
        patternId: pattern.patternTypeId,
        formId: pattern.ivsiFormId,
        name: pattern.patternName,
      },
      bindings: pattern.bindings.map((binding) => {
      
        const bindingData: PatternBindings = {
          headerId: binding.headerId,
          header: {
            headerId: binding.headerId,
            canBind: binding.header.canBind,
            fixValues: !!binding.header.fixValues ? binding.header.fixValues.split(","): [],
            helperText: binding.header.helperText,
            name: binding.header.name,
            noDefaultValue: binding.header.noDefaultValue,
            occurence: binding.header.occurence
          },
          option: {
            defaultValue: {
              bind: false,
              value: ""
            },
            changingValue: {
              findSheet: "",
              offset: {
                column: 0,
                row: 0,
              },
              searchKeyword: ""
            },
            isSO: binding.option.isSo,
            prefix: binding.option.prefix,
            trim: binding.option.trim,
            valueType: binding.option.type
          }
        }

        console.log(binding.headerId, "header id");

        if (binding.option.type === 2) {
          bindingData.option.changingValue = {
              findSheet: binding.option.dynamicValue.findSheet,
              offset: {
                column: binding.option.dynamicValue.offsetColumn,
                row: binding.option.dynamicValue.offsetRow,
              },
              searchKeyword: binding.option.dynamicValue.searchKeyword
            };
        } else {
          bindingData.option.defaultValue = {
              bind: binding.option.fixValue.isBind,
              value: binding.option.fixValue.value
            }
        }

        return bindingData;
    })
  }

  return (
    <>
      <Pattern mode="Edit" projectComponent={
        <PatternBindingDetails mode="Edit" onSubmitPattern={update} data={patternData}
        isSubmitting={submitting}/>
      }/>
      {
        isUpdated && (
          <Container>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Typography variant="h6">Pattern succesfully updated!</Typography>
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
        )
      }
    </>

  );
};



const PatternBindingDetails = (props: PatternBindingDetailsProps) => {

  const { mode, data: initialState, onSubmitPattern, isSubmitting } = props;
  const [activeStep, setActiveStep] = useState(0);
  const [bindings, setBindings] = useState<PatternBindings[]>(initialState.bindings);
  const [details, setDetails] = useState<PatternDetails>(initialState.details);

  const setPrimaryDetails = (countryId: number, name: string, typeId: number, formId: number) => {
    
    setDetails({
      id: details.id,
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
      id: details.id,
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
    onSubmitPattern(postData);
    handleNext();
  };

  return (
    <Box marginTop={5}>
      <Typography variant="h4">{ `${mode} Pattern` }</Typography>
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
                    <SetPrimaryDetailsStep initialState={{ ...details }} handleSubmit={setPrimaryDetails} isReadonly={mode === "Edit"} />
                  ) : activeStep === 1 ? (
                    <SetupBindingStep initialState={bindings} handleBack={handleBack} details={details} handleNext={handleSavePatternBindings} />
                  ) : (
                    <ReviewPatternStep
                      handleBack={handleBack}
                      handleSubmit={handleSubmitPattern}
                      details={details}
                      bindings={bindings}
                      innerLimit={15 - bindings.filter((binding) => binding.option.isSO).length}
                      submitting={isSubmitting}
                    />
                  )}
                </StepContent>
              </Step>
            );
          })}
        </Stepper>
      </Box>
    </Box>
  );
}

export default CreatePattern;
export { EditPattern}
