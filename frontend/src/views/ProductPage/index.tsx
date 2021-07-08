import { DataGrid } from '@material-ui/data-grid';
import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar';
import api from '../../services/api';
import { StyledProduct } from './styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AlterIcon from '@material-ui/icons/Edit'
import { Link } from 'react-router-dom';
import { IoMdAddCircle } from 'react-icons/io';
import Alter from './Alter';

// import { Container } from './styles';

const ProductPage: React.FC = () => {

  const token = localStorage.getItem("token");
  
  const [products, setProducts] = useState([]);
  const [checks, setChecks] = useState(Object);

  const [showModal, setShowModal] = useState(false);

  async function onClickDelete(e : any){
    e.preventDefault();
    console.log('Deletando', checks['selectionModel']['length']);

    for (let index = 0; index < checks['selectionModel']['length']; index++) {
      const element = checks['selectionModel'][index];
      console.log(products[element]['product_id']);

      await api.delete(`/products/${products[element]['product_id']}`);
      window.location.reload();
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

    async function loadEmployees() {
      const response = await api.get('/products', {
        headers: { Authorization: `Bearer ${token}` }
      });
  
      const { result } = response.data;
      // console.log(result);
  
      setProducts(result);
  
    }

    loadEmployees();

  }, [token])

  return <div>
  <Sidebar/>
  <StyledProduct>
      <h1>Products</h1>
      <div className="buttons">
          <IconButton aria-label="delete">
            <DeleteIcon fontSize="small" style={{color : `#FFF`}} className="buttons" onClick={onClickDelete}/>
          </IconButton>
          <IconButton aria-label="edit">
            <AlterIcon fontSize="small" style={{color : `#FFF`}} className="buttons" onClick={onClickAlter}/>
          </IconButton>
        </div>
      <div className="table">
      <DataGrid checkboxSelection={true} onSelectionModelChange={itm => setChecks(itm)} rows={products.map((section : any, index : any) => ({... section, id : index}))} columns={[{field: 'product_id', headerName: 'ID'}, {field: 'product_name', headerName: 'Product', width: 150}, {field: 'product_image', headerName: 'Link', width: 150}, {field: 'minimum_quantity', headerName: 'Min', width: 150}, {field: 'current_quantity', headerName: 'Current', width: 150}, {field: 'section_id', headerName: 'Section', width: 150}, {field: 'store_id', headerName: 'Store', width: 150}]} pageSize={5} />
      <Link to={'/main/product/create'}>
          <IoMdAddCircle style={{color : `#FFF`}}/>
      </Link>
      <Alter id="modal" onClose={() => setShowModal(showModal => !showModal)} showModal={showModal} checks={checks}/>
    </div>
    </StyledProduct>
  </div>;
}

export default ProductPage;