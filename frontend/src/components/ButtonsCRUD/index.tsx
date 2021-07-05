import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonsData } from './ButtonsData';
import { Styles } from './styles';

// import { Container } from './styles';

const ButtonsCRUD: React.FC = () => {
  return <Styles>
    {ButtonsData.map((item, index) => {
        return (
          <li key={index} className={item.cName}>
            <Link to={item.path}>
              {item.icon}
              <span>{item.title}</span>
            </Link>
          </li>
        )
      })}
  </Styles>;
}

export default ButtonsCRUD;