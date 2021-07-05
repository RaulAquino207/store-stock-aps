import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import { StyledSection } from './styles';
import ButtonsCRUD from '../../components/ButtonsCRUD';
import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid';
import api from '../../services/api';
import { useEffect } from 'react';

// import { Container } from './styles';

const SectionPage: React.FC = () => {

  const [sections, setSections] = useState([]);

  useEffect(() => {

    const token = localStorage.getItem("token");

    async function loadSections() {
      const response = await api.get('/section', {
        headers: { Authorization: `Bearer ${token}` }
      });
  
      const { result } = response.data;
      // console.log(result);
  
      setSections(result);
  
    }

    loadSections();

  })


  return <div>
    <Sidebar/>
    <StyledSection>
    <ButtonsCRUD/>
        <h1>Sections</h1>
        <div className="table">
          {/* {console.log(sections)} */}
        <DataGrid checkboxSelection={false} rows={sections.map((section : any, index : any) => ({... section, id : index}))} columns={[{field: 'section_id', headerName: 'ID'}, {field: 'section_name', headerName: 'Section', width: 150, editable: true}, {field : 'store_id', headerName: 'Store ID', width: 150}]} pageSize={5} />
      </div>
      </StyledSection>
    </div>;
}

export default SectionPage;