import './App.css';
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import {Index} from './components/Index';
import {Repos} from './components/Repos';
import {Users} from './components/Users';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="navbar">
          <div className="logo-side">
            <Link to="/">Home</Link>
          </div>
          <div className="menu-container">
            <button>
              <Link to='/users'>Users</Link>
            </button>
            <button>
              <Link to='/repos'>Repos</Link>
            </button>
          </div>
        </div>
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
