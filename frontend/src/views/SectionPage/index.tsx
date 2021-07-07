import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import { StyledSection } from './styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AlterIcon from '@material-ui/icons/Edit'
import { DataGrid } from '@material-ui/data-grid';
import api from '../../services/api';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoMdAddCircle } from 'react-icons/io';
import Alter from './Alter';

// import { Container } from './styles';

const SectionPage: React.FC = () => {

  const [sections, setSections] = useState([]);
  const [checks, setChecks] = useState(Object);

  const [showModal, setShowModal] = useState(false); 

  async function onClickDelete(e : any){
    e.preventDefault();
    console.log('Deletando');

    try {
      for (let index = 0; index < checks['selectionModel']['length']; index++) {
        const element = checks['selectionModel'][index];
        console.log(sections[element]['section_id']);
  
        await api.delete(`/section/${sections[element]['section_id']}`)
      }
    } catch (error) {
      alert(error);
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
        <h1>Sections</h1>
        <div className="buttons">
          <IconButton aria-label="delete">
            <DeleteIcon fontSize="small" style={{color : `#FFF`}} className="buttons" onClick={onClickDelete}/>
          </IconButton>
          <IconButton aria-label="edit">
            <AlterIcon fontSize="small" style={{color : `#FFF`}} className="buttons" onClick={onClickAlter}/>
          </IconButton>
        </div>
        <div className="table">
          {/* {console.log(sections)} */}
        <DataGrid checkboxSelection={true} onSelectionModelChange={itm => setChecks(itm)} rows={sections.map((section : any, index : any) => ({... section, id : index}))} columns={[{field: 'section_id', headerName: 'ID'}, {field: 'section_name', headerName: 'Section', width: 150, editable: true}, {field : 'store_id', headerName: 'Store ID', width: 150}]} pageSize={5} />
        <Link to={'/main/section/create'}>
          <IoMdAddCircle style={{color : `#FFF`}}/>
        </Link>
        <Alter id="modal" onClose={() => setShowModal(showModal => !showModal)} showModal={showModal} checks={checks}/>
      </div>
      </StyledSection>
    </div>;
}

export default SectionPage;