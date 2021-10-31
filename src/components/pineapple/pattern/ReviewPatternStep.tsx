import { useContext, useEffect, useState } from "react";
import { Box, Button, CircularProgress, FormControl, Typography } from "@material-ui/core";
// import { useFormik } from "formik";
import { PrimaryDetailsView } from "./PrimaryDetailsStep";
import { HeaderItem } from "./SetupBindingStep";
// import StyledInputLabel from "../../../custom/input/StyledInputLabel";
import BootstrapInput from "../../../custom/input/BootstrapInput";
import { LookupContext } from "../../../context";

function ReviewPatternStep(props: any) {
  const { handleBack, handleSubmit, details, bindings, innerLimit, submitting } = props;
  const lookup = useContext(LookupContext)

  const [detailsView, setDetailsView] = useState<any>({
    name: "",
    country: "",
    form: "",
    patternType: "",
  });

  const [innerCargo, setInnerCargo] = useState<number>(0);

  // const patternForm = useFormik({
  //   initialValues: {
  //     details,
  //     bindings,
  //     innerCargo: 0,
  //   },
  //   onSubmit: (values) => {
  //     alert(JSON.stringify(values, null, 2));
  //     handleSubmit(values);
  //   },
  // });

  useEffect(() => {
    setDetailsView({
      name: details.name,
      country: lookup?.countries?.find((country: any) => country.id === details.countryId)?.name,
      form: lookup?.forms?.find((form: any) => form.id === details.formId)?.name,
      patternType: lookup?.types?.find((type: any) => type.id === details.patternId)?.name,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleInnerCargoChange = (e: any) => {
    const newValue = e.target.value;

    if (newValue > innerLimit) {
      setInnerCargo(innerLimit);
      return;
    }
    if (newValue > 5) {
      setInnerCargo(5);
      return;
    }
    setInnerCargo(newValue);
  };

  return (
    <>
      <div>
        <Box width="75%" paddingY={3}>
          <Typography variant="h6">Primary Details</Typography>
          <PrimaryDetailsView details={detailsView} canEdit={false} />
          <Box paddingY={3}>
            <Typography variant="h6">Bindings</Typography>
            <Box display="flex" flexWrap="wrap">
              {bindings.map((binding: any) => (
                <div style={{ marginRight: "10px" }} key={binding.headerId}>
                  <HeaderItem binding={binding} noAction />
                </div>
              ))}
            </Box>
          </Box>
          {details.formId === 1 && (
            <Box paddingY={3}>
              <Typography variant="h6">Set Inner Cargo</Typography>
              <FormControl fullWidth>
                <BootstrapInput
                  fullWidth
                  type="number"
                  inputProps={{ min: 0, max: 5 }}
                  value={innerCargo}
                  onChange={handleInnerCargoChange}
                  id="column"
                />
              </FormControl>
            </Box>
          )}
        </Box>
      </div>
      {submitting ? (
        <Box display="flex">
          <Typography variant="body2" >
            Submitting Pattern, please wait...
          </Typography>
          <span>&nbsp;</span>
          <CircularProgress color="primary" size={18} />
        </Box>
      ) : (
        <>
          <Button variant="outlined" color="primary" style={{ marginRight: 16 }} onClick={handleBack}>
            Back
          </Button>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </>
      )}
    </>
  );
}

export default ReviewPatternStep;
