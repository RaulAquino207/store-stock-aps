import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Styles } from "./styles";
import logo from '../../assets/logo.png';
import { withStyles, Theme, createStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import api from '../../services/api';
import Nav from '../../components/Nav';

// import { Container } from './styles';

const LoginPage: React.FC = () => {
    const [usernameOwner, setUsernameOwner] = useState('');
    const [TokenEmployee, setTokenEmployee] = useState('');
    const [Password, setPassword] = useState('');

    const AntSwitch = withStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 28,
      height: 16,
      padding: 0,
      display: 'flex',
    },
    switchBase: {
      padding: 2,
      color: theme.palette.common.white,
      '&$checked': {
        transform: 'translateX(12px)',
        color: theme.palette.common.white,
        '& + $track': {
          opacity: 1,
          backgroundColor: theme.palette.primary.main,
          borderColor: theme.palette.primary.main,
        },
      },
    },
    thumb: {
      width: 12,
      height: 12,
      boxShadow: 'none',
    },
    track: {
      borderColor: theme.palette.primary.main,
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor: theme.palette.primary.main,
    },
    checked: {},
  }),
)(Switch);

    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedC: true,
    });

    const history = useHistory();

    async function handleSubmit(e: any){
        e.preventDefault();
        history.push('/main');
        
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        };

  return <Styles>
      <div className="login-container">
        <Nav/>
        <form onSubmit={handleSubmit}>
            <img src={logo} className="logo" alt="logo"/>
            <p> {String(state.checkedC ? 'Owner' : 'Employee')} </p>
           
            <Typography component="div">
                <Grid component="label" container alignItems="center" spacing={1}>
                <Grid item>Employee</Grid>
                <Grid item>
                    <AntSwitch checked={state.checkedC} onChange={handleChange} name="checkedC" />
                </Grid>
                <Grid item>Owner</Grid>
                </Grid>
            </Typography>
            <fieldset>
            <legend>login</legend>
            <input
                type="text"
                style={state.checkedC ? {display : `flex`} : {display : `none`}}
                placeholder="Type your e-mail"
                value={usernameOwner}
                onChange={ e => setUsernameOwner(e.target.value)}
            />
            <input
                type="password"
                style={state.checkedC ? {display : `flex`} : {display : `none`}}
                placeholder="Type your password"
                value={Password}
                onChange={ e => setPassword(e.target.value)}
            />
            <input
                type="text"
                style={state.checkedC ? {display : `none`} : {display : `flex`}}
                placeholder="Type your token"
                value={TokenEmployee}
                onChange={ e => setTokenEmployee(e.target.value)}
            />
            <button type="submit">Sign In</button>
            </fieldset>
        </form>
    </div>

  </Styles>;
}

export default LoginPage;