import styled from 'styled-components';

export const Styles: any = styled.div`
    text-align: center;
    background-color: #141e30;
    min-height: 100vh;
    color: white;
    flex-direction: column;
    font-size: calc(10px + 2vmin);
    justify-content: center;
    overflow: hidden;

    .workaround{
        display: flex;
        flex-direction: column !important;
        width: 300px;
        justify-content: center !important;
    }

    form {
        display: flex;
        flex-direction: column !important;
        justify-content: center !important;
    }

    fieldset {
        border-width: 3px;
        border-style: solid;
        border-color: #FFF;
        border-radius: 15px;
        background-color: #243b55;
        flex-direction: column !important;
        justify-content: center !important;
        align-self: center;
    }

    legend {
        background-color: #61dafb;
        border-radius: 4px;
        border-color: #FFF;
    }

    .label-input{
        background-color: #141e30 !important;
        font-size: 15px;
        width:150px;
        margin-top: 10px;
    }

    input {
        margin-top: 10px;
        border: 1px #61dafb;
        border-radius: 4px;
        height: 48px;
        padding: 0 35px;
        font-size: 16px;
        color: #666;
        flex-direction: column !important;
    }

    button[type=submit] {
        margin-top: 10px;
        border: 0;
        border-radius: 4px;
        height: 48px;
        font-size: 16px;
        background: #61dafb;
        font-weight: bold;
        padding: 0 60px;
        /* color: #FFF; */
        cursor: pointer;
    }


`