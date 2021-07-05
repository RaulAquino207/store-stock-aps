import styled from 'styled-components';

export const Styles: any = styled.div`
  background-color: #282c34;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;

  ul, li{
    list-style:none;
    list-style-type:none;
  }

  .image{
    width: 200px;
    height: 200px;
    border-radius: 5px 5px 0 0;
  }

  .card {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 5px; /* 5px rounded corners */
    margin-bottom: 5px;
    background-color: #61dafb;
  }


  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }

  .container {
    padding: 2px 16px;
  }
`;