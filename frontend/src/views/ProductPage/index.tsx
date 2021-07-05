import { DataGrid } from '@material-ui/data-grid';
import React, { useEffect, useState } from 'react';
import ButtonsCRUD from '../../components/ButtonsCRUD';
import Sidebar from '../../components/Sidebar';
import api from '../../services/api';
import { StyledProduct } from './styles';

// import { Container } from './styles';

const ProductPage: React.FC = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {

    const token = localStorage.getItem("token");

    async function loadEmployees() {
      const response = await api.get('/products', {
        headers: { Authorization: `Bearer ${token}` }
      });
  
      const { result } = response.data;
      // console.log(result);
  
      setProducts(result);
  
    }

    loadEmployees();

  })

  return <div>
  <Sidebar/>
  <StyledProduct>
  <ButtonsCRUD/>
      <h1>Products</h1>
      <div className="table">
      <DataGrid checkboxSelection={false} rows={products.map((section : any, index : any) => ({... section, id : index}))} columns={[{field: 'product_id', headerName: 'ID'}, {field: 'product_name', headerName: 'Product', width: 150}, {field: 'product_image', headerName: 'Link', width: 150}, {field: 'minimum_quantity', headerName: 'Min', width: 150}, {field: 'current_quantity', headerName: 'Current', width: 150}, {field: 'section_id', headerName: 'Section', width: 150}, {field: 'store_id', headerName: 'Store', width: 150}]} pageSize={5} />
    </div>
    </StyledProduct>
  </div>;
}

export default ProductPage;