import React, { useState } from 'react';
import { Styles } from "./styles";
import logo from '../../assets/logo.png';
import { useHistory } from 'react-router-dom';

// import { Container } from './styles';

const RegisterPage: React.FC = () => {

    const [UsernameOwner, setUsernameOwner] = useState('');
    const [NameStore, setNameStore] = useState('');
    const [EmailOwner, setEmailOwner] = useState('');
    const [Password, setPassword] = useState('');

    const history = useHistory();

    function handleSubmit(e: any){
        e.preventDefault();
        history.push('/main');
        
    }
  return <Styles>
      <div className="register-container">
      <nav className="register-nav">
            <ul>
                <li> <a href="/"> Home </a> </li>
                <li> <a href="/login"> Login </a> </li>
                <li> <a href="/register"> Store Register </a> </li>
            </ul>
            </nav>
            <form onSubmit={handleSubmit}>
            <img src={logo} className="logo" alt="logo"/>
            <input
                type="text"
                placeholder="Enter your full name"
                value={UsernameOwner}
                onChange={ e => setUsernameOwner(e.target.value)}
            />
            <input
                type="text"
                placeholder="Enter your store name"
                value={NameStore}
                onChange={ e => setNameStore(e.target.value)}
            />
            <input
                type="text"
                placeholder="Type your e-mail"
                value={EmailOwner}
                onChange={ e => setEmailOwner(e.target.value)}
            />
            <input
                type="text"
                placeholder="Type your password"
                value={Password}
                onChange={ e => setPassword(e.target.value)}
            />
            <button type="submit">Sign Up</button>
        </form>

      </div>
  </Styles>;
}

export default RegisterPage;