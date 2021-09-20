import { useEffect, useState } from "react";
import { Box, Breadcrumbs, IconButton, Popover, Switch, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Table, TableCell, TableContainer, TableRow, Toolbar, Typography, Paper, TableBody} from "@material-ui/core";
import { NavigateNextOutlined, EditOutlined as EditIcon } from '@material-ui/icons';
import { colors } from "../themes/variables";
import { IHeader, TableHeader } from "../components/table/TableHeader";
import { useGlobalStyles } from "../themes/global.styles";
import { SizedButton } from "../custom/button/SizedButton";

const tableHeaders: IHeader[] = [
  {
    id: 'name',
    label: 'Name',
    width: 20
  },
  {
    id: 'description',
    label: 'Description',
    width: 'auto',
  },
  {
    id: 'info',
    label: 'Upload Info',
    width: 20,
  },
  {
    id: 'status',
    label: 'Status',
    width: 'auto'
  },
  {
    id: 'edit',
    empty: true,
  }
] 
interface IIvsi {
  index: number,
  name: string,
  description: string,
  uploadedBy: string,
  uploadedDate: string,
  isActive: boolean,
} 

const initialState = {
  status: 200,
  data: [
    {
      index: 0,
      name: 'IVSI Default Form',
      description: 'Use this form if there is no standard IVSI form',
      uploadedBy: 'John Doe',
      uploadedDate: '08/20/2021 09:14 PM',
      isActive: true,
    },
    {
      index: 1,
      name: 'IVSI Asha Form',
      description: 'Use this form for Asha Customers, this includes some additional details, like chassis number invoice number etc.',
      uploadedBy: 'John Doe',
      uploadedDate: '08/20/2021 09:14 PM',
      isActive: false,
    },
    {
      index: 2,
      name: 'IVSI Asakusa Form',
      description: 'Use this form for Asukasa Customers, this includes some additional details.',
      uploadedBy: 'John Doe',
      uploadedDate: '08/20/2021 09:14 PM',
      isActive: true,
    },
    {
      index: 3,
      name: 'IVSI Asakusa Form 2',
      description: 'Use this form for Asukasa Customers, this includes some additional details.',
      uploadedBy: 'John Doe',
      uploadedDate: '08/20/2021 09:14 PM',
      isActive: true,
    },
  ]
}


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    table: { 
    },
    action: {
      marginRight: '20px'
    },
    root: {
      display: 'flex',
      height: '100%',
    },
    caption: {
      color: colors.black36,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      background: 'white',
      overflow: 'auto'
    },
    dataContainer: {
      padding: '10px 0px'
    },
  }),
);


const initialIvsiState: IIvsi = {
  description: "",
  index: 0,
  isActive: false,
  name: "",
  uploadedBy: "",
  uploadedDate: "",
}

const Ivsi = () => {

  const [ivsiList, setIvsiList] = useState<IIvsi[]>([]); 
  const [status, setStatus] = useState('unchange');
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [open, setOpen] = useState(false);
  const [currentIvsi, setCurrentIvsi] = useState<IIvsi>(initialIvsiState); 
  const [description, setDescription] = useState<string>('');

  const classes = useStyles();
  const globalClasses = useGlobalStyles();


  useEffect(() => {
    const origState = {...initialState};
    const ivsiNewList = [...origState.data];
    setIvsiList([...ivsiNewList]);
    
  }, [])


  const Nav = () => {
     return (
        <Breadcrumbs separator={<NavigateNextOutlined fontSize="small" />} aria-label="breadcrumb">
          <Link color="primary" to="/" >
            <Typography color="primary">Home</Typography>
            
          </Link>
          <Typography color="inherit">IVSI Setup</Typography>
        </Breadcrumbs>
      )
  }

  const handleChange = (index: number) => (e: any) => {
    const newList = [...ivsiList];
    const ivsiData = newList[index];

    ivsiData.isActive = !ivsiData.isActive;
    
    newList[index] = ivsiData;
    setIvsiList(newList);
    setStatus('pendingsave');
  }
  
  const handleSave = () => {
    console.log('ivsi form saving...');
  }


  const handleEdit = (ivsi: IIvsi) => (event: any) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => !prev);
    setCurrentIvsi(ivsi);
    setDescription(ivsi.description);
  };

  const handleUpdateDescription = (index: number, description: string) => {
    setOpen(false);
    const list = [...ivsiList];
    const item = list[index];
    item.description = description!;
    list[index] = item;
    setIvsiList(list);
    setStatus('pendingsave');
  }

  const handlePopoverClose = () => {
    setAnchorEl(null);
    setOpen(false);
  }

  return (
    <>
      <Nav/>
      <Popover
        id='popedit'
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Box p={3}> 
          <TextField id="description" fullWidth label="Description" multiline variant="outlined" value={description} onChange={(e) => setDescription(e.target.value)}/>
          <Box marginTop={2} display="flex" justifyContent="center"> 
            <SizedButton variant="outlined" color="primary" className={classes.action} onClick={() => setOpen(false)}>Cancel</SizedButton>
            <SizedButton variant="contained" color="primary" className={classes.action} onClick={() => handleUpdateDescription(currentIvsi?.index, description)}>Update</SizedButton>
          </Box>
        </Box>
      </Popover>
      <Paper className={classes.dataContainer} elevation={0}>
        <Toolbar disableGutters>
          <Typography variant="h5">IVSI Forms</Typography>
        </Toolbar>
        <TableContainer className={globalClasses.table}>
          <Table>
            <TableHeader headers={tableHeaders}></TableHeader>
            <TableBody>
              {
                ivsiList.map((data) => (
                  <TableRow key={data.name}>
                    <TableCell component="th" scope="row">
                      <Typography>
                         {data.name}
                      </Typography>
                      <Link to="/ivsi">
                        <Typography color="primary" className={globalClasses.link}>Download</Typography>
                      </Link>
                    </TableCell>
                    <TableCell scope="row">
                      <Typography>
                         {data.description}
                      </Typography>
                    </TableCell>
                    <TableCell scope="row">
                      <Typography>{data.uploadedBy}</Typography>
                      <Typography variant="caption" className={classes.caption}>{data.uploadedDate}</Typography>
                    </TableCell> 
                    <TableCell scope="row">
                      <Box display="flex" alignItems="center">
                        <Typography>
                          {data.isActive ? 'Active' : 'Inactive'}
                        </Typography>
                        <Switch
                            checked={data.isActive}
                            onChange={handleChange(data.index)}
                            color="primary"
                            name="checkedB"
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                          />
                      </Box>
                    </TableCell>
                    <TableCell align="left">
                      <IconButton onClick={handleEdit(data)}>
                        <EditIcon/>
                      </IconButton>
                    </TableCell>
                </TableRow>
                ))
              }
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      {
        status === 'pendingsave' ? (
          <Box display="flex" justifyContent="center" height="100px" alignItems="center">
            <SizedButton variant="contained" className={classes.action} color="primary" onCanPlayThrough={handleSave}>Save</SizedButton>
          </Box>
        ) : null
      }
    
    </>
  )
}

export default Ivsi;