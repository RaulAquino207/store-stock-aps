import React from 'react';
import Sidebar from '../../components/Sidebar';
import { StyledSection } from './styles';
import ButtonsCRUD from '../../components/ButtonsCRUD';

// import { Container } from './styles';

const SectionPage: React.FC = () => {
  return <div>
    <Sidebar/>
    <StyledSection>
    <ButtonsCRUD/>
        <h1>Section</h1>
      </StyledSection>
    </div>;
}

export default SectionPage;