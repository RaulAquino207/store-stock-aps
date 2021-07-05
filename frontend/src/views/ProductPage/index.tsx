import React from 'react';
import ButtonsCRUD from '../../components/ButtonsCRUD';
import Sidebar from '../../components/Sidebar';
import { Styles } from './styles';

// import { Container } from './styles';

const ProductPage: React.FC = () => {
  return <div className="product-container">
    <Sidebar/>
    <Styles>
    <ButtonsCRUD/>
        <h1>Product</h1>
        </Styles>
    </div>;
}

export default ProductPage;