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
  Paper,
  Button,
  TableContainer,
  TableCell,
  TableRow,
  TableHead,
  Toolbar,
  TableBody,
  Table,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { DayIcon } from "../assets/icons";
import { StyledButton } from "../custom/button/StyledButton";
import { colors } from "../themes/variables";
import { useCallback, useContext, useEffect, useState } from "react";
import { SearchContext } from "../context/SearchContext";
import useLogs from "../queries/useLogs";
import { getAvatar } from "../helpers/avatar-helpers";
import { UserContext } from "../context/UserProvider";
import { useDropzone } from "react-dropzone";
import * as XLSX from "xlsx";
import { TKun, useImportTkun } from "../hooks/tkun/useImportTkun";
import { SizedButton } from "../custom/button/SizedButton";
import useTkun from "../queries/tkun/useTkun";
import { TetsudaiKunList } from "./TetsudaiKun";

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
    dragActive: {
      backgroundColor: colors.black36,
    }
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
        <Box marginY={3}>
          <Link to="/tkun">
            <StyledButton variant="contained" color="primary">
              Tetsudai Kun List
            </StyledButton>
          </Link>
        </Box>
      </Container>
    </Container>
  );
};

type TetsudaiKunProps = {
  data: TKun[],
  handleBack: Function,
}
const TetsudaiKunUpload = (props: TetsudaiKunProps) => {
  
  const { data, handleBack } = props;

  const { isUploaded, isUploading, upload } = useTkun({load: false});
  
  return (
    <>
      <TetsudaiKunList data={data} toolbarHeaderText={isUploaded ? "T-Kun Uploaded Succesfully!" : "Upload T-Kun"} />
      {
        isUploading ? (<span>Uploading T-Kun...</span>) : 
        <Box component="div" display="flex" marginTop="30px" justifyContent="center">
          <SizedButton variant="outlined" color="primary" style={{marginRight: '20px'}} onClick={() => { handleBack()}}>Back</SizedButton>
          {
            !isUploaded && 
            <SizedButton variant="contained" color="primary" onClick={() => upload(data)}>Upload</SizedButton>
          }
        </Box>
      }
    </>
  )
}

const Apple = () => {
  const { setSearch, setSearchIsHidden, setSearchPlaceholder } =
    useContext(SearchContext);

  const [tKunUploaded, setTKunUploaded] = useState<boolean>(false);
  const { percentage, tkunData, doImport, success, failed, importing } = useImportTkun();
  const { user } = useContext<any>(UserContext);

  const onDrop = useCallback((acceptedFiles: any) => {
    doImport(acceptedFiles[0]);
  }, []);
  
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    noClick: true,
    onDrop,
    accept: ".csv",
    maxFiles: 1,
  });

  useEffect(() => {
    setSearchPlaceholder("Search T-kun...");
    setSearch("");
    setSearchIsHidden(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() =>  {
    setTKunUploaded(success);
  }, [success]);

  const handlecancelTkunUpload = () => {
    setTKunUploaded(false);
  }
  return (
    <>
    {
      tKunUploaded && !importing ? <TetsudaiKunUpload data={tkunData} handleBack={handlecancelTkunUpload}/> : (
      <div {...getRootProps()} style={{ width: "100%", height: "100%" }} className={isDragActive ? "dragActive": ""}>
        <input {...getInputProps()}></input>
        {
          importing && (
            <h1>Uploading T-Kun {percentage} %</h1>
          )
        }
        <Greetings name={user.fullName.split(" ")[0]} />
        <ActivitiesAndAnnouncements />
        <SetupLinks />
      </div>
      )
    }
     
    </>
  );
};

export default Apple;
