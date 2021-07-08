import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Styles } from "./styles";
import api from '../../services/api'
import Sidebar from '../../components/Sidebar';
import Nav from '../../components/Nav';

// import { Container } from './styles';

const MainPage: React.FC = () => {

  const history = useHistory();
  const [products, setProducts] = useState([]);
  
  const token = localStorage.getItem("token");

  useEffect(() => {


    if(!token){
      history.push('/login');
    }

    async function loadProduct() {
      const response = await api.get('/products', {
        headers: { Authorization: `Bearer ${token}` }
      })

      const { result } = response.data;

      setProducts(result);
    }
    loadProduct();
    
  }, [token]);

  


  return (<div>

  <Sidebar/>
  <Styles>
  <div className="main-container">
    <h1>Products in stock</h1>
    {<ul>
      {products.map((_product: any) => (
        <li key={_product._id}>
          <img className="image" src={_product.product_image} alt={_product.product_name}></img>
          <footer>
            <strong>
              {_product.product_name}
            </strong>
            <p>
            current quantity : {_product.current_quantity}
            </p>
          </footer>
        </li>
      ))}  
      
    </ul>}
    </div>
  </Styles>
  </div>);
}

export default MainPage;