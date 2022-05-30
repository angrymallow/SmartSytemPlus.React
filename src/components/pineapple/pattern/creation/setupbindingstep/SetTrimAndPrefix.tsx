import { Box, Container, FormControl, MenuItem, Select } from "@material-ui/core";
import { BootstrapInput, StyledInputLabel } from "../../../../../custom/input";
import { useParseEnum } from "../../../../../helpers";
import { TrimLineValueEnum, TrimValueEnum } from "../../../../../types/enums";

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



export default SetTrimAndPrefix;