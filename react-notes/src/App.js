import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';
import { Navbar } from './components/Navbar/Navbar';
import { Alert } from './components/Alert/Alert';

const App = () => {
  return (
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
  );
}

export default App;
