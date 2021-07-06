import styled from 'styled-components';

export const StyledSection: any = styled.div`
    text-align: center;
    background-color: #141e30;
    min-height: 100vh;
    color: white;
    flex-direction: column;
    font-size: calc(10px + 2vmin);
    align-items: center;
    justify-content: center;
    overflow: hidden;

    .table{
        /* background-color : #FFF;
        border-radius: 5px;
        flex-direction: center;
        text-align: center;
        align-items: center;
        justify-content: center; */
        height: 400px; 
        width: 40%;
        background-color : #FFF;
        border-radius: 5px;
        margin-left: 30%;
    }

    .buttons {
        display: flex;
        margin-left: 65%;
    }
`;