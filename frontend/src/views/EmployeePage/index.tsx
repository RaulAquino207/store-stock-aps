import { DataGrid } from '@material-ui/data-grid';
import React, { useEffect, useState } from 'react';
import ButtonsCRUD from '../../components/ButtonsCRUD';
import Sidebar from '../../components/Sidebar';
import api from '../../services/api';
import { StyledEmployee } from './styles';

// import { Container } from './styles';

const EmployeePage: React.FC = () => {

  const [employees, setEmployees] = useState([]);

  useEffect(() => {

    const token = localStorage.getItem("token");

    async function loadEmployees() {
      const response = await api.get('/employee', {
        headers: { Authorization: `Bearer ${token}` }
      });
  
      const { result } = response.data;
      // console.log(result);
  
      setEmployees(result);
  
    }

    loadEmployees();

  })

  return <div>
  <Sidebar/>
  <StyledEmployee>
  <ButtonsCRUD/>
      <h1>Employees</h1>
      <div className="table">
      <DataGrid checkboxSelection={false} rows={employees.map((section : any, index : any) => ({... section, id : index}))} columns={[{field: 'employee_id', headerName: 'ID'}, {field: 'employee_name', headerName: 'Employee', width: 150}, {field: 'email', headerName: 'Email', width: 150}, {field: 'token_login', headerName: 'Token', width: 150}, {field: 'section_id', headerName: 'Section', width: 150}, {field: 'store_id', headerName: 'Store', width: 150}]} pageSize={5} />
    </div>
    </StyledEmployee>
  </div>;
}

export default EmployeePage;