import styled from 'styled-components';

export const Styles: any = styled.div`
    .login-container {
        text-align: center;
        background-color: #141e30;
        min-height: 100vh;
        color: white;
        flex-direction: column;
        font-size: calc(10px + 2vmin);
        align-items: center;
        justify-content: center;
        /* display: flex; */
    }

    .logo {
        height: 40vmin;
        pointer-events: none;
    }

    .login-container form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .login-container fieldset {
        border-width: 3px;
        border-style: solid;
        border-color: #FFF;
        border-radius: 15px;
        background-color: #243b55;
    }

    .login-container legend {
        background-color: #61dafb;
        border-radius: 4px;
        border-color: #FFF;
    }

    .login-container form input {
        margin-top: 10px;
        border: 1px #61dafb;
        border-radius: 4px;
        height: 48px;
        padding: 0 35px;
        font-size: 16px;
        color: #666;
    }

    /* .input {
        display: none
    } */

    .login-container form input ::placeholder {
    color: #999999;
}

    .login-container form button[type=submit] {
        margin-top: 10px;
        border: 0;
        border-radius: 4px;
        height: 48px;
        font-size: 16px;
        background: #61dafb;
        font-weight: bold;
        padding: 0 60px;
        color: #FFF;
        cursor: pointer;
    }


`;