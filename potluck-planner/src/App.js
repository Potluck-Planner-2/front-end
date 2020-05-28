import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import PrivateRoute from './utils/PrivateRoute'
import Potlucks from './Components/Potlucks'
import EditPotluck from './Components/EditPotluck'
import CreatePotluck from './Components/CreatePotluck';
import Invites from './Components/Invites'
import axios from 'axios'



function App() {
    
  return (
    <div>
      <Router>
        <Switch>
          <PrivateRoute exact path='/potlucks' component={Potlucks} />
          <PrivateRoute exact path='/potlucks/edit/:id' component={EditPotluck} />
          <PrivateRoute exact path='/potlucks/create' component={CreatePotluck} />
          <PrivateRoute exact path='/potlucks/invites' component={Invites} />
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
