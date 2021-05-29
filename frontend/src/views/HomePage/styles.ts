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