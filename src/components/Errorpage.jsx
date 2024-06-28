import React from 'react'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Typography } from '@mui/material';

function Errorpage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
        <ErrorOutlineIcon sx={{ width: '20vw', height: '20vh' }} />
        <Typography variant="h2">Error Item Not Found</Typography>
      </div>
  )
}

export default Errorpage