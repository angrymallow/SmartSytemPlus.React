import { useContext, useEffect, useState } from 'react';
import { AppBar, Toolbar, InputBase } from '@material-ui/core';
import { SearchOutlined as SearchIcon } from '@material-ui/icons';
import useStyles  from "./header.styles"
import { AppLogo } from '../../assets/icons';
import { SearchContext } from '../../context/SearchContext';
import { UserInfo } from '../userinfo/UserInfo';

export default function Header() {
  const classes = useStyles();
  
  const [keyword, setKeyword] = useState('');
  const {search, setSearch, isSearchHidden, searchPlaceholder: placeholder} = useContext(SearchContext);
  

  useEffect(() => {
    console.log(search, 'search value in effects')
    setKeyword(search)
  }, [search])



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
        <UserInfo/>
      </Toolbar>
    </AppBar>
  )
}