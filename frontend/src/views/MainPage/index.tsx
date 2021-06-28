import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Styles } from "./styles";
import api from '../../services/api'

// import { Container } from './styles';

const MainPage: React.FC = () => {

  const history = useHistory();
  const [products, setProducts] = useState([]);
  const [buttons, setButtons] = useState([]);

  

  useEffect(() => {
    const token = localStorage.getItem("token");

    if(!token){
      history.push('/login');
    }

    async function loadProduct() {
      const response = await api.get('/products', {
        headers: { Authorization: `Bearer ${token}` }
      })

      // console.log(response.data);

      const { result } = response.data;
      // console.log(result);

      result.map((_product: any) => console.log(_product.product_image));
      setProducts(result);
    }

    loadProduct();
    
  });

  return (
      <Styles>
          <h1> MAIN </h1>
          {}
            <ul>
              {products.map((_product: any) =>  (
                <div>
                <li key={_product._id}>
                  <img className="image" src={_product.product_image} alt={_product.product_name}></img>
                  {/* <img src="https://lh5.googleusercontent.com/okKx_ro1NlWvtAoD6oNIK_1fe67jTxR28uC3WyaH4pPQLSSFen1XC8idilcddin-56yPC8YGaTVh5fS75KlX=w2630-h1700-rw"></img> */}
                  <footer>
                  <strong>
                    {_product.product_name}
                  </strong>
                </footer>
                </li>
                </div>
              ))}
            </ul>
      </Styles>
  );
}

export default MainPage;