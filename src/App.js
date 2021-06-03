import './App.css';
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Navbar, Nav, Button} from 'bootstrap-4-react';
import {Index} from './components/Index';
import {Repos} from './components/Repos';
import {Users} from './components/Users';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav justifyContent="center">
          <Link to="/" className="link-c">Home</Link>
          <Link to='/users' className="link-a">Users</Link>
          <Link to='/repos' className="link-b">Repos</Link>          
        </Nav>
        <Switch>
          <Route exact path='/' component={Index} ></Route>
          <Route exact path='/repos' component={Repos} ></Route>
          <Route exact path='/users' component={Users} ></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
