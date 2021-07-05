import styled from 'styled-components';

export const StyledSidebar: any = styled.div`
    height: 40px;
    padding: 5px 60px;
    font-size: calc(15px + 2vmin);
    display: flex !important;
    justify-content: left !important;
    background-color: #243b55;
    color: #FFF;

    .leave {
        margin-left: 96%;
        color: #FFF !important;
    }

    .menu-bars {
    margin-left: 2rem;
    font-size: 2rem;
    background: none;
    }

    .nav-menu {
    background-color: #243b55;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: -100%;
    transition: 850ms;
    }

    .nav-menu.active {
    left: 0;
    transition: 350ms;
    }

    .nav-text {
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 8px 0px 8px 16px;
    list-style: none;
    height: 60px;
    }

    .nav-text a {
    text-decoration: none;
    color: #f5f5f5;
    font-size: 18px;
    width: 95%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 16px;
    border-radius: 4px;
    }

    .nav-text a:hover {
    background-color: #1a83ff;
    }

    .nav-menu-items {
    width: 100%;
    }

    .navbar-toggle {
    background-color: #243b55;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: start;
    align-items: center;
    }

    span {
    margin-left: 16px;
    }

`