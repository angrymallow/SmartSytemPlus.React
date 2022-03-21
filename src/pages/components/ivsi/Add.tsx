import { Box, Breadcrumbs, Paper, TextField, Toolbar, Typography } from "@material-ui/core";
import { NavigateNextOutlined } from "@material-ui/icons";
import { useFormik } from "formik";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import DropZone from "../../../components/common/DropZone";
import { SizedButton } from "../../../custom/button/SizedButton";
import { useForms } from "../../../queries/useForms";
import { useHistory } from "react-router-dom";
import { ExcelIcon } from "../../../assets/icons";

const Nav = () => {
    return (
      <Breadcrumbs separator={<NavigateNextOutlined fontSize="small" />} aria-label="breadcrumb">
        <Link color="primary" to="/" >
          <Typography color="primary">Home</Typography>
        </Link>
        <Link color="primary" to="/ivsi" >
          <Typography color="primary">IVSI</Typography>
        </Link>
        <Typography color="inherit">New</Typography>
      </Breadcrumbs>
    )
}

const AddIvsi = () => {

  const { isQuerying, addForm, isAdded } = useForms();

  useEffect(() => {
    if (isAdded) {
      history.push("/ivsi");
    }
  }, [isAdded]);
  const handleSave = (formData: any) => {
    addForm(formData);
  }

  const ivsiInfoSchema = Yup.object({
    name: Yup.string().required(),
    description: Yup.string().required(),
    file: Yup.mixed().required('File is required'),
  });

  const ivsiForm = useFormik({
    initialValues: {
      name: "",
      description: "",
      file: null,
    },
    validationSchema: ivsiInfoSchema,
    validateOnMount: true, 
    onSubmit: (values) => {
      console.log('submit triggered')
      handleSave(values);
    }
  });

  const history = useHistory();
  
  if (isQuerying) {
    <p>Is loading...</p>
  }
  return (
    <>
      <Nav/>
      <Paper elevation={0}>
        <Toolbar disableGutters>
          <Typography variant="h5">New IVSI Form</Typography>
        </Toolbar>
        <Box component="div" marginBottom="30px">
          <Typography variant="body1">Form is used when creating Strawberry output.</Typography>
        </Box>
        <form onSubmit={ivsiForm.handleSubmit}>
          <Box component="div" marginBottom="25px">
            <TextField id="name" fullWidth label="Name" variant="outlined" value={ivsiForm.values.name} onChange={ivsiForm.handleChange}/>
            <Typography variant="caption" color="error">{ivsiForm.errors.name}</Typography>
          </Box>
          <Box component="div" marginBottom="25px">
            <TextField id="description" fullWidth label="Description" multiline variant="outlined" value={ivsiForm.values.description} onChange={ivsiForm.handleChange}/>
            <Typography variant="caption" color="error">{ivsiForm.errors.description}</Typography>
          </Box>
          <DropZone type="button" handleSelectFile={(file: any) => {ivsiForm.setFieldValue("file", file)}} file={ivsiForm.values.file}/>
          <Typography variant="caption" color="error">{ivsiForm.errors.file}</Typography>
          <Box display="flex" justifyContent="center" height="100px" alignItems="center">
            <SizedButton type="submit" variant="contained" color="primary">Add</SizedButton>
          </Box>
        </form>
      </Paper>
    </>
  )
}

export default AddIvsi;