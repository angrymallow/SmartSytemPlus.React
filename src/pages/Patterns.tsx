import { Route, Switch, useRouteMatch } from "react-router-dom";
import CreatePattern from "../components/pineapple/CreatePattern";
import {
  Box,
  Breadcrumbs,
  Container,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import { PatternImage } from "../assets/icons";
import { Link } from "react-router-dom";
import { NavigateNextOutlined } from "@material-ui/icons";

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
    <Breadcrumbs
      separator={<NavigateNextOutlined fontSize="small" />}
      aria-label="breadcrumb"
    >
      <Typography color="primary">Patterns</Typography>
    </Breadcrumbs>
  );
};

const PatternList = () => {
  const classes = useStyles();
  return (
    <Container>
      <Nav />
      <Box marginTop={5}>
        <Typography variant="h4">Pattern List</Typography>
        <Box display="flex" alignItems="center">
          <Typography paragraph variant="body1" className={classes.description}>
            This is some description about Pineapple pattern, describe how
            pineapple pattern setup is important for the process. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua
          </Typography>
          <PatternImage className={classes.imageDesc} />{" "}
        </Box>
        <Link color="primary" to="/patterns/add">
          <Typography color="primary">Add New</Typography>
        </Link>
      </Box>
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
