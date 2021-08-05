import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Pages/Home';
import Dashboard from './components/Pages/Dashboard';
import Login from './components/Login';
import SignUp from './components/SignUp';
import {AuthProvider} from './components/Auth'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
