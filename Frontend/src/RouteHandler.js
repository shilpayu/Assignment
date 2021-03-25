import React from 'react';
import Login from './Login/Login';
import Home from './Home/Home';
import Register from './Register/Register';
import Nav from './Nav/Nav';
import {Route,Switch} from 'react-router-dom';

function RouteHandler(){
  return (
      <div className="HomePageContainer">
          <div className="nav">
             <Nav/>
          </div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/home" component={Home} />
          </Switch>
      </div>
  );
}

export default RouteHandler;