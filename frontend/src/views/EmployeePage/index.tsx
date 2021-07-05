import React from 'react';
import ButtonsCRUD from '../../components/ButtonsCRUD';
import Sidebar from '../../components/Sidebar';
import { Styles } from './styles';

// import { Container } from './styles';

const EmployeePage: React.FC = () => {
  return <div className="employee-container">
    <Sidebar/>
    <Styles>
      <ButtonsCRUD/>
        <h1>Employee</h1>
    </Styles>
    </div>;
}

export default EmployeePage;