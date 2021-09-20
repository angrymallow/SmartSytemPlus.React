import { useEffect, useState } from "react";
import { Box, createStyles, FormControl, makeStyles, Theme, Typography } from "@material-ui/core";
import { SizedButton } from "../../custom/button/SizedButton";
import { BootstrapInput, StyledInputLabel } from "../../custom/input";
import { IBindings } from "../../pages/Bindings";

interface BindingDetailsProps {
   edit: boolean, 
   binding: IBindings, 
   handleUpdate: Function, 
   handleCancel: Function 
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: '450px',
      display: 'flex',
      flexDirection: 'column',
    },
    action: {
      marginRight: '15px'
    },
  }),
);


const initialState = {
  index: 0,
  shipper: '',
  address1: '',
  address2: '',
  address3: '',
  address4: '',
  address5: '',
}

const BindingDetails = (props: any) => {
  const { edit, binding, handleUpdate, handleCancel }: BindingDetailsProps = props;
  const [details, setDetails] = useState<IBindings>(initialState);

  const classes = useStyles();

  useEffect(() => {
    setDetails(binding);
  }, [binding]);



  const handleChange = (source: string) =>  (e: any) => {
    setDetails({...details, [source]: e.target.value});
  }

  return (    
    <form className={classes.container}>
      <Box mb={3}>
        <Typography color="secondary" variant="h5">{details?.shipper}</Typography>
      </Box>
      <FormControl fullWidth>
        {
          !edit? <>
            <StyledInputLabel shrink htmlFor="shipper">
              Shipper
            </StyledInputLabel>
            <BootstrapInput fullWidth value={details?.shipper} onChange={handleChange("shipper")} placeholder="Enter Shipper's name" id="shippper"  />
          </> : null
        }
      </FormControl>
      <FormControl fullWidth>
          <StyledInputLabel shrink htmlFor="address1">
            Address 1
          </StyledInputLabel>
          <BootstrapInput fullWidth value={details?.address1} onChange={handleChange("address1")} placeholder="Enter Address 1" id="address1" />
      </FormControl>
      <FormControl fullWidth>
        <StyledInputLabel shrink htmlFor="address2">
          Address 2
        </StyledInputLabel>
        <BootstrapInput fullWidth value={details?.address2} onChange={handleChange("address2")} placeholder="Enter Address 2" id="address2"  />
      </FormControl>
      <FormControl fullWidth>
        <StyledInputLabel shrink htmlFor="address3">
          Address 3
        </StyledInputLabel>
        <BootstrapInput fullWidth value={details?.address3} onChange={handleChange("address3")} placeholder="Enter Address 3" id="address3"  />
      </FormControl>
      <FormControl fullWidth>
        <StyledInputLabel shrink htmlFor="address4">
          Address 4
        </StyledInputLabel>
        <BootstrapInput fullWidth value={details?.address4} onChange={handleChange("address4")} placeholder="Enter Address 4" id="address4"  />
      </FormControl>
      <FormControl fullWidth>
        <StyledInputLabel shrink htmlFor="address5">
          Address 5
        </StyledInputLabel>
        <BootstrapInput fullWidth value={details?.address5} onChange={handleChange("address5")} placeholder="Enter Address 5" id="address5"  />
      </FormControl>
      <Box display="flex" justifyContent="center">
        <SizedButton color="primary" variant="outlined" className={classes.action}onClick={() => handleCancel()}>Cancel</SizedButton>
        <SizedButton color="primary" variant="contained" className={classes.action}onClick={() => handleUpdate(details)}>{edit? 'Update' : 'Add'}</SizedButton>
      </Box>
    </form>
  )
}

export default BindingDetails;