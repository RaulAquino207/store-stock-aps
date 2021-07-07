import React, { useEffect, useState } from 'react';
import { Styles } from './styles';
import api from '../../../services/api';
import { useHistory } from 'react-router-dom';

// import { Container } from './styles';

interface Props {
  id : any;
  onClose : any;
  showModal: any;
  checks : any;
}

const Alter: React.FC<Props> = ({id = "modal", onClose = () => {}, showModal, checks }) => {

  const [sections, setSections] = useState([]);
  const [oldSectionName, setOldSectionName] = useState('');
  const [newSectionName, setNewSectionName] = useState('');
  const [sectionId, setSectionId] = useState('');

  const history = useHistory();

  const handleOutSideClick = (e : any) => {
    if(e.target.id === id){
      onClose();
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
    if(sections[checks['selectionModel']]){
      const { section_id, section_name } = sections[checks['selectionModel']];
      setOldSectionName(section_name);
      setSectionId(section_id);
    }

  })

  async function handleSubmit(e: any){
    e.preventDefault();

    if(newSectionName == ''){
      alert('Please provide a valid value');
    } else {
      try{
        await api.patch(`section/${sectionId}`, {
          section_name : newSectionName
            });
            alert(`Section changed successfully`)
            onClose();
            history.push(`/main/section`);
      } catch(error) {
        alert(error.response.data.message);
      }
    }
  }

  return (
    <div>
      <Styles>
        {showModal ? (
          <div id={id} className="modal" onClick={handleOutSideClick}>
          <div className="container">
            <button className="close" onClick={onClose}></button>
            <div className="content">
            <div className="workaround">
            <form onSubmit={handleSubmit}>
            <legend className="label-input">Section name</legend>
              <input
                  type="text"
                  value={newSectionName}
                  placeholder={oldSectionName}
                  onChange={ e => setNewSectionName(e.target.value)}
              />
              <button type="submit">Change Section</button>
            </form>
            </div>
            </div>
          </div>
        </div>
        ) : null}
      </Styles>
    </div>
  );
}

export default Alter;