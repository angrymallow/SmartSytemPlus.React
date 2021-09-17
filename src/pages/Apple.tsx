import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";
import { Avatar, Box, ListItemAvatar, ListItemText, Container, Typography, List, ListItem } from "@material-ui/core";
import { Link } from 'react-router-dom';
import { ReactComponent as DayIcon } from "../assets/icons/Day.svg";
import { ReactComponent as AppleAvatar } from '../assets/icons/AppleAvatar.svg';
import { ReactComponent as AvocadoAvatar } from '../assets/icons/AvocadoAvatar.svg';
import { ReactComponent as CoconutAvatar } from '../assets/icons/CoconutAvatar.svg';
import { ReactComponent as LemonAvatar } from '../assets/icons/LemonAvatar.svg';
import { ReactComponent as OrangeAvatar } from '../assets/icons/OrangeAvatar.svg';
import { ReactComponent as PearAvatar } from '../assets/icons/PearAvatar.svg';
import { StyledButton } from "../custom/buttons";
import { colors } from '../themes/variables';


const getAvatar = (fruit: string) => {
  switch(fruit) {
    case 'apple':
      return <AppleAvatar/>
    case 'orange':
      return <OrangeAvatar/>
    case 'avocado':
      return <AvocadoAvatar/>
    case 'coconut':
      return <CoconutAvatar/>
    case 'lemon': 
      return <LemonAvatar/>
    case 'pear':
      return <PearAvatar/>
    default:
      return <AppleAvatar/>
  }
}


const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {

    },
    infoContainer: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    listTitle: {
      marginBottom: '30px',
    },
    listContainer: {
      background: colors.background,
      borderRadius: '5px',
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
      fontWeight: 700,
      color: theme.palette.primary.main,
    },
    setupButton: {
      width: '250px',
    }
  })
})

const Apple = () => {

  const classes = useStyles();

  const activities = [
    {
      name: 'Updated IVSI Form',
      time: '5 minutes ago'
    },
    {
      name: 'Added new Address Binding',
      time: '1 hour ago'
    },
    {
      name: 'Application Started',
      time: '2 hours ago'
    }
  ];

  const announcements = [
    {
      name: 'John Doe',
      avatar: 'lemon',
      activity: 'Created Address Binding for DAL'
    },
    {
      name: 'Jane Doe',
      avatar: 'orange',
      activity: 'Uploaded new T- Kun data'
    },
    {
      name: 'Jason Farmer',
      avatar: 'coconut',
      activity: 'Jason recently joined the team, hooray!'
    },    
    {
      name: 'Promdi Boy',
      avatar: 'pear',
      activity: 'Created Strawberry'
    },    
  ]

  return (
    <>
      <Container className={classes.infoContainer}>
        <Box display='flex' alignItems="center">
          <Typography variant="h5">Good day John!</Typography>
        </Box>
        <DayIcon/>
      </Container >
      <Container className={classes.infoContainer}>
        <Container>
          <Typography variant="h6" className={classes.listTitle}>My Recent Activities</Typography>
          <List className={classes.listContainer}>
            {
              activities.map((activity) => {
                return (
                  <ListItem>
                    <ListItemText classes= {{secondary: classes.secondaryText, primary: classes.primaryText}}  primary={activity.name} secondary={activity.time}/>
                  </ListItem>
                )
              })
            }
            <Link to="/">
              <ListItem>
                <ListItemText primary="See more" className={classes.linkText}/>
              </ListItem>
            </Link>
          </List>
          <Box marginY={3}>
            <Link to="/ivsi">
              <StyledButton  variant="outlined" color="primary" className={classes.setupButton}>IVSI Form Setup</StyledButton>
            </Link>
          </Box>
          <StyledButton variant="outlined" color="primary" className={classes.setupButton}>Binding Setup</StyledButton>
        </Container>
        <Container component="div">
        </Container>
        <Container>
          <Typography variant="h6" className={classes.listTitle}>Announcement Board</Typography>
          <List className={classes.listContainer}>
            {
              announcements.map((announcement) => {
                return (
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        {getAvatar(announcement.avatar)}
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText classes= {{ primary: classes.primaryText}}  primary={announcement.name} secondary={announcement.activity}/>
                  </ListItem>
                )
              })
            }
            <Link to="/">
              <ListItem>
                <ListItemText primary="See more" className={classes.linkText}/>
              </ListItem>
            </Link>
          </List>
          <Box marginY={3}>
           <StyledButton variant="contained" color="primary">Go to Pattern Creation</StyledButton>
          </Box>
        </Container>
      </Container>
    </>
  )
}

export default Apple;