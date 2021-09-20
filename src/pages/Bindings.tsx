import { useEffect, useState } from "react";
import { Box, Breadcrumbs, IconButton, Popover} from "@material-ui/core";
import { Link } from "react-router-dom";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Table, TableCell, TableContainer, TableRow, Toolbar, Typography, Paper, TableBody} from "@material-ui/core";
import { NavigateNextOutlined, EditOutlined as EditIcon } from '@material-ui/icons';
import { colors } from "../themes/variables";
import { IHeader, TableHeader } from "../components/table/TableHeader";
import { useGlobalStyles } from "../themes/global.styles";
import { SizedButton } from "../custom/button/SizedButton";
import BindingDetails from "../components/forms/BindingDetails";

const tableHeaders: IHeader[] = [
  {
    id: 'shipper',
    label: 'Shipper',
    width: 'auto'
  },
  {
    id: 'address1',
    label: 'Address 1',
    width: 15,
  },
  {
    id: 'address2',
    label: 'Address 2',
    width: 15,
  },
  {
    id: 'address3',
    label: 'Address 3',
    width: 15
  },
  {
    id: 'address4',
    label: 'Address 4',
    width: 15,
  },
  {
    id: 'address5',
    label: 'Address 5',
    width: 15
  },
  {
    id: 'address6',
    empty: true,
  }
] 

export interface IBindings {
  index: number,
  shipper: string,
  address1: string,
  address2: string,
  address3: string,
  address4: string,
  address5: string,
} 

const initialState = {
  status: 200,
  data:  [
  {
    index: 0,
    shipper: 'AA JAPAN (PVT) LTD',
    address1: '1-28-21 HAYABUCHI TSUZUKI-KU YOKOHAMA-CITY',
    address2: 'KANAGAWA, 224-0025 KANAGAWA,JAPAN 224-0025',
    address3: 'TEL: 045-594-0507',
    address4: '-',
    address5: '-'
  },
  {
    index: 1,
    shipper: 'ACTION MOTORS ',
    address1: '1-6-28 TAKASAGO, KISARAZU, CHIBA',
    address2: 'JAPAN CHIBA, JAPAN',
    address3: 'TEL: 0438-97-7763',
    address4: '-',
    address5: '-'
  },
  {
    index: 2,
    shipper: 'AKSYS CORPORATION',
    address1: '1525, SANGA, IMIZU-SHI,',
    address2: 'TOYAMA, JAPAN',
    address3: 'TEL: 0134-64-7058',
    address4: '-',
    address5: '-'
  },
  {
    index: 3,
    shipper: 'ALIKULOVA RANO',
    address1: '359-1122, SAITAMAKEN, TOKOROZAWASHI,',
    address2: 'KOTOBUKICHO 6-8 GURAN DE BIGURU 101',
    address3: 'TEL 04-2907-9464',
    address4: '-',
    address5: '-'
   }
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





const Bindings = () => {

  const [bindings, setBindings] = useState<IBindings[]>([]); 
  const [status, setStatus] = useState('unchange');
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [open, setOpen] = useState(false);
  const [currentBinding, setCurrentBinding] = useState<IBindings>(); 

  const classes = useStyles();
  const globalClasses = useGlobalStyles();

  useEffect(() => {
    setBindings([...initialState.data]);
  }, [])


  const Nav = () => {
     return (
        <Breadcrumbs separator={<NavigateNextOutlined fontSize="small" />} aria-label="breadcrumb">
          <Link color="primary" to="/" >
            <Typography color="primary">Home</Typography>
            
          </Link>
          <Typography color="inherit">Bindings</Typography>
        </Breadcrumbs>
      )
  }

  const handleEdit = (index: number) => (event: any) => {
    setOpen(true);
    setAnchorEl(event.currentTarget);
    setCurrentBinding(bindings[index]);

  }

  const handleUpdateCurrentBinding = (binding: IBindings) => {
    const bindingList = [...bindings];
    bindingList[binding.index] = binding;
  
    setBindings(bindingList);
    handlePopoverClose();
    setStatus('pendingsave')
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
          <BindingDetails edit binding={currentBinding} handleCancel={handlePopoverClose} handleUpdate={(details: IBindings) => handleUpdateCurrentBinding(details)} ></BindingDetails>
        </Box>
      </Popover>
      <Paper className={classes.dataContainer} elevation={0}>
        <Toolbar disableGutters>
          <Typography variant="h5">Bindings</Typography>
        </Toolbar>
        <TableContainer className={globalClasses.table}>
          <Table>
            <TableHeader headers={tableHeaders}></TableHeader>
            <TableBody>
              {
                bindings.map((data: IBindings) => (
                  <TableRow key={data.shipper}>
                    <TableCell component="th" scope="row" className={globalClasses.rowHead}>
                      <Typography>
                         {data.shipper}
                      </Typography>
                    </TableCell>
                    <TableCell scope="row">
                      <Typography>
                         {data.address1}
                      </Typography>
                    </TableCell>
                    <TableCell scope="row">
                      <Typography>
                         {data.address2}
                      </Typography>
                    </TableCell>
                    <TableCell scope="row">
                      <Typography>
                         {data.address3}
                      </Typography>
                    </TableCell>
                   <TableCell scope="row">
                      <Typography>
                         {data.address4}
                      </Typography>
                    </TableCell>
                    <TableCell scope="row">
                      <Typography>
                         {data.address5}
                      </Typography>
                    </TableCell>
                    <TableCell align="left">
                      <IconButton onClick={handleEdit(data.index)}>
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
            <SizedButton variant="contained" className={classes.action} color="primary" >Save</SizedButton>
          </Box>
        ) : null
      }
    
    </>
  )
}

export default Bindings;