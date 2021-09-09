import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
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
            <ListItem button selected={location.pathname === "/"}>
              <ListItemIcon>
                <AppleIcon className={location.pathname === "/" ? classes.selectedIconColor : ""} />
              </ListItemIcon>
              <ListItemText primary="Apple" />
            </ListItem>
          </Link>
          <Link to="/pineapple">
            <ListItem button selected={location.pathname === "/pineapple"}>
              <ListItemIcon>
                <PineappleIcon className={ location.pathname === "/pineapple" ? classes.selectedIconColor: "" } />
              </ListItemIcon>
              <ListItemText primary="Pineapple" />
            </ListItem>
          </Link>
          <Link to="/strawberry">
            <ListItem button selected={location.pathname === "/strawberry"} >
              <ListItemIcon>
                <StrawberryIcon className={ location.pathname === "/strawberry" ? classes.selectedIconColor: ""} />
              </ListItemIcon>
              <ListItemText primary="Strawberry" />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
          <Link to="/banana">
            <ListItem button selected={ location.pathname === "/banana"}>
              <ListItemIcon>
                <BananaIcon className={ location.pathname === "/banana"? classes.selectedIconColor: "" } />
              </ListItemIcon>
              <ListItemText primary="Banana" />
            </ListItem>
          </Link>
          <Link to="/avocado">
            <ListItem button selected={ location.pathname === "/avocado" }>
              <ListItemIcon>
                <AvocadoIcon className={ location.pathname === "/avocado" ? classes.selectedIconColor: "" } />
              </ListItemIcon>
              <ListItemText primary="Avocado" />
            </ListItem>
          </Link>
          <Link to="/melon">
            <ListItem button selected={ location.pathname === "/melon" }>
              <ListItemIcon>
                <MelonIcon  className={ location.pathname === "/melon" ? classes.selectedIconColor: "" }/>
              </ListItemIcon>
              <ListItemText primary="Melon" />
            </ListItem>
          </Link>
          <Link to="grapes">
            <ListItem button selected={ location.pathname === "/grapes"} >
              <ListItemIcon>
                <GrapesIcon className={ location.pathname === "/grapes" ?  classes.selectedIconColor: "" } />
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
