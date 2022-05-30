import { Box, Container, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from "@material-ui/core";
import { ValueTypeEnum } from "../../../../../types/enums";
import { ChangingValueOption, DefaultValueOption } from "../../../../../types/interfaces";
import { SetValueValidation } from "../../../../../types/type";
import useStyles from "../useStyles";
import SetChangingValue from "./SetChangingValue";
import SetFixValue from "./SetFixValue";

const defaultValueMessage = "The value for this column will be set to the specified default value. ";
const dynamicValueMessage = "The value for this column will be set based on the dynamic condition applied. ";

const initialDefaultValueState: DefaultValueOption = {
  bind: false,
  value: "",
};

const initialChangingValueState: ChangingValueOption = {
  findSheet: "",
  searchKeyword: "",
  offset: {
    column: 0,
    row: 0,
  },
};

interface SetValueOption {
  canBind: boolean;
  noDefaultValue: boolean;
  valueSelections: string[];
  canOffset: boolean;
  needSheet: boolean;
}

const SetValue = (props: any) => {
  const {
    option,
    defaultValue,
    setDefaultValue,
    changingValue,
    setChangingValue,
    valueType,
    setValueType,
    validation,
  }: {
    option: SetValueOption;
    defaultValue: DefaultValueOption;
    setDefaultValue: Function;
    changingValue: ChangingValueOption;
    setChangingValue: Function;
    valueType: ValueTypeEnum;
    setValueType: Function;
    validation: SetValueValidation;
  } = props;

  const classes = useStyles();

  const handleSelectValueOption = (e: any) => {
    const selected = e.target.value;
    if (selected === ValueTypeEnum.changing) {
      setValueType(ValueTypeEnum.changing);
      setDefaultValue(initialDefaultValueState);
    } else {
      setValueType(ValueTypeEnum.fix);
      setChangingValue(initialChangingValueState);
    }
  };

  return (
    <Box className={classes.groupContainer} marginTop={2}>
      <Typography variant="body2">Set Value</Typography>
      <FormControl component="fieldset" style={{ marginTop: 3 }}>
        <RadioGroup row aria-label="value-type" name="value-type" value={valueType} onChange={handleSelectValueOption}>
          {!option.noDefaultValue ? (
            <FormControlLabel value={ValueTypeEnum.fix} control={<Radio color="primary" />} label="Fix Value" labelPlacement="end" />
          ) : null}
          <FormControlLabel value={ValueTypeEnum.changing} control={<Radio color="primary" />} label="Changing Value" labelPlacement="end" />
        </RadioGroup>
      </FormControl>
      <Container>
        <FormControl fullWidth>
          <Typography variant="subtitle2" color="primary">
            {valueType === ValueTypeEnum.fix ? defaultValueMessage : dynamicValueMessage}
          </Typography>
          <Box marginTop={5}>
            {valueType === ValueTypeEnum.fix ? (
              <SetFixValue
                defaultValue={defaultValue}
                setDefaultValue={setDefaultValue}
                valueSelections={option.valueSelections}
                canBind={option.canBind}
                validation={validation}
              />
            ) : (
              <SetChangingValue
                needSheet={option.needSheet}
                canOffset={option.canOffset}
                changingValue={changingValue}
                setChangingValue={setChangingValue}
                validation={validation}
              />
            )}
          </Box>
        </FormControl>
      </Container>
    </Box>
  );
};

export default SetValue;