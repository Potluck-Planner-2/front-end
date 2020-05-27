import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import Potlucks from './Components/Potlucks';
import EditPotluck from './Components/EditPotluck';
import CreatePotluck from './Components/CreatePotluck';
import Invites from './Components/Invites';
import Register from './Components/Register';
import Login from './Components/Login';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/potlucks" component={Potlucks} />
          <Route exact path="/potlucks/edit/:id" component={EditPotluck} />
          <Route exact path="/potlucks/create" component={CreatePotluck} />
          <Route exact path="/potlucks/invites" component={Invites} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
