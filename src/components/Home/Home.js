import React, { useState, useEffect } from "react";
import get from 'lodash/get';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles} from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { getEmployeesListAPI } from '../../api/ApiUtils';
import styles from './Home.styles'


const useStyles = makeStyles(styles);

const Home = (props) => {
  const classes = useStyles();

  const [employeeList, setEmployeeList] = useState([]);
  const [employeeName, setEmployeeName] = useState('');

  useEffect(() => {
    fetchEmployeeList();
  }, []);

  const fetchEmployeeList = async () => {
    try {
      const response = await getEmployeesListAPI();
      const employeeListDetails = get(response, 'data', []);
      setEmployeeList(employeeListDetails);
    }
    catch (e) {
      throw e;
    }
  }

  const handleFormSubmit = (event) => {
    event.stopPropagation();
    event.preventDefault();
    props.history.push(`/overview/${employeeName}`);	
  }

  const handleKeyPress = () => {
    props.history.push(`/overview/${employeeName}`);	
  }
  const handleEmployeeList = (e, newValue) => {
    setEmployeeName(newValue);
  }

  return (
    <Grid container spacing={0} direction="column" alignItems="center" justify="center">
      <h1>Employee Explorer Program</h1>
      <form className={classes.formContainer} onSubmit={handleFormSubmit}>
        <Autocomplete
          id="Employee Name"
          options={employeeList}
          onChange={handleEmployeeList}
          renderInput={(params) => <TextField {...params} label="Employee Name" variant="outlined" />}
        />
        <Button type="submit" className={classes.searchBtn} variant="contained" color="primary" disabled={!employeeName} onKeyPress={handleKeyPress}>Search</Button>
      </form>
    </Grid>
  );
};

export default Home;
