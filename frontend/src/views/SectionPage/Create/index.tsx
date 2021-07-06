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

  async function handleSubmit(e: any){
    e.preventDefault();

    console.log(sectionName);

    if(sectionName == ''){
      alert('Please provide a valid value');
    } else {
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

}


  return <div>
      <Sidebar/>
      <Styles>
      <h1>CREATE SECTION</h1>
      <form onSubmit={handleSubmit} >
            
            <fieldset>
            <legend>Section Create</legend>
            <div className="workaround">
              <input
                  type="text"
                  placeholder="Type section name"
                  value={sectionName}
                  onChange={ e => setSectionName(e.target.value)}
              />
              <button type="submit">Add Section</button>
            </div>
            </fieldset>
        </form>
      </Styles>
  </div>;
}

export default CreateSectionPage;