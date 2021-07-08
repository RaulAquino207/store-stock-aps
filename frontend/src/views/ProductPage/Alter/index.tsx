import React, { useEffect, useState } from 'react';
import { Styles } from './styles';
import api from '../../../services/api';
import { useHistory } from 'react-router-dom';
import { createStyles, makeStyles, withStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';

// import { Container } from './styles';

interface Props {
  id : any;
  onClose : any;
  showModal: any;
  checks : any;
}

const BootstrapInput = withStyles((theme: Theme) =>
  createStyles({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }),
)(InputBase);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1),
    },
  }),
);

const Alter: React.FC<Props> = ({id = "modal", onClose = () => {}, showModal, checks }) => {

  const token = localStorage.getItem("token");

  const [sections, setSections] = useState([]);
  const [products, setProducts] = useState([]);

  const [oldProductName, setOldProductName] = useState('');
  const [newProductName, setNewProductName] = useState('');

  const [oldProductImage, setOldProductImage] = useState('');
  const [newProductImage, setNewProductImage] = useState('');

  const [oldMinimumQuantity, setOldMinimumQuantity] = useState(0);
  const [newMinimumQuantity, setNewMinimumQuantity] = useState(0);

  const [oldCurrentQuantity, setOldCurrentQuantity] = useState(0);
  const [newCurrentQuantity, setNewCurrentQuantity] = useState(0);

  const [productId, setProductId] = useState(0);
  const [sectionID, setSectionID] = React.useState('');

  const history = useHistory();
  const classes = useStyles();

  const handleOutSideClick = (e : any) => {
    if(e.target.id === id){
      onClose();
    }
  }

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSectionID(event.target.value as string);
  }; 

  useEffect(() => {

    async function loadSections() {
      const response1 = await api.get('/section', {
        headers: { Authorization: `Bearer ${token}` }
      });
  
      const { result } = response1.data;
  
      setSections(result);
  
    }

    async function loadProducts() {
        const response2 = await api.get('/products', {
          headers: { Authorization: `Bearer ${token}` }
        });
    
        const { result } = response2.data;
    
        setProducts(result);
    
      }
      

    loadSections();
    loadProducts();

    if(products[checks['selectionModel']]){
      const { product_id, product_name, product_image, minimum_quantity, current_quantity } = products[checks['selectionModel']];
      setOldProductName(product_name);
      setOldProductImage(product_image);
      setOldMinimumQuantity(minimum_quantity);
      setOldCurrentQuantity(current_quantity);

      setProductId(product_id);
    }


  }, [showModal])

  async function handleSubmit(e: any){
    e.preventDefault();

    if(newProductName == '' || newProductImage == '' || newMinimumQuantity == 0){
      alert('Please provide a valid value');
    } else {
      try{
        await api.patch(`products/${productId}`, {
            product_name : newProductName,
            product_image : newProductImage,
            minimum_quantity : newMinimumQuantity,
            current_quantity : newCurrentQuantity,
            section_id : sectionID,
            });
            alert(`Product changed successfully`)
            onClose();
            window.location.reload();
      } catch(error) {
        alert(error);
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
            <legend className="label-input">Product name</legend>
            <input
                  type="text"
                  value={newProductName}
                  placeholder={oldProductName}
                  onChange={ e => setNewProductName(e.target.value)}
              />
              <legend className="label-input">Product image</legend>
              <input
                  type="text"
                  value={newProductImage}
                  placeholder={oldProductImage}
                  onChange={ e => setNewProductImage(e.target.value)}
              />
              <legend className="label-input">Minimum quantity</legend>
              <input
                  type="number"
                  value={newMinimumQuantity}
                  onChange={ e => setNewMinimumQuantity(e.target.valueAsNumber)}
              />
              <legend className="label-input">Current quantity</legend>
              <input
                  type="number"
                  value={newCurrentQuantity}
                  onChange={ e => setNewCurrentQuantity(e.target.valueAsNumber)}
              />
                <FormControl className={classes.margin}>
                <legend className="label-input">Section</legend>
                <InputLabel id="demo-customized-select-label"></InputLabel>
                <Select
                  labelId="demo-customized-select-label"
                  id="demo-customized-select"
                  value={sectionID}
                  onChange={handleChange}
                  input={<BootstrapInput />}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                    {sections.map((section) => (<MenuItem value={section['section_id']}>{section['section_id']}</MenuItem>))}
                </Select>
              </FormControl>
              <button type="submit">Change Product</button>
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