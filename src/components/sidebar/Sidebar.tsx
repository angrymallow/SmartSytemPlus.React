import { Drawer, Toolbar, List, Divider, ListItem, ListItemText, ListItemIcon, Typography } from "@material-ui/core";
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as AppleIcon } from "../../assets/icons/Apple.svg";
import { ReactComponent as PineappleIcon } from "../../assets/icons/Pineapple.svg";
import { ReactComponent as StrawberryIcon } from "../../assets/icons/Strawberry.svg";
import { ReactComponent as BananaIcon } from "../../assets/icons/Banana.svg";
import { ReactComponent as AvocadoIcon } from "../../assets/icons/Avocado.svg";
import { ReactComponent as MelonIcon } from "../../assets/icons/Melon.svg";
import { ReactComponent as GrapesIcon } from "../../assets/icons/Grape.svg";
import useStyles from "./sidebar.styles";

export default function Sidebar() {  
  const location =  useLocation();

  const classes = useStyles();
  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Toolbar />
      <div className={classes.drawerContainer}>
        <List> 
          <Link to="/" >
            <ListItem classes={{root: classes.listItemRoot, selected: classes.selected }} button selected={location.pathname === "/"}>
              <ListItemIcon>
                <AppleIcon />
              </ListItemIcon>
              <ListItemText primary="Apple"/>
            </ListItem>
          </Link>
          <Link to="/pineapple">
            <ListItem classes={{root: classes.listItemRoot, selected: classes.selected }}  button selected={location.pathname === "/pineapple"}>
              <ListItemIcon>
                <PineappleIcon/>
              </ListItemIcon>
              <ListItemText primary="Pineapple" />
            </ListItem>
          </Link>
          <Link to="/strawberry">
            <ListItem classes={{root: classes.listItemRoot, selected: classes.selected }} button selected={location.pathname === "/strawberry"} >
              <ListItemIcon>
                <StrawberryIcon />
              </ListItemIcon>
              <ListItemText primary="Strawberry" />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
          <Link to="/banana">
            <ListItem classes={{root: classes.listItemRoot, selected: classes.selected }} button selected={ location.pathname === "/banana"}>
              <ListItemIcon>
                <BananaIcon />
              </ListItemIcon>
              <ListItemText primary="Banana" />
            </ListItem>
          </Link>
          <Link to="/avocado">
            <ListItem classes={{root: classes.listItemRoot, selected: classes.selected }} button selected={ location.pathname === "/avocado" }>
              <ListItemIcon>
                <AvocadoIcon />
              </ListItemIcon>
              <ListItemText primary="Avocado" />
            </ListItem>
          </Link>
          <Link to="/melon">
            <ListItem classes={{root: classes.listItemRoot, selected: classes.selected }} button selected={ location.pathname === "/melon" }>
              <ListItemIcon>
                <MelonIcon />
              </ListItemIcon>
              <ListItemText primary="Melon" />
            </ListItem>
          </Link>
          <Link to="grapes">
            <ListItem classes={{root: classes.listItemRoot, selected: classes.selected }} button selected={ location.pathname === "/grapes"} >
              <ListItemIcon>
                <GrapesIcon />
              </ListItemIcon>
              <ListItemText primary="Grapes" />
            </ListItem>
          </Link>
        </List>
      </div>
      <div className={classes.footer}>
        <div>
          <Typography variant="body2">Anshin Documents</Typography>
          <Typography variant="body1">All rights reserved</Typography>
        </div>
      </div>
    </Drawer>
  );
}
