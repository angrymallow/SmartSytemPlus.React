import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";
import {
  Avatar,
  Box,
  ListItemAvatar,
  ListItemText,
  Container,
  Typography,
  List,
  ListItem,
  CircularProgress,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { DayIcon } from "../assets/icons";
import { StyledButton } from "../custom/button/StyledButton";
import { colors } from "../themes/variables";
import { useContext, useEffect } from "react";
import { SearchContext } from "../context/SearchContext";
import useLogs from "../queries/useLogs";
import { getAvatar } from "../helpers/avatar-helpers";
import { UserContext } from "../context/UserProvider";

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    infoContainer: {
      display: "flex",
      justifyContent: "space-between",
    },
    listTitle: {
      marginBottom: "30px",
    },
    listContainer: {
      background: colors.background,
      flexGrow: 0,
      borderRadius: "5px",
      height: "350px",
      // width: '320px',
    },
    primaryText: {
      fontWeight: 700,
    },
    secondaryText: {
      color: theme.palette.primary.main,
      fontWeight: 400,
    },
    linkText: {
      fontWeight: 400,
      color: theme.palette.primary.main,
    },
    setupButton: {
      width: "250px",
    },
  });
});

const Greetings = (props: any) => {
  const classes = useStyles();
  const { name } = props;
  return (
    <Container className={classes.infoContainer}>
      <Box display="flex" alignItems="center">
        <Typography variant="h5">{`Good day ${name}!`}</Typography>
      </Box>
      <DayIcon />
    </Container>
  );
};

const ActivitiesAndAnnouncements = () => {
  const { isLoading, data } = useLogs();
  const classes = useStyles();

  return (
    <>
      <Container className={classes.infoContainer}>
        <Container>
          <Typography variant="h6" className={classes.listTitle}>
            My Recent Activities
          </Typography>
        </Container>
        <Container>
          <Typography variant="h6" className={classes.listTitle}>
            Announcement Board
          </Typography>
        </Container>
      </Container>
      <Container className={classes.infoContainer}>
        {isLoading ? (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="350px"
            width="100%"
            overflow="none"
          >
            <CircularProgress />
          </Box>
        ) : (
          <>
            <Container>
              <p>There is no recent activity</p>
              {/* <List className={classes.listContainer}>
                {data.data.activities.map((activity: any) => {
                  return (
                    <ListItem key={activity.name}>
                      <ListItemText
                        classes={{
                          secondary: classes.secondaryText,
                          primary: classes.primaryText,
                        }}
                        primary={activity.name}
                        secondary={activity.time}
                      />
                    </ListItem>
                  );
                })}
                <Link to="/">
                  <ListItem>
                    <ListItemText
                      primary="See more"
                      className={classes.linkText}
                    />
                  </ListItem>
                </Link>
              </List> */}
            </Container>
            <Container>
              <p>There is no recent announcement</p>
              {/* <List className={classes.listContainer}>
                {data.data.announcements.map((announcement: any) => {
                  return (
                    <ListItem key={announcement.activity}>
                      <ListItemAvatar>
                        <Avatar>{getAvatar(announcement.avatar)}</Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        classes={{ primary: classes.primaryText }}
                        primary={announcement.name}
                        secondary={announcement.activity}
                      />
                    </ListItem>
                  );
                })}
                <Link to="/">
                  <ListItem>
                    <ListItemText
                      primary="See more"
                      className={classes.linkText}
                    />
                  </ListItem>
                </Link>
              </List> */}
            </Container>
          </>
        )}
      </Container>
    </>
  );
};

const SetupLinks = () => {
  const classes = useStyles();

  return (
    <Container className={classes.infoContainer}>
      <Container>
        <Box marginY={3}>
          <Link to="/ivsi">
            <StyledButton
              variant="outlined"
              color="primary"
              className={classes.setupButton}
            >
              IVSI Form Setup
            </StyledButton>
          </Link>
        </Box>
        <Link to="/bindings">
          <StyledButton
            variant="outlined"
            color="primary"
            className={classes.setupButton}
          >
            Binding Setup
          </StyledButton>
        </Link>
      </Container>
      <Container>
        <Box marginY={3}>
          <Link to="/patterns">
            <StyledButton variant="contained" color="primary">
              Go to Patterns
            </StyledButton>
          </Link>
        </Box>
      </Container>
    </Container>
  );
};

const Apple = () => {
  const { setSearch, setSearchIsHidden, setSearchPlaceholder } =
    useContext(SearchContext);

  const { user } = useContext<any>(UserContext);

  useEffect(() => {
    setSearchPlaceholder("Search T-kun...");
    setSearch("");
    setSearchIsHidden(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Greetings name={user.fullName.split(" ")[0]} />
      <ActivitiesAndAnnouncements />
      <SetupLinks />
    </>
  );
};

export default Apple;
