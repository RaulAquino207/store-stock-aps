import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Sidebar from '../../../components/Sidebar';
import api from '../../../services/api';
import { Styles } from './styles';

// import { Container } from './styles';

const CreateSectionPage: React.FC = () => {

  const history = useHistory();
  const [sectionName, setSectionName] = useState('');

  const id = localStorage.getItem("id");

  async function handleSubmitStore(e: any){
    e.preventDefault();

    console.log(sectionName);

    try{
      await api.post(`section/${id}`, {
        section_name : sectionName
          });
          alert('Section created successfully')
          history.push(`/main/section`);
    } catch(error) {
      alert(error.response.data.message);
    }
    
}


  return <div>
      <Sidebar/>
      <Styles>
      <h1>CREATE SECTION</h1>
      <form onSubmit={handleSubmitStore} >
            
            <fieldset>
            <legend>Section Name</legend>
            <input
                type="text"
                placeholder="Type section name"
                value={sectionName}
                onChange={ e => setSectionName(e.target.value)}
            />
            <button type="submit">Add Section</button>
            </fieldset>
        </form>
      </Styles>
  </div>;
}

export default CreateSectionPage;