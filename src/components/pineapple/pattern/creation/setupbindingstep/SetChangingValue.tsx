import { Box, FormControl, Typography } from "@material-ui/core";
import { BootstrapInput, StyledInputLabel } from "../../../../../custom/input";
import { useValidation } from "../../../../../hooks";
import { ChangingValueOption } from "../../../../../types/interfaces";
import { SetValueValidation } from "../../../../../types/type";
import { bindingValueValidation } from "../../../../../helpers";

type ChangingValueProps = {
  canOffset: boolean;
  needSheet: boolean;
  changingValue: ChangingValueOption;
  setChangingValue: Function;
  validation: SetValueValidation;
};

const SetChangingValue = ({ canOffset, changingValue, setChangingValue, needSheet, validation }: ChangingValueProps) => {
  const sheetNameIsValid = useValidation(validation.sheetNameRequired, () => bindingValueValidation.validateSheetName(changingValue.findSheet));
  const searchKeywordIsValid = useValidation(validation.searchKeywordRequired, () => bindingValueValidation.validateSearchKeyword(changingValue.searchKeyword));
  const columnOffsetIsValid = useValidation(validation.columnOffsetRequired, () => bindingValueValidation.validateOffsetColumn(changingValue.offset.column));
  const rowOffsetIsValid = useValidation(validation.rowOffsetRequired, () => bindingValueValidation.validateOffsetRow(changingValue.offset.row));

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

export default SetChangingValue;