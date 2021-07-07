import styled from 'styled-components';

export const Styles: any = styled.div`
background-color: #141e30;  
height: 100vh;
overflow: hidden;

.main-container {
    margin: 0 auto;
    padding: 50px 0;
    text-align: center;
    background-color: #141e30;
}
.main-container h1 {
  color: #FFF;
}

.main-container ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 30px;
    margin-top: 50px;
    margin-right: 15px;
    margin-left: 15px;
}

.main-container ul li {
    display: flex;
    flex-direction: column;
}

.main-container ul li img {
    max-width: 100%;
    border-radius: 5px 5px 0 0;
}

.main-container ul li footer {
    flex: 1;
    background: #FFF;
    border: 1px solid #eee;
    padding: 15px 20px;
    text-align: left;
    border-radius: 0 0 5px 5px;
}

.main-container ul li footer strong {
    font-size: 16px;
    color: #333;
}

.main-container ul li footer p {
    font-size: 14px;
    line-height: 20px;
    color: #999;
    margin-top: 5px;
}

.main-container .empty {
    font-size: 32px;
    color: #999;
    font-weight: bold;
    margin-top: 300px;
}

`;