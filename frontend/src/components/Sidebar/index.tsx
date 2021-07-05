import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { StyledSidebar } from './styles';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <StyledSidebar>
      <div className="navbar">
        <Link to="#" className="menu-bars" style={{color : `#FFF`}} onClick={showSidebar}>
          <FaBars/>
        </Link>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu '}>
        <ul className='nav-menu-items'>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars" style={{color : `#FFF`}}>
              <FaBars/>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="leave">
      <Link to="/" onClick={() => localStorage.removeItem("token")} style={{color : `#FFF`}}>
        <ImCross/>
      </Link>
      </div>
    </StyledSidebar>
  )
  

}

export default Sidebar;