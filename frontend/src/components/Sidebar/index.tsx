import React from 'react';
import { FaBars } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { StyledSidebar } from './styles';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <StyledSidebar>
      <Link to="#" className="menu-bars" style={{color : `#FFF`}}>
        <FaBars/>
      </Link>
      <div className="leave">
      <Link to="/" onClick={() => localStorage.removeItem("token")} style={{color : `#FFF`}}>
        <ImCross/>
      </Link>
      </div>
    </StyledSidebar>
  )
  

}

export default Sidebar;