import React, { useState, useEffect } from "react";
import get from 'lodash/get';
import { Grid } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { getEmployeesListAPI }  from '../../api/ApiUtils';



const Overview = ({ match: { params: { name } } }) => {
  const [subordinates, setSubordinates] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  fetchEmployeesSubordinates();
}, []);

const fetchEmployeesSubordinates = async () => { 
  try {
    const response = await getEmployeesListAPI(name);
    const employeesSubordinatesDetails = get(response, `data[1]['direct-subordinates']`, []);
    setSubordinates(employeesSubordinatesDetails);
  }
  catch (e) {
    throw e;
  }
  finally {
    setIsLoading(false);
  }
}

return isLoading ? <CircularProgress /> : (
  <Grid container spacing={0} direction="column" alignItems="center" justify="center">
    <header>
      <h1>Employee Overview</h1>
    </header>
    <p>Subordinates of employee <b>{name}</b> </p>
    <ul>
      {subordinates && subordinates.map((subordinate) => <li>{subordinate}</li>)}
    </ul>
  </Grid>
  )
};

export default Overview;
