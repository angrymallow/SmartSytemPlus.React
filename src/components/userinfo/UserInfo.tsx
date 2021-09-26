import { useContext, useState } from "react";
import {
  ClickAwayListener,
  Grow,
  makeStyles,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Theme,
  createStyles,
  Typography,
  Avatar,
  Divider,
} from "@material-ui/core";
import { KeyboardArrowDownOutlined as KeyboardArrowDownIcon } from "@material-ui/icons";
import { UserContext } from "../../context/UserProvider";
import { getAvatar } from "../../helpers/avatar-helpers";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    userInfo: {
      padding: theme.spacing(0, 2),
      marginLeft: theme.spacing(1),
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
    },
    menuIcon: {
      marginLeft: theme.spacing(3),
    },
    avatar: {
      marginRight: theme.spacing(1),
    }
  })
);

const UserMenu = (props: any) => {
  const { anchorEl, handleClose, open } = props;
  return (
    <Popper
      open={open}
      anchorEl={anchorEl}
      role={undefined}
      placement="bottom-end"
      transition
      disablePortal
    >
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          style={{
            transformOrigin:
              placement === "bottom-start" ? "left top" : "left bottom",
          }}
        >
          <Paper style={{ width: "25ch" }}>
            <ClickAwayListener onClickAway={handleClose}>
              <MenuList
                autoFocusItem={open}
                id="composition-menu"
                aria-labelledby="composition-button"
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <Divider/>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  );
};

export function UserInfo() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const classes = useStyles();
  const { user } = useContext<any>(UserContext);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className={classes.userInfo} onClick={handleClick}>
        <Avatar className={classes.avatar}>{getAvatar(user.avatar)}</Avatar>
        <div>
          <Typography variant="body1">{user.fullName}</Typography>
          <Typography variant="body2">{user.type}</Typography>
        </div>
        <KeyboardArrowDownIcon className={classes.menuIcon} />
      </div>
      <UserMenu handleClose={handleClose} open={open} anchorEl={anchorEl} />
    </>
  );
}
