import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Home from '../views/HomePage';
import Main from '../views/MainPage';
import Login from '../views/LoginPage';
import Register from '../views/RegisterPage';

// import { Container } from './styles';

const routes: React.FC = () => {
  return (<BrowserRouter>
  <Route path="/" exact component={Home}/>
  <Route path="/main/:id" component={Main}/>
  <Route path="/login" component={Login}/>
  <Route path="/register" component={Register}/>
  </BrowserRouter>);
}

export default routes;