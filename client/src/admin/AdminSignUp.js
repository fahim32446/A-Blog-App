import React from 'react'
import { Box, TextField, Button } from '@mui/material'


const AdminSignUp = () => {
  return (
    <Box
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '500px' }}>

      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: { xs: '80%', md: '50%' }, padding: '20px', textAlign: 'center', backgroundColor: '#f7f7f7', boxShadow: '1' }}>

        <TextField sx={{ width: '300px', margin: '5px' }} id="outlined-basic" size="small" label="Your Name" variant="outlined" />
        <TextField sx={{ width: '300px', margin: '5px' }} id="outlined-basic" size="small" label="Email Address" variant="outlined" />
        <TextField sx={{ width: '300px', margin: '5px' }} id="outlined-basic" size="small" label="Password" variant="outlined" />
        <Button sx={{ width: '300px', margin: '5px', backgroundColor: 'green' }} size="medium" variant="contained">SignUp</Button>

      </Box>


    </Box>
  )
}

export default AdminSignUp