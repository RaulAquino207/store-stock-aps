import React from 'react';
import Sidebar from '../../components/Sidebar';
import { StyledSection } from './styles';
import ButtonsCRUD from '../../components/ButtonsCRUD';
import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid';

// import { Container } from './styles';

const SectionPage: React.FC = () => {

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.getValue(params.id, 'firstName') || ''} ${
          params.getValue(params.id, 'lastName') || ''
        }`,
    },
  ];

  return <div>
    <Sidebar/>
    <StyledSection>
    <ButtonsCRUD/>
        <h1>Section</h1>
        <div style={{ height: 400, width: '100%' }}>
        <DataGrid rows={[
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 }]} columns={columns} pageSize={5} checkboxSelection />
      </div>
      </StyledSection>
    </div>;
}

export default SectionPage;