import { Box, Checkbox, FormControlLabel, MenuItem, TextField } from "@material-ui/core";
import { useValidation } from "../../../../../hooks";
import { DefaultValueOption } from "../../../../../types/interfaces";
import { SetValueValidation } from "../../../../../types/type";
import { bindingValueValidation } from "../../../../../helpers";

const SetFixValue = (props: any) => {
  const {
    defaultValue,
    setDefaultValue,
    valueSelections,
    canBind,
    validation,
  }: {
    defaultValue: DefaultValueOption;
    setDefaultValue: Function;
    valueSelections?: string[];
    canBind?: boolean;
    validation: SetValueValidation;
  } = props;

  const isValid = useValidation(validation.defaultValueRequired, () => bindingValueValidation.validateDefaultValue(defaultValue.value) || defaultValue.bind);

  const handleBindOptionChange = (e: any) => {
    const isBinded = e.target.checked;
    setDefaultValue({
      ...defaultValue,
      value: isBinded ? "" : defaultValue.value,
      bind: isBinded,
    });
  };

  const handleDefaultValueChange = (e: any) => {
    setDefaultValue({
      ...defaultValue,
      value: e.target.value,
    });
  };

  if (valueSelections?.length) {
    return (
      <TextField
        id="select-default-value"
        fullWidth
        variant="outlined"
        select
        placeholder="Select Default Value"
        error={!isValid}
        helperText={!isValid ? "Please select a default value" : ""}
        value={defaultValue.value}
        onChange={handleDefaultValueChange}
        autoComplete="off"
      >
        {valueSelections?.map((value: any) => (
          <MenuItem key={value} value={value}>
            {value}
          </MenuItem>
        ))}
      </TextField>
    );
  } else {
    return (
      <Box>
        {canBind ? (
          <FormControlLabel
            style={{ width: "100%" }}
            control={
              <Checkbox color="primary" inputProps={{ "aria-label": "controlled" }} checked={defaultValue.bind} onChange={handleBindOptionChange} />
            }
            label="Bind Address"
          />
        ) : null}
        <TextField
          fullWidth
          variant="outlined"
          disabled={defaultValue.bind}
          placeholder={defaultValue.bind ? "Address binded. Uncheck binding to enter a value" : "Enter Default Value"}
          id="default-value"
          value={defaultValue.value}
          error={validation?.defaultValueRequired && !defaultValue.value}
          helperText={validation?.defaultValueRequired && !defaultValue.value ? "Please enter a default value" : ""}
          onChange={handleDefaultValueChange}
          autoComplete="off"
        />
      </Box>
    );
  }
};

export default SetFixValue