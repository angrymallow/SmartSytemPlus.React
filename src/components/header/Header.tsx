import { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Typography from "@material-ui/core/Typography";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import useStyles  from "./header.styles"
import { ReactComponent as AppLogo } from '../../assets/smartsystemlogo.svg';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Divider  from '@material-ui/core/Divider';

export default function Header() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    console.log(event.currentTarget);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.noPadding}>
        <AppLogo/>
        <div className={classes.grow}></div>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
        <div className={classes.userInfo} onClick={handleClick}>
          <div>
            <Typography variant="body1">Carmelo Besid</Typography>
            <Typography variant="body2">Administrator</Typography>
          </div>
          <KeyboardArrowDownIcon className={classes.menuIcon}/>
        </div>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              width: '20ch',
            },
          }}
        >   
        <MenuItem onClick={handleClose}>
          Menu 1
        </MenuItem>
        <MenuItem onClick={handleClose}>
          Update Info
        </MenuItem>
        <Divider/>
        <MenuItem onClick={handleClose}>
          Logout
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  )
}