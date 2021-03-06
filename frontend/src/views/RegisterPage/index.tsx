import React, { useState } from 'react';
import { Styles } from "./styles";
import logo from '../../assets/logo.png';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import Nav from '../../components/Nav';

// import { Container } from './styles';

const RegisterPage: React.FC = () => {

    const [usernameOwner, setUsernameOwner] = useState('');
    const [nameStore, setNameStore] = useState('');
    const [emailOwner, setEmailOwner] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    
    const history = useHistory();
    
    async function handleSubmit(e: any){
        e.preventDefault();
        
        const reponse = await api.post('/store', {
            store_name : nameStore,
            store_owner : usernameOwner,
            email : emailOwner,
            password : password,
            password_confirm : passwordConfirm
              });
            
            console.log("🚀 ~ file: index.tsx ~ line 29 ~ handleSubmit ~ reponse", reponse.data);
            alert(reponse.data['message']);

            if (reponse.data['message'] === 'Password do not match' || reponse.data['message'] === 'That email is already in use'){
                history.push('/register');
            } else if (reponse.data['message'] === 'User registered'){
                history.push('/login');
            } else {
                history.push('/register');
            }
    }
  return <Styles>
      <div className="register-container">
        <Nav/>
        <form onSubmit={handleSubmit}>
            <img src={logo} className="logo" alt="logo"/>
            <fieldset>
            <legend>register</legend>
            <input
                type="text"
                placeholder="Enter your full name"
                value={usernameOwner}
                onChange={ e => setUsernameOwner(e.target.value)}
            />
            <input
                type="text"
                placeholder="Enter your store name"
                value={nameStore}
                onChange={ e => setNameStore(e.target.value)}
            />
            <input
                type="text"
                placeholder="Type your e-mail"
                value={emailOwner}
                onChange={ e => setEmailOwner(e.target.value)}
            />
            <input
                type="password"
                placeholder="Type your password"
                value={password}
                onChange={ e => setPassword(e.target.value)}
            />
            <input
                type="password"
                placeholder="Confirm your password"
                value={passwordConfirm}
                onChange={ e => setPasswordConfirm(e.target.value)}
            />
            <button type="submit">Sign Up</button>
            </fieldset>
        </form>
      </div>
  </Styles>;
}

export default RegisterPage;