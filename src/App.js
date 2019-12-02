import React from 'react';
import './App.css';
import HomePage from './pages/homepage.component';
import { Route, Switch, Link } from 'react-router-dom';

const HatsPage = (props) => {
 console.log(props);
 return (
  <div>
    <button onClick={()=>{props.history.push('/')}}>Home button</button>
    <h1>HATS PAGE {props.match.params.id }</h1>
  </div>
  );
 }

function App() {
  return (
    <div className="App">
      <Switch>
        <Route  path='/shop/hats' component={HatsPage} />
        <Route  path='/' component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
