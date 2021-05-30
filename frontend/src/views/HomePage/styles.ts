import styled from 'styled-components';

export const Styles: any = styled.div`
    .home-container {
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

    .home-container fieldset {
        border-width: 3px;
        border-style: solid;
        border-color: #FFF;
        border-radius: 15px;
        background-color: #243b55;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-right: 30px;
        margin-left: 30px;
    }

    .logo {
        height: 40vmin;
        pointer-events: none;
    }

    .link {
        color: #61dafb;
        text-decoration:none;
    }

    .link:hover {
        color: #f7dda4;
    }
`;