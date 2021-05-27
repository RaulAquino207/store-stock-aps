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

    .login-nav {
        background-color: #243b55;
        padding: 5px 60px;
        display: flex;
        justify-content: space-between;
        font-size: 15px;

        ul {
            display: flex;
            justify-content: space-around;
            align-items: center;
        }

        li {
            list-style: none;
        }

        li a {
            color: #fff;
            text-decoration: none;
            font-weight: bold;
            padding: 5px 8px;
        }

        li a:hover {
            color: #f7dda4;
            text-decoration: none;
        }
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