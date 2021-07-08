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
  const [employees, setEmployees] = useState([]);

  const [oldEmployeeName, setOldEmployeeName] = useState('');
  const [newEmployeeName, setNewEmployeeName] = useState('');

  const [oldEmployeeEmail, setOldEmployeeEmail] = useState('');
  const [newEmployeeEmail, setNewEmployeeEmail] = useState('');

  const [oldEmployeeToken, setOldEmployeeToken] = useState('');
  const [newEmployeeToken, setNewEmployeeToken] = useState('');

  const [employeeId, setEmployeeId] = useState(0);
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

    async function loadEmployees() {
        const response2 = await api.get('/employee', {
          headers: { Authorization: `Bearer ${token}` }
        });
    
        const { result } = response2.data;
    
        setEmployees(result);
    
      }
      

    loadSections();
    loadEmployees();

    if(employees[checks['selectionModel']]){
      const { employee_id, employee_name, email, token_login } = employees[checks['selectionModel']];
      setOldEmployeeName(employee_name);
      setOldEmployeeEmail(email);
      setOldEmployeeToken(token_login);

      setEmployeeId(employee_id);
    }


  }, [showModal])

  async function handleSubmit(e: any){
    e.preventDefault();

    if(newEmployeeName == '' || oldEmployeeEmail == ''){
      alert('Please provide a valid value');
    } else {
      try{
        await api.patch(`employee/${employeeId}`, {
            employee_name : newEmployeeName,
            email : newEmployeeEmail,
            token_login : newEmployeeToken,
            section_id : sectionID
            });
            alert(`Employee changed successfully`)
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
            <legend className="label-input">Section name</legend>
            <input
                  type="text"
                  value={newEmployeeName}
                  placeholder={oldEmployeeName}
                  onChange={ e => setNewEmployeeName(e.target.value)}
              />
              <legend className="label-input">Employee email</legend>
              <input
                  type="text"
                  value={newEmployeeEmail}
                  placeholder={oldEmployeeEmail}
                  onChange={ e => setNewEmployeeEmail(e.target.value)}
              />
              <legend className="label-input">Employee token</legend>
              <input
                  type="text"
                  value={newEmployeeToken}
                  placeholder={oldEmployeeToken}
                  onChange={ e => setNewEmployeeToken(e.target.value)}
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
              <button type="submit">Change Employee</button>
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