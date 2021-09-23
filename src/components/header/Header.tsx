import { useContext, useEffect, useState } from 'react';
import { AppBar, Toolbar, InputBase, Typography, Menu, MenuItem, Divider } from '@material-ui/core';
import { SearchOutlined as SearchIcon, KeyboardArrowDownOutlined as KeyboardArrowDownIcon } from '@material-ui/icons';
import useStyles  from "./header.styles"
import { AppLogo } from '../../assets/icons';
import { SearchContext } from '../../context/SearchContext';

export default function Header() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [keyword, setKeyword] = useState('');
  const {search, setSearch, isSearchHidden, searchPlaceholder: placeholder} = useContext(SearchContext);
  const open = Boolean(anchorEl);

  useEffect(() => {
    console.log(search, 'search value in effects')
    setKeyword(search)
  }, [search])

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSearch = (e: any) => {
    if (e.key === 'Enter') {
      setSearch(keyword);
    }
  }
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.noPadding}>
        <AppLogo/>
        <div className={classes.grow}></div>
        {
          !isSearchHidden ? 
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                value={keyword}
                onKeyDown={handleSearch}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder={placeholder}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div> 
            
            : null
        }
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