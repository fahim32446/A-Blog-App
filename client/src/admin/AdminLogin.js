import { Box, TextField, Button } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



const AdminLogin = () => {
    let navigate = useNavigate();
    const [info, setInfo] = useState({});
    const [err, setErr] = useState('false')

    const handleChange = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value })
    }



    const Login = async () => {


        await axios.post(`http://localhost:5000/api/auth/login`, info)
            .then(res => {
                localStorage.setItem('profile', (res.data));
                navigate('/dashboard')
            })
            .catch(err => {
                setErr(err.response.data);
            });


    }



    return (

        <Box
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '500px' }}>

            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: { xs: '80%', md: '50%' }, padding: '20px', textAlign: 'center', backgroundColor: '#f7f7f7', boxShadow: '1' }}>

                <TextField onChange={handleChange} sx={{ width: '300px', margin: '5px' }} id="outlined-basic" size="small" name='email' label="Email Address" variant="outlined" />

                <TextField onChange={handleChange} sx={{ width: '300px', margin: '5px' }} id="outlined-basic" size="small" name='password' label="Password" variant="outlined" />

                <Button onClick={Login} sx={{ width: '300px', margin: '5px', backgroundColor: 'green' }} size="medium" variant="contained">Login</Button>
                {err !== 'false' && (<span style={{color: 'red'}}> Wrong Credentials </span>)}
            </Box>


        </Box>
    )
}

export default AdminLogin