import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import './App.css';
import Introduce from './Pages/Introduce';
import Calendars from './Pages/Calendars';
import SketchMap from './Pages/SketchMap';

function App() {
  return <Router>
    <Switch>
      <Route path="/calendars">
        <Calendars />
      </Route>
      <Route path="/sketchMap">
        <SketchMap />
      </Route>
      <Route path="/introduce">
        <Introduce />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>;
}

export default App;
