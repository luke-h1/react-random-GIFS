import React from 'react';
import './App.scss';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
        </Switch>
      </>
    </BrowserRouter>
  );
}
export default App;
