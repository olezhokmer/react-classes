import React from 'react';
import {BrowserRouter,Switch,Route} from "react-router-dom";

import Nav from './components/Nav';
import SignIn from './components/SignIn';
import Landing from './components/Landing';
import Weather from './components/Weather' ;

function App() {
  return (
    <BrowserRouter>
          <Nav />
          <Switch>
            
            
            <Route exact path="/login" component={SignIn} />
            <Route exact path="/" component={Landing} />
            <Route exact path="/forecast" component={Weather} />
            <Route component={Landing} />
          </Switch>
    </BrowserRouter>  
  );
}

export default App;
