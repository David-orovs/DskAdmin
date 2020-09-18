import React from 'react';
import { Route, Switch} from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard/dashboard'

function App() {
 
  return (
    <div className="App">
      <Switch>
          <Route path='/' component={Dashboard} />       
      </Switch>
    </div>
  );
}

export default App;
