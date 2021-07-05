import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Home from '../views/HomePage';
import Main from '../views/MainPage';
import Login from '../views/LoginPage';
import Register from '../views/RegisterPage';
import SectionPage from '../views/SectionPage'
import EmployeePage from '../views/EmployeePage'
import ProductPage from '../views/ProductPage'

// import { Container } from './styles';

const routes: React.FC = () => {
  return (<BrowserRouter>
  <Route path="/" exact component={Home}/>
  <Route path="/main" exact component={Main}/>
  <Route path="/login" component={Login}/>
  <Route path="/register" component={Register}/>
  <Route path="/main/section" component={SectionPage}/>
  <Route path="/main/employee" component={EmployeePage}/>
  <Route path="/main/product" component={ProductPage}/>
  </BrowserRouter>);
}

export default routes;