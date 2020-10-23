import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import ChangeString from './components/ChangeString';
import Dice from './components/Dice';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/task-two" component={ChangeString} />
        <Route path="/" component={Dice} />
      </Switch>
      <Footer />
    </div>
  );
}

export default withRouter(App);
