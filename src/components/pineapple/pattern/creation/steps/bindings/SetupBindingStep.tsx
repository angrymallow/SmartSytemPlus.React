import {
  Box,
  createStyles,
  IconButton,
  makeStyles,
  Theme,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Container,
  FormControl,
  RadioGroup,
  Radio,
  MenuItem,
  Select,
  Button,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab/";
import { DeleteOutlined, EditOutlined } from "@material-ui/icons";
import {useContext, useEffect, useState } from "react";
import { colors } from "../../../../../../themes/variables";
import { useHeaders, usePatterns } from "../../../../../../queries/patterns";
import { Header } from "../../../../../../types/interfaces/Header";
import { ChangingValueOption, DefaultValueOption } from "../../../../../../types/interfaces/HeaderValueOption";
import { TrimLineValueEnum, TrimValueEnum } from "../../../../../../types/enums/TrimValueEnum";
import { PatternTypeEnum } from "../../../../../../types/enums/PatternTypeEnum";
import { BootstrapInput, StyledInputLabel } from "../../../../../../custom/input";
import { useParseEnum } from "../../../../../../helpers/enum-helper";
import { EmptyHeaderImage, SearchImage } from "../../../../../../assets/icons";
import { PatternBindings } from "../../../../../../types/interfaces/PatternBinding";
import { SetValueValidation } from "../../../../../../types/type/SetValueValidation";
import { useBindingSetValueValidation } from "../../../../../../hooks";
import { ValueTypeEnum } from "../../../../../../types/enums/ValueTypeEnum";
import { useValidation } from "../../../../../../hooks/useValidation";
import {
  validateDefaultValue,
  validateOffsetColumn,
  validateOffsetRow,
  validateSearchKeyword,
  validateSheetName,
} from "../../../../../../helpers/binding-value-validation";
import { PrimaryDetailsView } from "../primary-details/SetPrimaryDetailsStep";
import { LookupContext } from "../../../../../../context";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    groupContainer: {
      backgroundColor: colors.background,
      height: "auto",
      display: "flex",
      padding: theme.spacing(3),
      flexDirection: "column",
      justifyContent: "center",
    },
    headerItemsContainer: {
      display: "flex",
      flexDirection: "column",
      overflowY: "auto",
      overflowX: "hidden",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      maxHeight: "700px",
      paddingTop: "50px",
    },
    headerItem: {
      backgroundColor: colors.primaryLight,
      height: "42px",
      borderRadius: "5px",
      display: "flex",
      padding: "15px",
      alignItems: "center",
      "& > *": {
        marginRight: "5px",
      },
      "&:hover button": {
        display: "flex",
      },
      marginBottom: "10px",
    },
    indicator: {
      height: "10px",
      width: "10px",
      borderRadius: "50%",
      border: "2px solid",
      borderColor: colors.primary,
    },
    headerEditIcon: {
      height: "5px",
      display: "none",
    },
  })
);

const HeaderItem = (props: any) => {
  const classes = useStyles();
  const { binding, onEdit, onRemove, noAction }: { binding: PatternBindings; onEdit: Function; onRemove: Function; noAction: boolean } = props;

  const handleEditHeader = () => {
    onEdit(binding.headerId);
  };

  const handleRemoveHeader = () => {
    onRemove(binding.headerId);
  };

  return (
    <div className={classes.headerItem}>
      <div className={classes.indicator}></div>
      <Typography variant="body2" color="primary">
        {binding.header.name}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {binding.option.valueType === ValueTypeEnum.fix ? "Fix" : "Changing"}
      </Typography>
      {binding.option.isSO ? (
        <div style={{backgroundColor: "white", paddingLeft: "5px", paddingRight: "5px",  borderRadius: "5px"}}>
          <Typography variant="body2" color="secondary">
            S/O
          </Typography>
        </div>
      ) : null}
      {noAction ? null : (
        <>
          <IconButton className={classes.headerEditIcon} size="small" onClick={handleEditHeader}>
            <EditOutlined color="inherit" />
          </IconButton>
          <IconButton className={classes.headerEditIcon} size="small" onClick={handleRemoveHeader}>
            <DeleteOutlined color="error" />
          </IconButton>
        </>
      )}
    </div>
  );
};

type ChangingValueProps = {
  canOffset: boolean;
  needSheet: boolean;
  changingValue: ChangingValueOption;
  setChangingValue: Function;
  validation: SetValueValidation;
};

