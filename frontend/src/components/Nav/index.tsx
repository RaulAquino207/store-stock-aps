import React from 'react';
import { StyledNav } from './styles';

// import { Container } from './styles';

const Nav: React.FC = () => {
  return <StyledNav>
    <nav>
      <ul>
          <li> <a href="/"> Home </a> </li>
          <li> <a href="/login"> Login </a> </li>
          <li> <a href="/register"> Store Register </a> </li>
      </ul>
    </nav>
  </StyledNav>;
}

export default Nav;