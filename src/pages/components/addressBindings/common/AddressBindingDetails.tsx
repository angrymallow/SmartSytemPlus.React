import { Box, Button, createStyles, FormControl, makeStyles, TextField, Theme } from "@material-ui/core";
import { useFormik } from "formik"
import * as Yup from "yup";
import { SizedButton } from "../../../../custom/button/SizedButton";

type AddressBindingDetailsProps = {
  mode: "Add" | "Edit" | "View",
  handleAdd: Function
  data?: any,
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    form: {
      "& > *": {
        marginBottom: "20px",
      },
    },
  })
);



const AddressBindingDetails = (props: AddressBindingDetailsProps) => {

  const classes = useStyles();

  const formSchema = Yup.object({
    shipper: Yup.string().required(),
  });

  const form = useFormik({
    initialValues: {
      shipper: "",
      address1: "",
      address2: "",
      address3: "",
      address4: "",
      address5: "",
    },
    validationSchema: formSchema,
    onSubmit: (values) => {
      props.handleAdd(values);
    }
  });

  return (
    <>
    <form onSubmit={form.handleSubmit} className={classes.form}>
      <FormControl fullWidth>
        <TextField id="shipper" fullWidth 
          label="Shipper" size="small" 
          variant="outlined" 
          helperText="Type a unique name that can be easily identified." 
          value={form.values.shipper} 
          onChange={form.handleChange}/>
      </FormControl>
      <FormControl fullWidth>
        <TextField id="address1" fullWidth 
          label="Address 1"  
          variant="outlined" 
          value={form.values.address1} 
          onChange={form.handleChange}/>
      </FormControl>
      <FormControl fullWidth>
        <TextField id="address2" fullWidth 
          label="Address 2" 
          variant="outlined" 
          value={form.values.address2} 
          onChange={form.handleChange}/>
      </FormControl>
      <FormControl fullWidth>
        <TextField id="address3" fullWidth 
          label="Address 3" 
          variant="outlined" 
          value={form.values.address3} 
          onChange={form.handleChange}/>
      </FormControl>
      <FormControl fullWidth>
        <TextField id="address4" fullWidth 
          label="Address 4"
          variant="outlined" 
          value={form.values.address4} 
          onChange={form.handleChange}/>
      </FormControl>
      <FormControl fullWidth>
        <TextField id="address5" fullWidth 
          label="Address 5"
          variant="outlined" 
          value={form.values.address5} 
          onChange={form.handleChange}/>
      </FormControl>
      <Box component="div" display="flex" alignItems="center" justifyContent="center"  >
        <SizedButton type="submit" variant="contained" color="primary">Submit</SizedButton>
      </Box>
    </form>
    
    </>
  )
} 

export { AddressBindingDetails };