const SetChangingValue = ({ canOffset, changingValue, setChangingValue, needSheet, validation }: ChangingValueProps) => {
  const sheetNameIsValid = useValidation(validation.sheetNameRequired, () => validateSheetName(changingValue.findSheet));
  const searchKeywordIsValid = useValidation(validation.searchKeywordRequired, () => validateSearchKeyword(changingValue.searchKeyword));
  const columnOffsetIsValid = useValidation(validation.columnOffsetRequired, () => validateOffsetColumn(changingValue.offset.column));
  const rowOffsetIsValid = useValidation(validation.rowOffsetRequired, () => validateOffsetRow(changingValue.offset.row));

  const handleSearchKeywordChange = (e: any) => {
    setChangingValue({
      ...changingValue,
      searchKeyword: e.target.value,
    });
  };

  const handleSheetNameChange = (e: any) => {
    setChangingValue({
      ...changingValue,
      findSheet: e.target.value,
    });
  };

  const handleRowOffsetChange = (e: any) => {
    setChangingValue({
      ...changingValue,
      offset: {
        ...changingValue.offset,
        row: e.target.value,
      },
    });
  };

  const handleColumnOffsetChange = (e: any) => {
    setChangingValue({
      ...changingValue,
      offset: {
        ...changingValue.offset,
        column: e.target.value,
      },
    });
  };

  return (
    <>
      <FormControl fullWidth>
        <StyledInputLabel shrink htmlFor="searchkey">
          Search Keyword
        </StyledInputLabel>
        <BootstrapInput
          fullWidth
          value={changingValue.searchKeyword}
          onChange={handleSearchKeywordChange}
          placeholder="Enter keyword"
          autoComplete="off"
          id="header-searchkey"
        />
        {!searchKeywordIsValid ? (
          <Typography variant="caption" color="error">
            *Search Keyword is required
          </Typography>
        ) : null}
      </FormControl>
      {needSheet ? (
        <FormControl fullWidth>
          <StyledInputLabel shrink htmlFor="sheetname">
            Sheet Name
          </StyledInputLabel>
          <BootstrapInput
            fullWidth
            value={changingValue.findSheet}
            onChange={handleSheetNameChange}
            placeholder="Indicate worksheet name to searched"
            id="header-searchsheetname"
            autoComplete="off"
          />
          {!sheetNameIsValid ? (
            <Typography variant="caption" color="error">
              *Find Sheet name is required
            </Typography>
          ) : null}
        </FormControl>
      ) : null}
      {canOffset ? (
        <Box display="flex" justifyContent="space-between">
          <FormControl style={{ width: "45%" }}>
            <StyledInputLabel shrink htmlFor="column">
              Column Offset
            </StyledInputLabel>
            <BootstrapInput
              fullWidth
              type="number"
              inputProps={{ min: 0, max: 20 }}
              value={changingValue.offset?.column}
              onChange={handleColumnOffsetChange}
              id="column"
            />
            {!columnOffsetIsValid ? (
              <Typography variant="caption" color="error">
                *Invalid column offset
              </Typography>
            ) : null}
          </FormControl>
          <FormControl style={{ width: "45%" }}>
            <StyledInputLabel shrink htmlFor="row">
              Row Offset
            </StyledInputLabel>
            <BootstrapInput
              fullWidth
              type="number"
              inputProps={{ min: 0, max: 20 }}
              value={changingValue.offset?.row}
              onChange={handleRowOffsetChange}
              id="row"
            />
            {!rowOffsetIsValid ? (
              <Typography variant="caption" color="error">
                *Invalid row offset
              </Typography>
            ) : null}
          </FormControl>
        </Box>
      ) : null}
    </>
  );
};

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

  const isValid = useValidation(validation.defaultValueRequired, () => validateDefaultValue(defaultValue.value) || defaultValue.bind);

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

  if (valueSelections) {
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

type SetTrimAndPrefixProps = {
  trimType: "GetDel" | "Line";
  trim: TrimValueEnum | TrimLineValueEnum | undefined;
  setTrim: Function;
  prefix: string | undefined;
  setPrefix: Function;
};

const SetTrimAndPrefix = ({ trimType, trim, setTrim, prefix, setPrefix }: SetTrimAndPrefixProps) => {
  const trimOptions = useParseEnum(trimType === "Line" ? TrimLineValueEnum : TrimValueEnum);

  const handleSelectTrim = (e: any) => {
    setTrim(e.target.value);
  };

  const handleChangePrefix = (e: any) => {
    setPrefix(e.target.value);
  };

  return (
    <Box marginTop={3}>
      <Container>
        <FormControl fullWidth>
          <StyledInputLabel shrink htmlFor="trim-value">
            Trim
          </StyledInputLabel>
          <Select id="trim-value" fullWidth input={<BootstrapInput />} value={trim} onChange={handleSelectTrim} name="trimId">
            {trimOptions?.map((trimOption: any) => (
              <MenuItem key={trimOption.id} value={trimOption.id}>
                {trimOption.display}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth style={{ marginTop: 10 }}>
          <StyledInputLabel shrink htmlFor="add-prefix">
            Add Prefix
          </StyledInputLabel>
          <BootstrapInput
            fullWidth
            value={prefix}
            onChange={handleChangePrefix}
            placeholder="Enter Prefix ex. [Engine No.] 12312312"
            id="header-searchkey"
          />
        </FormControl>
      </Container>
    </Box>
  );
};

//#region Set Value Component

const defaultValueMessage = "The value for this column will be set to the specified default value. ";
const dynamicValueMessage = "The value for this column will be set based on the dynamic condition applied. ";

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

    // eslint-disable-next-line eqeqeq
    if (selected == ValueTypeEnum.changing) {
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

//#endregion

//#region Select Header Component

const defaulHeaderState: Header = {
  headerId: 0,
  name: "",
};
const SelectHeader = (props: any) => {
  const { headers, header, setHeader, isSO, setIsSO, disabled } = props;

  if (!headers) return null;

  return (
    <>
      <Typography variant="body2">Search Header</Typography>
      <Box display="flex">
        <Autocomplete
          fullWidth
          disabled={disabled}
          style={{ marginTop: 4, width: "75%" }}
          options={headers}
          value={header}
          onChange={(e: any, value: Header | null) => {
            setHeader(!value ? defaulHeaderState : value);
          }}
          getOptionLabel={(option: Header) => option.name}
          renderInput={(params) => <TextField {...params} variant="outlined" />}
        />
        <FormControlLabel
          style={{ width: "25%", marginLeft: 5 }}
          control={<Checkbox value={isSO} onChange={(e) => setIsSO(e.target.checked)} color="primary" inputProps={{ "aria-label": "controlled" }} />}
          label="S/O Header"
        />
      </Box>
    </>
  );
};

//#endregion

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

  const validation = useBindingSetValueValidation(patternType, valueType);
  const sheetNameIsValid = useValidation(validation.sheetNameRequired, () => validateSheetName(changingValue.findSheet));
  const searchKeywordIsValid = useValidation(validation.searchKeywordRequired, () => validateSearchKeyword(changingValue.searchKeyword));
  const columnOffsetIsValid = useValidation(validation.columnOffsetRequired, () => validateOffsetColumn(changingValue.offset.column));
  const rowOffsetIsValid = useValidation(validation.rowOffsetRequired, () => validateOffsetRow(changingValue.offset.row));
  const defaultValueIsValid = useValidation(validation.defaultValueRequired, () => validateDefaultValue(defaultValue.value) || defaultValue.bind);

  useEffect(() => {
    if (transactionType === "add") {
      setValuetype(header.noDefaultValue ? ValueTypeEnum.changing : ValueTypeEnum.fix);
    }
  }, [header, transactionType]);

  const handleAddHeader = () => {
    saveBinding({ headerId: header?.headerId, header, option: { valueType, defaultValue, changingValue, trim, isSO, prefix } });
  };

  const handleCancelUpdate = () => {
    cancelUpdate();
  };

  return (
    <Box>
      <Container>
        <SelectHeader headers={headers} header={header} setHeader={setHeader} isSO={isSO} setIsSO={setIsSO} disabled={transactionType === "update"} />
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

const initialPatternBindingState: PatternBindings = {
  headerId: 0,
  header: {
    headerId: 0,
    name: "",
  },
  option: {
    changingValue: {
      searchKeyword: "",
      findSheet: "",
      offset: {
        column: 0,
        row: 0,
      },
    },
    defaultValue: {
      bind: false,
      value: "",
    },
    isSO: false,
    prefix: "",
    trim: 0,
    valueType: ValueTypeEnum.fix,
  },
};

const SetupBindingStep = (props: any) => {
  const { initialState, handleBack, handleNext, details } = props;
  const [detailsView, setDetailsView] = useState<any>({
    name: "",
    country: "",
    form: "",
    patternType: "",
  });

  const [bindings, setBindings] = useState<PatternBindings[]>(initialState);
  const [activeBinding, setActiveBinding] = useState<PatternBindings>(initialPatternBindingState);
  const [activeBindingTransaction, setActiveBindingTransaction] = useState<"add" | "update">("add");
  const [componentKey, setComponentKey] = useState<number>(0);
  const [headers, setHeaders] = useState<Header[]>(new Array<Header>());
  const [headerData, setHeaderData] = useState<any>();
  // const { isLoading: headersLoading, data: headerData } = useHeaders();
  
  const lookup = useContext(LookupContext);
  const classes = useStyles();
  const { headersLookup} = usePatterns();

  useEffect(() => {
    headersLookup.getHeaders();
  }, []);

  useEffect(() => {
    if (!!headersLookup.data) {
      setHeaderData({headers: headersLookup.data});
    }
  }, [headersLookup])

  useEffect(() => {

    const lookupValues = {
      name: details.name,
      country: lookup?.countries?.find((country: any) => country.id === details.countryId)?.name,
      form: lookup?.forms?.find((form: any) => form.id === details.formId)?.name,
      patternType: lookup?.types?.find((type: any) => type.id === details.patternId)?.name,
    }
    setDetailsView(lookupValues);

  }, [details, lookup?.countries, lookup?.forms, lookup?.types]);

  useEffect(() => {
    console.log("initial state", initialState);
    if (initialState?.length > 0) {
      const selectedHeaderIds = initialState?.map((initialHeader: any) => initialHeader.headerId);
      const filteredHeaders = headerData?.headers.filter((header: any) => !selectedHeaderIds.includes(header.headerId));
      setHeaders(filteredHeaders);
    } else {
      setHeaders(headerData?.headers);
    }
  }, [headerData, initialState]);

  const handleSaveBinding = (binding: PatternBindings) => {
    if (activeBindingTransaction === "add") {
      handleAddBinding(binding);
    } else {
      handleUpdateBinding(binding);
    }
  };

  const handleAddBinding = (binding: PatternBindings) => {
    const currentBindings = bindings;
    currentBindings.push(binding);
    setBindings(currentBindings);

    const newHeaders = headers.filter((h) => h.headerId !== binding.headerId);

    setHeaders(newHeaders);
    setActiveBinding(initialPatternBindingState);
    setComponentKey(componentKey + 1);
  };

  const handleUpdateBinding = (binding: PatternBindings) => {
    const toUpdateIndex = bindings.findIndex((b) => b.headerId === binding.headerId);
    const newBindings = bindings;
    newBindings[toUpdateIndex] = binding;

    setBindings(newBindings);
    setActiveBinding(initialPatternBindingState);
    setComponentKey(componentKey + 1);

    setActiveBindingTransaction("add");
  };

  const handleEditBinding = (headerId: number) => {
    setActiveBindingTransaction("update");
    const selectBinding = bindings.find((binding) => binding.headerId === headerId);

    if (selectBinding) {
      setActiveBinding(selectBinding);
      setComponentKey(componentKey + 1);
    }
  };

  const handleRemoveBinding = (headerId: number) => {
    const currentBindings = [...bindings];
    const newBindings = currentBindings.filter((binding) => binding.headerId !== headerId);
    setBindings(newBindings);

    const addHeader = headerData.headers.find((h: any) => h.headerId === headerId);
    const currentHeaders = [...headers];
    currentHeaders.push(addHeader);

    setHeaders(currentHeaders);

    if (activeBinding.headerId === headerId) {
      setActiveBinding(initialPatternBindingState);
      setComponentKey(componentKey + 1);
      setActiveBindingTransaction("add");
    }
  };

  const handleCancelEdit = () => {
    setActiveBindingTransaction("add");
    setActiveBinding(initialPatternBindingState);
    setComponentKey(componentKey + 1);
  };

  return (
    <>
      <Box display="flex" justifyContent="space-between">
        <Box marginTop={5} width="70%">
          <PrimaryDetailsView handleEdit={handleBack} details={detailsView} canEdit={true} />
          <Box marginTop={5}>
            {headersLookup.loading ? (
              <p>Loading list of headers...</p>
            ) : (
              <PatternBinding
                key={componentKey}
                initialState={activeBinding}
                patternType={details.patternId}
                transactionType={activeBindingTransaction}
                saveBinding={handleSaveBinding}
                headers={headers}
                cancelUpdate={handleCancelEdit}
              />
            )}
          </Box>
        </Box>
        <div className={classes.headerItemsContainer}>
          {bindings?.length <= 0 ? (
            <>
              <Typography variant="body2" align="center">
                Header list is currently empty
              </Typography>
              <EmptyHeaderImage />
            </>
          ) : (
            bindings.map((binding) => (
              <HeaderItem binding={binding} key={binding.headerId} onEdit={handleEditBinding} onRemove={handleRemoveBinding} />
            ))
          )}
        </div>
      </Box>
      <Button variant="outlined" color="primary" style={{ marginRight: 16 }} onClick={handleBack}>
        Back
      </Button>
      <Button variant="contained" color="primary" onClick={() => handleNext(bindings)}>
        Next
      </Button>
    </>
  );
};

export default SetupBindingStep;
export { HeaderItem };
