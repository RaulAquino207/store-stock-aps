import styled from 'styled-components';

export const StyledNav: any = styled.div`
    nav {
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

`;