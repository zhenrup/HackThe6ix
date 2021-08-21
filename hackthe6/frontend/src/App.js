import Navbar from './components/Navbar';
import Home from './pages/Home';
import Map from './pages/Map';
import Business from './pages/Business';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/map">
              <Map />
            </Route>
            <Route path="/business">
              <Business />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
