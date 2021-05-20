import logo from './logo.svg';
import './App.css';
import Upload from "./pages/Upload";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
      <Router>
        <div className="App">



          <Switch>
            <Route exact path="/">
              <div>THIS IS HOME PAGE</div>
            </Route>
              <Route path="/upload">
                  <Upload />
              </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
