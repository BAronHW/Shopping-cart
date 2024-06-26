import React from 'react'
import { FormGroup, FormControlLabel, Checkbox, Typography } from '@mui/material';

function Sidebar({catarray}) {
  return (
    <div>
      <FormGroup>
        {catarray.map((category, index) => (<FormControlLabel control={<Checkbox/>} key={index} label={category}/>))}
      </FormGroup>
    </div>
  )
}

export default Sidebar

// this will take an array of unique categories found from api 
// create a checkbox for each of them
// have state saying which category is picked only one can be picked at a time.
// filter the itemdetails cards and only show the ones that match the category picked.