import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Home from '../views/HomePage';
import Main from '../views/MainPage';

// import { Container } from './styles';

const routes: React.FC = () => {
  return (<BrowserRouter>
  <Route path="/" exact component={Home}/>
  <Route path="/main" component={Main}/>
  </BrowserRouter>);
}

export default routes;