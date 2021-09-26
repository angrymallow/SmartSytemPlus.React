import { useMemo, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import {
  createStyles,
  CssBaseline,
  makeStyles,
  Theme,
  Toolbar,
} from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Apple from "./pages/Apple";
import Pineapple from "./pages/Pineapple";
import Strawberry from "./pages/Strawberry";
import Banana from "./pages/Banana";
import Avocado from "./pages/Avocado";
import Melon from "./pages/Melon";
import Grapes from "./pages/Grapes";
import Ivsi from "./pages/Ivsi";
import Bindings from "./pages/Bindings";
import { SearchContext } from "./context/SearchContext";
import { UserProvider } from "./context/UserProvider";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      height: "100%",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(4),
      paddingLeft: theme.spacing(15),
      paddingRight: theme.spacing(15),
      background: "white",
      overflow: "auto",
    },
  })
);

const queryClient = new QueryClient();

function App() {
  const [searchPlaceholder, setSearchPlaceholder] = useState<string>("search");
  const [search, setSearch] = useState<string>("");
  const [isSearchHidden, setSearchIsHidden] = useState<boolean>(false);
  const classes = useStyles();
  const searchValue = useMemo(
    () => ({
      searchPlaceholder,
      setSearchPlaceholder,
      search,
      setSearch,
      isSearchHidden,
      setSearchIsHidden,
    }),
    [
      searchPlaceholder,
      setSearchPlaceholder,
      search,
      setSearch,
      isSearchHidden,
      setSearchIsHidden,
    ]
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className={classes.root}>
          <CssBaseline />
          <UserProvider>
            <SearchContext.Provider value={searchValue}>
              <Header />
              <Sidebar />
              <main className={classes.content}>
                <Toolbar />
                <Switch>
                  <Route exact path="/" component={Apple} />
                  <Route path="/pineapple" component={Pineapple} />
                  <Route path="/strawberry" component={Strawberry} />
                  <Route path="/banana" component={Banana} />
                  <Route path="/avocado" component={Avocado} />
                  <Route path="/melon" component={Melon} />
                  <Route path="/grapes" component={Grapes} />
                  <Route path="/ivsi" component={Ivsi} />
                  <Route path="/bindings" component={Bindings} />
                </Switch>
              </main>
            </SearchContext.Provider>
          </UserProvider>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
