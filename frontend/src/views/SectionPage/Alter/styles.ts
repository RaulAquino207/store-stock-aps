import styled from 'styled-components';

export const Styles: any = styled.div`
    .modal{
        width: 100%;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10;
        background-color: rgba(0,0,0,0,8);
        display: flex;
        justify-content: center;
        align-items: center;

        .container{
            background-color: #243b55;
            color: #000;
            width: 60%;
            height: 60%;
            border-radius: 20px;

            .close{
                background-color: transparent;
                border : none;
                outline: none;
                width: 32px;
                height: 32px;
                right: calc(-100% + 64px);
                top: 16px;
                cursor: pointer;
                display: flex;
                position: relative;
                align-items: center;
                &:before,
                &:after {
                    content: ' ';
                    position: absolute;
                    width: 2.5px;
                    height: 24px;
                    background-color: #000;
                }
                &:before{
                    transform: rotate(45deg);
                }
                &:after{
                    transform: rotate(-45deg);
                }
            }
        }
    }

    
    .workaround{
        width: 400px;
        height: 180px;
        border-radius: 20px;
        background-color: #141e30;
        color: white;
        flex-direction: inherit;
        font-size: calc(10px + 2vmin);

        form {
        display: flex;
        flex-direction: column !important;
        justify-content: center !important;
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
        color: #FFF;
        cursor: pointer;
    }
    }

`