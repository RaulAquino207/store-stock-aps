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
  const [employeeName, setEmployeeName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [sectionID, setSectionID] = React.useState('');

  const id = localStorage.getItem("id");

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSectionID(event.target.value as string);
  };
  async function handleSubmit(e: any){
    e.preventDefault();

    if(employeeName == '' || email == ''){
      alert('Please provide a valid value');
    } else {
      try{
        await api.post(`employee/${id}`, {
          employee_name : employeeName,
          email : email,
          section_id : sectionID
            });
            alert('Employee created successfully')
            history.push(`/main/employee`);
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
      <h1>CREATE EMPLOYEE</h1>
      <form onSubmit={handleSubmit} >
            <fieldset>
            <legend>Employee</legend>
            <div className="workaround">
              <input
                  type="text"
                  placeholder="Type employee name"
                  value={employeeName}
                  onChange={ e => setEmployeeName(e.target.value)}
              />
              <input
                  type="text"
                  placeholder="Type employee email"
                  value={email}
                  onChange={ e => setEmail(e.target.value)}
              />
        <FormControl className={classes.margin}>
        <InputLabel id="demo-customized-select-label">section</InputLabel>
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
              <button type="submit">Add Employee</button>
            </div>
            </fieldset>
        </form>


      </Styles>
    </div>
  );
}