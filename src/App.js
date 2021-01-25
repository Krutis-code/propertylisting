
import './Styles.css';
import Addproperty from './components/Addproperty';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Properties from './components/Properties';
function App() {
  return (
    <Router>
    <div className="">
    <Navbar></Navbar>
      <Switch>
        <Route path="/addproperty">
          <Addproperty></Addproperty>
        </Route>
        <Route path="/findproperty">
          <Properties></Properties>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
