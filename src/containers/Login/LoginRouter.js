import React, { useEffect , useState } from 'react';
import { Switch, Route } from 'react-router';
import Login from './Login';
import Signup from './Signup';

function LoginRouter(props) {
  return (
    <Switch>
        <Route exact  path='/' component={Login}/>
        <Route path='/login' component={Login}/>
        <Route path='/signup' component={Signup}/>
    </Switch>
  );
}
    
export default LoginRouter