import { Breadcrumbs } from "@material-ui/core";
import { Link } from "react-router-dom";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import { NavigateNextOutlined } from '@material-ui/icons';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      height: '100%',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      background: 'white',
      overflow: 'auto'
    },
    dataContainer: {
      padding: '10px 0px'
    }
  }),
);


const Ivsi = () => {
  const classes = useStyles();

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



  return (
    <>
      <Nav/>
      <Paper className={classes.dataContainer} elevation={0}>
        <Toolbar>
          <Typography variant="h5">IVSI Forms</Typography>
        </Toolbar>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Name
                </TableCell>
                <TableCell>
                  Description
                </TableCell>
                <TableCell>
                  Upload Info
                </TableCell>
                <TableCell>
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
      </Paper>
    
    </>
  )
}

export default Ivsi;