import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EntryDetail from "./EntryDetail";
import Home from "./Home";
import Navbar from "./Navbar";
import NewEntry from "./NewEntry";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/entries/:id">
            <EntryDetail />
          </Route>
          <Route path="/new">
            <NewEntry />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
