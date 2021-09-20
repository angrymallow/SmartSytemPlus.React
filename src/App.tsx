import { createStyles, CssBaseline, makeStyles, Theme, Toolbar } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Apple from './pages/Apple';
import Pineapple from './pages/Pineapple';
import Strawberry from './pages/Strawberry';
import Banana from './pages/Banana';
import Avocado from './pages/Avocado';
import Melon from './pages/Melon';
import Grapes from './pages/Grapes';
import Ivsi from './pages/Ivsi';
import Bindings from './pages/Bindings';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      height: '100%',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(4),
      paddingLeft: theme.spacing(15),
      paddingRight: theme.spacing(15),
      background: 'white',
      overflow: 'auto',
    },
  }),
);

function App() {
  const classes = useStyles();
  useEffect(() => {
    document.title = "Welcome to Smart System";   
  }, []);

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline/>
        <Header/>
        <Sidebar/>
        <main className={classes.content}>
          <Toolbar/>
          <Switch>
            <Route exact path="/" component={Apple}/>
            <Route path="/pineapple" component={Pineapple}/>
            <Route path="/strawberry" component={Strawberry}/>
            <Route path="/banana" component={Banana}/>
            <Route path="/avocado" component={Avocado}/>
            <Route path="/melon" component={Melon}/>
            <Route path="/grapes" component={Grapes}/>
            <Route path="/ivsi" component={Ivsi}/>
            <Route path="/bindings" component={Bindings}/>
        </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
