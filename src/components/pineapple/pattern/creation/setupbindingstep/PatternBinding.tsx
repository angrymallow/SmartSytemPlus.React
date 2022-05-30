import { useEffect, useState } from "react";
import { useBindingSetValueValidation, useValidation } from "../../../../../hooks";
import { TrimValueEnum, ValueTypeEnum, TrimLineValueEnum, PatternTypeEnum, ValueSourceEnum } from "../../../../../types/enums";
import { bindingValueValidation } from "../../../../../helpers";
import { Header } from "../../../../../types/interfaces/Header";
import { ChangingValueOption, DefaultValueOption } from "../../../../../types/interfaces/HeaderValueOption";
import { PatternBindings } from "../../../../../types/interfaces/PatternBinding";
import { Box, Button, Container, Typography } from "@material-ui/core";
import SelectHeader from "./SelectHeader";
import SetValue from "./SetValue";
import SetTrimAndPrefix from "./SetTrimAndPrefix";
import { SearchImage } from "../../../../../assets/icons";

type PatternBindingProps = {
  initialState: PatternBindings;
  patternType: PatternTypeEnum;
  transactionType: "add" | "update";
  saveBinding: Function;
  headers: Header[];
  cancelUpdate: Function;
};

const PatternBinding = (props: PatternBindingProps) => {
  const { initialState, patternType, transactionType, headers, saveBinding, cancelUpdate } = props;

  const [header, setHeader] = useState<Header>(initialState.header);
  const [isSO, setIsSO] = useState<boolean>(initialState.option.isSO);
  const [defaultValue, setDefaultValue] = useState<DefaultValueOption>(initialState.option.defaultValue);
  const [changingValue, setChangingValue] = useState<ChangingValueOption>(initialState.option.changingValue);
  const [valueType, setValuetype] = useState<ValueTypeEnum>(initialState.option.valueType);
  const [trim, setTrim] = useState<TrimValueEnum | TrimLineValueEnum>(initialState.option.trim);
  const [prefix, setPrefix] = useState<string>(initialState.option.prefix);
  const [bindableHeaders, setBindableHeaders] = useState<Header[]>([]);

  const validation = useBindingSetValueValidation(patternType, valueType);
  const sheetNameIsValid = useValidation(validation.sheetNameRequired, () => bindingValueValidation.validateSheetName(changingValue.findSheet));
  const searchKeywordIsValid = useValidation(validation.searchKeywordRequired, () =>
    bindingValueValidation.validateSearchKeyword(changingValue.searchKeyword)
  );
  const columnOffsetIsValid = useValidation(validation.columnOffsetRequired, () =>
    bindingValueValidation.validateOffsetColumn(changingValue.offset.column)
  );
  const rowOffsetIsValid = useValidation(validation.rowOffsetRequired, () => bindingValueValidation.validateOffsetRow(changingValue.offset.row));
  const defaultValueIsValid = useValidation(
    validation.defaultValueRequired,
    () => bindingValueValidation.validateDefaultValue(defaultValue.value) || defaultValue.bind
  );

  useEffect(() => {
    if (transactionType === "add") {
      setValuetype(header.noDefaultValue ? ValueTypeEnum.changing : ValueTypeEnum.fix);
    }
  }, [header, transactionType]);

  useEffect(() => {
    if (!!headers) {
      setBindableHeaders(headers.filter((header) => header.valueSource === ValueSourceEnum.Dynamic).sort((a, b) => a.headerId - b.headerId));
    }
  }, [headers])

  const handleAddHeader = () => {
    saveBinding({ headerId: header?.headerId, header, option: { valueType, defaultValue, changingValue, trim, isSO, prefix } });
  };

  const handleCancelUpdate = () => {
    cancelUpdate();
  };

  return (
    <Box>
      <Container>
        <SelectHeader headers={bindableHeaders} header={header} setHeader={setHeader} isSO={isSO} setIsSO={setIsSO} disabled={transactionType === "update"} />
      </Container>
      {!!header?.headerId ? (
        <>
          <SetValue
            option={{
              canBind: header?.canBind,
              noDefaultValue: header?.noDefaultValue,
              valueSelections: header?.fixValues,
              canOffset: patternType === 3 || patternType === 2,
              needSheet: patternType === 1,
            }}
            defaultValue={defaultValue}
            setDefaultValue={setDefaultValue}
            valueType={valueType}
            setValueType={setValuetype}
            changingValue={changingValue}
            setChangingValue={setChangingValue}
            validation={validation}
          />
          <SetTrimAndPrefix trimType={patternType === 2 ? "Line" : "GetDel"} trim={trim} setTrim={setTrim} prefix={prefix} setPrefix={setPrefix} />
        </>
      ) : (
        <Box height="300px" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          <SearchImage />
          <Typography variant="h6" color="primary">
            Search header name to setup value.
          </Typography>
        </Box>
      )}
      <Box marginTop={5} display="flex" justifyContent="flex-end">
        {transactionType === "update" ? (
          <Button variant="outlined" color="secondary" onClick={handleCancelUpdate} style={{ marginRight: "10px" }}>
            CANCEL
          </Button>
        ) : null}
        <Button
          variant="contained"
          color="secondary"
          disabled={!(sheetNameIsValid && searchKeywordIsValid && columnOffsetIsValid && rowOffsetIsValid && defaultValueIsValid)}
          onClick={handleAddHeader}
        >
          {`${transactionType.toUpperCase()} HEADER`}
        </Button>
      </Box>
    </Box>
  );
};
export default PatternBinding;
