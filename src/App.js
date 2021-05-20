import logo from './logo.svg';
import './App.css';
import Upload from "./pages/Upload";
import Gallery from "./pages/Gallery";
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
        <div>
            <Link className="margin-10" to="/">Pradinis puslapis</Link>
            <Link className="margin-10" to="/">Vartotojos įkėlimas</Link>
        </div>


          <Switch>
            <Route exact path="/">
                <Gallery/>
            </Route>
              <Route path="/upload">
                  <Upload />
              </Route>
              <Route path="/user/:id">
                  Vienas vartotojas
              </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
