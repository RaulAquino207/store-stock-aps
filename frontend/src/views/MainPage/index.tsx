import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Styles } from "./styles";

// import { Container } from './styles';

const MainPage: React.FC = () => {

  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if(!token){
      history.push('/login');
    }
  });

  return (
      <Styles>
          <h1> MAIN </h1>
          <ul>
            <li>
              <img src="https://lh3.googleusercontent.com/proxy/ZwdVYDtwLLzwnlbsY9zFDJKSt5e-sFtTPuhH2lm9IZxcFIzX8W51FlKEZ92De7IWn1hxO4oWUjrA-gKBMHVoZAnsh_9zcB1CAQRd-EgJywu-gHnO6UGUQ3LPwd1ad6k2Q8mzm6Uq6Viy7F9on_r9"></img>
            </li>
            <li>
              <img src="https://lh3.googleusercontent.com/proxy/ZwdVYDtwLLzwnlbsY9zFDJKSt5e-sFtTPuhH2lm9IZxcFIzX8W51FlKEZ92De7IWn1hxO4oWUjrA-gKBMHVoZAnsh_9zcB1CAQRd-EgJywu-gHnO6UGUQ3LPwd1ad6k2Q8mzm6Uq6Viy7F9on_r9"></img>
            </li>
            <li>
              <img src="https://lh3.googleusercontent.com/proxy/ZwdVYDtwLLzwnlbsY9zFDJKSt5e-sFtTPuhH2lm9IZxcFIzX8W51FlKEZ92De7IWn1hxO4oWUjrA-gKBMHVoZAnsh_9zcB1CAQRd-EgJywu-gHnO6UGUQ3LPwd1ad6k2Q8mzm6Uq6Viy7F9on_r9"></img>
            </li>
            <li>
              <img src="https://lh3.googleusercontent.com/proxy/ZwdVYDtwLLzwnlbsY9zFDJKSt5e-sFtTPuhH2lm9IZxcFIzX8W51FlKEZ92De7IWn1hxO4oWUjrA-gKBMHVoZAnsh_9zcB1CAQRd-EgJywu-gHnO6UGUQ3LPwd1ad6k2Q8mzm6Uq6Viy7F9on_r9"></img>
            </li>
          </ul>
      </Styles>
  );
}

export default MainPage;