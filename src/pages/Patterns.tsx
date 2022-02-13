import { Route, Switch, useRouteMatch } from "react-router-dom";
import CreatePattern from "../components/pineapple/pattern/creation/CreatePattern";
import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  createStyles,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Theme,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { PatternImage } from "../assets/icons";
import { Link } from "react-router-dom";
import { NavigateNextOutlined } from "@material-ui/icons";
import { usePatterns } from "../queries/patterns";

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    description: {
      width: "75%",
    },
    imageDesc: {
      width: "25%",
    },
  });
});

const Nav = () => {
  return (
    <Breadcrumbs separator={<NavigateNextOutlined fontSize="small" />} aria-label="breadcrumb">
      <Typography color="primary">Patterns</Typography>
    </Breadcrumbs>
  );
};

const headings = ["Pattern Name", "Country", "IVSI Form Type", "Pattern Type", "Upload Info"];

export function PatternGrid() {
  const { isLoading, data: patterns, isError } = usePatterns();

  if (isLoading) {
    <p>Table is Loading...</p>;
  }

  if (isError) {
    <p>Error in loading table, please try again...</p>
  }
  return (
    <div>
      <Paper elevation={0}>
        <Toolbar disableGutters>
          <Typography variant="h5" style={{ marginRight: "2ch" }}>
            Pattern List
          </Typography>
          <Link to="patterns/add">
            <Button variant="outlined" color="primary">
              Add New *
            </Button>
          </Link>
        </Toolbar>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {headings.map((heading) => (
                  <TableCell key={heading}>{heading}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {patterns?.map((pattern) => (
                <TableRow key={pattern.id}>
                  <TableCell>
                    <Typography variant="body2">
                      {pattern.patternName}
                      <Link to="/">
                        <Typography variant="body2" color="primary">
                          View
                        </Typography>
                      </Link>
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{pattern.country}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{pattern.formType}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{pattern.patternType}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{pattern.addedBy}</Typography>
                    <Typography variant="caption">{pattern.addedDate}</Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}

const PatternList = () => {
  const classes = useStyles();
  return (
    <Container>
      <Nav />
      <Box marginTop={5}>
        <Typography variant="h4">Pattern List</Typography>
        <Box display="flex" alignItems="center">
          <Typography paragraph variant="body1" className={classes.description}>
            This is some description about Pineapple pattern, describe how pineapple pattern setup is important for the process. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
          </Typography>
          <PatternImage className={classes.imageDesc} />{" "}
        </Box>
      </Box>
      <PatternGrid />
    </Container>
  );
};

const Patterns = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <PatternList />
      </Route>
      <Route path={`${path}/add`}>
        <CreatePattern />
      </Route>
    </Switch>
  );
};

export default Patterns;
