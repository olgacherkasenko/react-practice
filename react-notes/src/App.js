import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';
import { Navbar } from './components/Navbar/Navbar';
import { Alert } from './components/Alert/Alert';
import { AlertState } from './context/alert/AlertState';
import { FirebaseState } from './context/firebase/FirebasState';

const App = () => {
  return (
    <FirebaseState>
      <AlertState>
        <Router>
          <Navbar />
          <div className='container'>
            <Alert />
            <Switch>
              <Route path='/' exact component={Home}/>
              <Route path='/about' exact component={About}/>
            </Switch>
          </div>
        </Router>
      </AlertState>
    </FirebaseState>
  );
}

export default App;
