import React from 'react';
import { createStyles, makeStyles, withStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import { Styles } from './styles';
import Sidebar from '../../../components/Sidebar';
import api from '../../../services/api';
import { useHistory } from 'react-router-dom';

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

export default function CustomizedSelects() {
  const classes = useStyles();
  const history = useHistory();

  const [sections, setSections] = React.useState([]);
  const [productName, setProductName] = React.useState('');
  const [productImage, setProductImage] = React.useState('');
  const [minimumQuantity, setMinimumQuantity] = React.useState(0);
  const [currentQuantity, setCurrentQuantity] = React.useState(0);
  const [sectionID, setSectionID] = React.useState('');

  const id = localStorage.getItem("id");

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSectionID(event.target.value as string);
  };
  async function handleSubmit(e: any){
    e.preventDefault();

    if(productName == '' || productImage == '' || minimumQuantity == 0 || currentQuantity == 0){
      alert('Please provide a valid value');
    } else {
      try{
        await api.post(`products/${id}`, {
          product_name : productName,
          product_image : productImage,
          minimum_quantity : minimumQuantity,
          current_quantity : currentQuantity,
          section_id : sectionID
            });
            alert('Employee created successfully')
            history.push(`/main/product`);
      } catch(error) {
        alert(error.response.data.message);
      }
    }

}
  
  React.useEffect(() => {

    const token = localStorage.getItem("token");

    async function loadSections() {
      const response = await api.get('/section', {
        headers: { Authorization: `Bearer ${token}` }
      });

      const { result } = response.data;
      // console.log(result);

      setSections(result);

    }

    loadSections();

  })
  return (
    <div>
      <Sidebar/>
      <Styles>
      <h1>CREATE PRODUCT</h1>
      <form onSubmit={handleSubmit} >
            <fieldset>
            <legend>Product</legend>
            <div className="workaround">
            <legend className="label-input">Product name</legend>
              <input
                  type="text"
                  value={productName}
                  onChange={ e => setProductName(e.target.value)}
              />
              <legend className="label-input">Product image</legend>
              <input
                  type="text"
                  value={productImage}
                  onChange={ e => setProductImage(e.target.value)}
              />
              <legend className="label-input">Minimum quantity</legend>
              <input
                  type="number"
                  value={minimumQuantity}
                  onChange={ e => setMinimumQuantity(e.target.valueAsNumber)}
              />
              <legend className="label-input">Current quantity</legend>
              <input
                  type="number"
                  value={currentQuantity}
                  onChange={ e => setCurrentQuantity(e.target.valueAsNumber)}
              />
            <legend className="label-input">Section</legend>
        <FormControl className={classes.margin}>
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
              <button type="submit">Add Product</button>
            </div>
            </fieldset>
        </form>


      </Styles>
    </div>
  );
}