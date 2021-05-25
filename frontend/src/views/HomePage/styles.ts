import styled from 'styled-components';

export const Styles: any = styled.div`
    .App {
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

    .App-nav {
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

    .App-logo {
        height: 40vmin;
        pointer-events: none;
    }

    .App-link {
        color: #61dafb;
        text-decoration:none;
    }

    .App-link:hover {
        color: #f7dda4;
    }
`;