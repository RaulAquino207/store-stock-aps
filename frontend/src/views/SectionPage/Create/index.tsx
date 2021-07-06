import React from 'react';
import Sidebar from '../../../components/Sidebar';
import { Styles } from './styles';

// import { Container } from './styles';

const CreateSectionPage: React.FC = () => {
  return <div>
      <Sidebar/>
      <Styles>
      <h1>CREATE SECTION</h1>
      </Styles>
  </div>;
}

export default CreateSectionPage;