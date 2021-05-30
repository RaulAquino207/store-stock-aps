import React from 'react';
import { Styles } from "./styles";
import logo from '../../assets/logo.png';
import Nav from '../../components/Nav'

// import { Container } from './styles';

const LoginPage: React.FC = () => {
  return (
      <Styles>
        
          <div className="home-container">
          <Nav/>
          <img src={logo} alt="logo" className="logo"/>
          <fieldset>
            <h2> Welcome to the store stock home page! </h2>
            <p> This web site aims to complete the project proposed by the APS class and organize your business 🤝</p>
            <p> Visit the repository on <a href="https://github.com/RaulAquino207/store-stock-aps" className="link" target="_blank">github 👈</a> </p>
          </fieldset>
          </div>
      </Styles>
  );
}

export default LoginPage;