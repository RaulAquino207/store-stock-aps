import { DataGrid } from '@material-ui/data-grid';
import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar';
import api from '../../services/api';
import { StyledEmployee } from './styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AlterIcon from '@material-ui/icons/Edit'
import { Link } from 'react-router-dom';
import { IoMdAddCircle } from 'react-icons/io';
import Alter from './Alter';

// import { Container } from './styles';

const EmployeePage: React.FC = () => {
  
  const [employees, setEmployees] = useState([]);
  const [checks, setChecks] = useState(Object);
  
  const [showModal, setShowModal] = useState(false);

  const token = localStorage.getItem("token");

  async function onClickDelete(e : any){
    e.preventDefault();
    console.log('Deletando', checks['selectionModel']['length']);

    for (let index = 0; index < checks['selectionModel']['length']; index++) {
      const element = checks['selectionModel'][index];
      console.log(employees[element]['employee_id']);

      await api.delete(`/employee/${employees[element]['employee_id']}`);
      window.location.reload();
    }

  }

  function onClickAlter(e : any){
    e.preventDefault();
    console.log('Alterando');
    try {
      if(checks == undefined  || checks['selectionModel']['length'] != 1){
        alert('To change select only 1')
      } else {
        setShowModal(showModal => !showModal);
      }
    } catch (error) {
      alert(error);
    }
  }

  useEffect(() => {


    async function loadEmployees() {
      const response = await api.get('/employee', {
        headers: { Authorization: `Bearer ${token}` }
      });
  
      const { result } = response.data;
      // console.log(result);
  
      setEmployees(result);
  
    }

    loadEmployees();

  }, [token])

  return <div>
  <Sidebar/>
  <StyledEmployee>
      <h1>Employees</h1>
      <div className="buttons">
          <IconButton aria-label="delete">
            <DeleteIcon fontSize="small" style={{color : `#FFF`}} className="buttons" onClick={onClickDelete}/>
          </IconButton>
          <IconButton aria-label="edit">
            <AlterIcon fontSize="small" style={{color : `#FFF`}} className="buttons" onClick={onClickAlter}/>
          </IconButton>
        </div>
      <div className="table">
      <DataGrid checkboxSelection={true} onSelectionModelChange={itm => setChecks(itm)} rows={employees.map((section : any, index : any) => ({... section, id : index}))} columns={[{field: 'employee_id', headerName: 'ID'}, {field: 'employee_name', headerName: 'Employee', width: 150}, {field: 'email', headerName: 'Email', width: 150}, {field: 'token_login', headerName: 'Token', width: 150}, {field: 'section_id', headerName: 'Section', width: 150}, {field: 'store_id', headerName: 'Store', width: 150}]} pageSize={5} />
      <Link to={'/main/employee/create'}>
          <IoMdAddCircle style={{color : `#FFF`}}/>
      </Link>
      <Alter id="modal" onClose={() => setShowModal(showModal => !showModal)} showModal={showModal} checks={checks}/>
    </div>
    </StyledEmployee>
  </div>;
}

export default EmployeePage;